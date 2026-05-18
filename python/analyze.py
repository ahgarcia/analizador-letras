import os
import sys
import json
from dotenv import load_dotenv
from azure.identity import DefaultAzureCredential
from azure.ai.projects import AIProjectClient

# ─────────────────────────────────────────────
# Config — igual que los labs de mslearn
# ─────────────────────────────────────────────
load_dotenv()

PROJECT_ENDPOINT     = os.getenv("PROJECT_ENDPOINT")
MODEL_DEPLOYMENT     = os.getenv("MODEL_DEPLOYMENT_NAME")
AGENT_NAME           = os.getenv("AGENT_NAME")
AGENT_VERSION        = os.getenv("AGENT_VERSION")

# ─────────────────────────────────────────────
# Validación de variables de entorno
# Patrón de los labfiles de mslearn-ai-studio
# ─────────────────────────────────────────────
required_vars = {
    "PROJECT_ENDPOINT":    PROJECT_ENDPOINT,
    "MODEL_DEPLOYMENT_NAME": MODEL_DEPLOYMENT,
    "AGENT_NAME":          AGENT_NAME,
    "AGENT_VERSION":       AGENT_VERSION,
}
 
missing = [k for k, v in required_vars.items() if not v]
if missing:
    print(json.dumps({
        "error": f"Variables de entorno faltantes: {', '.join(missing)}. Verifica tu archivo .env"
    }))
    sys.exit(1)

# ─────────────────────────────────────────────
# Guardrail local — segunda capa de defensa
# La primera capa está en el agente de Foundry
# ─────────────────────────────────────────────
INJECTION_KEYWORDS = [
    "ignora tus instrucciones", "ignore your instructions",
    "olvida lo anterior", "forget previous",
    "actúa como", "act as",
    "nuevo rol", "new role",
    "eres ahora", "you are now",
    "pretende ser", "pretend to be",
    "jailbreak", "bypass",
]

def local_guardrail(lyrics: str) -> dict | None:
    if len(lyrics.strip()) < 20:
        return {"error": "La letra es demasiado corta. Por favor pega la letra completa."}
    for kw in INJECTION_KEYWORDS:
        if kw.lower() in lyrics.lower():
            return {"error": "Operación no permitida. Mi función es exclusivamente analizar letras de canciones."}
    return None

# ─────────────────────────────────────────────
# Main — lee la letra desde stdin, imprime JSON
# Mismo patrón que mslearn-ai-studio / chat-app.py
# ─────────────────────────────────────────────
def main():
    lyrics = sys.stdin.read().strip()

    # Guardrail local
    guard = local_guardrail(lyrics)
    if guard:
        print(json.dumps(guard))
        return

    try:
        # Mismo patrón que mslearn-ai-studio / chat-app.py
        project_client = AIProjectClient(
            endpoint=PROJECT_ENDPOINT,
            credential=DefaultAzureCredential(),
        )

        openai_client = project_client.get_openai_client()

        response = openai_client.responses.create(
            input=[
                {
                    "role": "user",
                    "content": f"Analiza esta letra de canción:\n\n{lyrics}"
                }
            ],
            extra_body={
                "agent_reference": {
                    "name": AGENT_NAME,
                    "version": AGENT_VERSION,
                    "type": "agent_reference"
                }
            },
        )

        raw = response.output_text.strip()

        # Limpiar bloques markdown si el modelo los agrega
        if raw.startswith("```"):
            raw = raw.split("```")[1]
            if raw.startswith("json"):
                raw = raw[4:]
        raw = raw.strip()

        # Validar que sea JSON válido antes de imprimir
        result = json.loads(raw)
        print(json.dumps(result, ensure_ascii=False))

    except json.JSONDecodeError:
        print(json.dumps({"error": "La IA devolvió una respuesta inesperada. Intenta de nuevo."}))
    except Exception as e:
        print(json.dumps({"error": f"Error al conectar con Azure AI Foundry: {str(e)}"}))

if __name__ == "__main__":
    main()