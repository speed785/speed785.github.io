# \[speed785\] — AI Agent Tooling

> Open-source tools for AI agent pipelines: observability, memory, security, orchestration, and evaluation.

**Live site:** [speed785.github.io](https://speed785.github.io)

---

## What is this?

This repository is the source for the **speed785 landing page** — a single-page static site that serves as the hub for five open-source tools designed to solve real bottlenecks in AI agent development.

## The Stack

| Tool | Purpose | Links |
|------|---------|-------|
| **agentlens** | DevTools for AI agents — per-call latency & token accounting, drop-in OpenAI/Anthropic wrappers, JSON trace export & CLI viewer | [GitHub](https://github.com/speed785/agentlens) · [Docs](https://speed785.github.io/agentlens) |
| **neuromem** | Smart context management — multi-factor importance scoring, extractive & abstractive summarization, token budget enforcement | [GitHub](https://github.com/speed785/neuromem) · [Docs](https://speed785.github.io/neuromem) |
| **sentinel-inject** | Prompt injection defense — dual-layer rules + LLM classification, 4 sanitization modes, middleware wraps any tool in one line | [GitHub](https://github.com/speed785/sentinel-inject) · [Docs](https://speed785.github.io/sentinel-inject) |
| **synapse-orchestrator** | Parallel tool execution — automatic dependency DAG analysis, 3-10x speedup on fan-out pipelines | [GitHub](https://github.com/speed785/synapse-orchestrator) · [Docs](https://speed785.github.io/synapse-orchestrator) |
| **evalforge** | Agent evaluation harness — 6 scoring strategies, regression tracking, HTML & JSON report generation | [GitHub](https://github.com/speed785/evalforge) · [Docs](https://speed785.github.io/evalforge) |

## Quick install

```bash
pip install agentlens neuromem sentinel-inject synapse-orchestrator evalforge
```

All five packages have **zero required dependencies** and work with any LLM provider.

## Tech stack (this site)

- **HTML / CSS / JavaScript** — no frameworks, no build step, no bundler
- **Fonts** — JetBrains Mono (monospace) + IBM Plex Sans (body) via Google Fonts
- **Hosting** — GitHub Pages, served directly from the default branch
- **Background** — Canvas-based matrix rain particle animation

## Project structure

```
speed785.github.io/
├── index.html          # Single-page site markup
├── style.css           # Full stylesheet (dark theme, responsive grid, animations)
├── script.js           # Scroll fade-in observer + matrix rain canvas animation
├── assets/             # SVG icons for each tool
│   ├── agentlens-icon.svg
│   ├── neuromem-icon.svg
│   ├── sentinel-inject-icon.svg
│   ├── synapse-orchestrator-icon.svg
│   └── evalforge-icon.svg
├── social-preview.svg  # Open Graph / social preview image
├── .github/
│   └── CODEOWNERS      # @speed785 owns all files
├── README.md
└── Agents.md           # Guidance for AI coding agents working in this repo
```

## Local development

No build tools required. Open `index.html` in a browser, or serve it locally:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

## License

MIT
