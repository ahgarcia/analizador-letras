# 🎵 Analizador de Letras de Canciones

## Vista previa

![Analizador de Letras - Hero](docs/screenshot-hero.png)
![Analizador de Letras - Resultados](docs/screenshot-resultados.png)

Aplicación web que analiza letras de canciones con inteligencia artificial
y devuelve género musical, estado de ánimo, artistas similares e historia
del género — usando el agente **MusicAnalyzer** en Azure AI Foundry.

---

## 🤖 Justificación del uso de IA

### ¿Qué función de IA se implementó?

Se integró un agente llamado **MusicAnalyzer** en **Azure AI Foundry**
usando el modelo `gpt-4.1`. El agente recibe la letra de una canción
y devuelve un análisis estructurado en JSON con los siguientes campos:

| Campo | Descripción |
|---|---|
| `genre` | Género musical detectado |
| `mood` | Estado de ánimo de la letra |
| `energy` | Nivel de energía (Alto / Medio / Bajo) |
| `similarArtists` | 3 artistas con estilo similar |
| `history` | Historia y contexto del género |
| `themes` | Temas principales de la letra |
| `lyricalComplexity` | Complejidad lírica (Alta / Media / Baja) |
| `culturalInfluence` | Influencia cultural del género |
| `summary` | Resumen del significado de la canción |

### ¿Por qué se eligió Azure AI Foundry?

1. **Agente centralizado**: Las instrucciones, guardrails y comportamiento
   del modelo se definen en Foundry, separados del código fuente.
2. **Guardrails nativos**: Content Safety de Azure (Microsoft.DefaultV2)
   complementa los guardrails definidos en el system prompt del agente.
3. **Mismo patrón de los labs**: Uso de `AIProjectClient` con
   `DefaultAzureCredential`, idéntico a los laboratorios de
   `mslearn-ai-studio` vistos en el curso.
4. **Trazabilidad**: Foundry registra cada interacción para auditoría
   y mejora continua del agente.

### ¿Para qué se usa la IA?

La IA realiza una tarea imposible de programar con lógica determinística:
inferir características subjetivas de texto como género musical, estado
emocional e influencias culturales a partir del lenguaje natural de una
letra. El modelo actúa como un musicólogo experto que interpreta el
contenido semántico y contextual de cada canción.

---

## 🛡️ Guardrails implementados

Se implementaron tres capas de seguridad:

### Guardrail 1 — Bloqueo de dominio
*Implementado en el system prompt del agente en Azure AI Foundry.*

El agente rechaza cualquier mensaje que no sea una letra de canción.
Ejemplo: preguntar por la capital de Francia devuelve un error sin
procesar la solicitud.

### Guardrail 2 — Protección contra prompt injection
*Implementado en el system prompt del agente + validación local en `analyze.py`.*

Se detectan patrones de inyección como "ignora tus instrucciones",
"actúa como", "eres ahora", "nuevo rol". La validación ocurre en
el servidor antes de llegar al agente, sin gastar tokens.

**Ejemplo — intento de prompt injection bloqueado:**
![Guardrail 2 - Prompt injection](docs/screenshot-resultados_error_ia.png)

**Ejemplo — intento de cambio de rol bloqueado:**
![Guardrail 2 - Cambio de rol](docs/screenshot-resultados_error.png)

### Guardrail 3 — Filtro de contenido ofensivo
*Implementado con Azure Content Safety — límite de protección `Microsoft.DefaultV2`.*

Bloquea odio, autolesiones, contenido sexual y violencia tanto en
la entrada del usuario como en el resultado generado por el modelo.

---

## 🏗️ Arquitectura

```
Frontend React (Vite + Tailwind CSS)
    ↓  fetch POST /api/analyze  { lyrics: "..." }
server/index.js (Bridge Express — Vite proxy en dev)
    ↓  spawn proceso hijo — stdin/stdout
python/analyze.py (mismo patrón que mslearn-ai-studio/chat-app.py)
    ↓  AIProjectClient + DefaultAzureCredential (az login)
Azure AI Foundry — Agente MusicAnalyzer (gpt-4.1)
    ├── System prompt con guardrails 1 y 2
    ├── Límite de protección Microsoft.DefaultV2 (guardrail 3)
    ↓
JSON estructurado → adaptarRespuesta() en App.jsx → UI de resultados
```

---

## 🚀 Instalación y uso

### Requisitos previos

- Node.js 18+
- Python 3.11+
- Azure CLI instalado (`brew install azure-cli` en macOS)
- Acceso al proyecto `proj-default` en Azure AI Foundry

### 1. Clonar e instalar dependencias

```bash
git clone <url-del-repo>
cd music-app
npm install
```

### 2. Configurar entorno Python

```bash
cd python
python3 -m venv .venv
source .venv/bin/activate      # macOS/Linux
pip install -r requirements.txt
cd ..
```

### 3. Autenticarse con Azure

```bash
az login
```

### 4. Correr el proyecto

```bash
# Terminal 1 — Bridge server
node server/index.js

# Terminal 2 — Frontend React
npm run dev
```

Abrir en el navegador: `http://localhost:5173`

### 5. Prueba directa del script Python (opcional)

```bash
cd python
source .venv/bin/activate
echo "Tu letra aquí" | python3 analyze.py
```

---

## 🛠️ Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + Vite + Tailwind CSS |
| Bridge | Node.js + Express |
| IA | Azure AI Foundry + gpt-4.1 |
| Auth | DefaultAzureCredential (`az login`) |
| Python SDK | `azure-ai-projects>=2.1.0` + `azure-identity` |

---

## 📁 Estructura del proyecto

```
music-app/
├── python/
│   ├── analyze.py        ← equivalente a chat-app.py de mslearn-ai-studio
│   ├── requirements.txt
│   └── .env              ← credenciales Azure (no se sube a GitHub)
├── server/
│   └── index.js          ← bridge Express entre React y Python
├── src/
│   ├── App.jsx           ← lógica principal + adaptarRespuesta()
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Analizador.jsx
│   │   ├── ResultadoCard.jsx
│   │   └── Footer.jsx
│   └── data/
│       └── mockResults.js
├── docs/
│   ├── screenshot-hero.png
│   ├── screenshot-resultados.png
│   ├── screenshot-resultados_error_ia.png
│   └── screenshot-resultados_error.png
├── vite.config.js        ← proxy /api → localhost:3001
├── package.json
└── README.md
```

---

## Uso de herramientas de IA en el desarrollo

Este proyecto fue desarrollado con asistencia de GitHub Copilot y
Claude (Anthropic) para generación de componentes React, integración
con Azure AI Foundry, diseño del sistema de guardrails y configuración
del bridge Node.js ↔ Python.

---

Tarea 3 — Azure AI Foundry · Instituto Tecnológico de Orizaba
AI-103 Introduction · 2026