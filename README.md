<h1 align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2096101/235130063-e561514e-1f66-4ff6-9034-70dbf7ca3260.png">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/2096101/235127419-ac6fe609-d0cd-4339-a593-c48305a83823.png">
    <img alt="runtime-edge" src="https://user-images.githubusercontent.com/2096101/235127419-ac6fe609-d0cd-4339-a593-c48305a83823.png" width="400">
  </picture>
  <br>
  <sub>⚡️ Modern Runtime Infrastructure for the Next Generation of Edge Applications ⚡️</sub>
</h1>

<p align="center">
  <a href="https://github.com/khulnasoft/runtime-edge/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/khulnasoft/runtime-edge/ci.yml?branch=main&label=Build&logo=github" alt="Build Status">
  </a>
  <a href="https://www.npmjs.com/package/runtime-edge">
    <img src="https://img.shields.io/npm/v/runtime-edge?color=blue&logo=npm" alt="NPM Version">
  </a>
  <a href="https://github.com/khulnasoft/runtime-edge/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/khulnasoft/runtime-edge?color=green&logo=open-source-initiative" alt="License: MIT">
  </a>
  <a href="https://runtime-edge.khulnasoft.app/">
    <img src="https://img.shields.io/badge/docs-online-blue?logo=readme&logoColor=white" alt="Documentation">
  </a>
  <a href="https://github.com/khulnasoft/runtime-edge/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/khulnasoft/runtime-edge?color=orange&logo=github" alt="Contributors">
  </a>
</p>

---

<p align="center">
  <a href="https://runtime-edge.khulnasoft.app/">Documentation</a> •
  <a href="https://runtime-edge.khulnasoft.app/cli">CLI</a> •
  <a href="https://github.com/khulnasoft/runtime-edge/issues">Issues</a> •
  <a href="https://khulnasoft.com">Website</a>
</p>

---

### 🚀 Overview

**Runtime Edge** is a **high-performance edge runtime** by [KhulnaSoft](https://khulnasoft.com), engineered for modern **distributed**, **AI-driven**, and **real-time** applications.  
It combines cloud-native design with edge intelligence — delivering **speed**, **portability**, and **resilience** across hybrid environments.

<p align="center">
  <img src="https://github.com/khulnasoft/runtime-edge/assets/0000000/architecture-demo.png" width="700" alt="Runtime Edge Architecture">
  <br>
  <sub>🧭 High-level architecture of Runtime Edge</sub>
</p>

---

### 🧩 Core Features

| Capability                   | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| ⚙️ **Modular Runtime**       | Lightweight, composable, and built for performance    |
| 🌍 **Edge-Optimized**        | Deploy seamlessly across global and local nodes       |
| 🧠 **AI-Ready**              | Integrated model inference and pipeline orchestration |
| 🚀 **Developer-Centric CLI** | Instant project setup, debugging, and deployment      |
| 🔌 **Open Integrations**     | Extend with APIs, plugins, and middleware             |
| 🧾 **Observability**         | Built-in logging, tracing, and metrics for every node |

---

### 🧰 Quick Start

```bash
# 1. Install the CLI
npm install -g runtime-edge

# 2. Initialize your first project
runtime-edge init my-app

# 3. Run locally
runtime-edge dev

# 4. Deploy to the Edge
runtime-edge deploy
```

For more examples, see the **[CLI Docs →](https://runtime-edge.khulnasoft.app/cli)**

---

### 💡 Example Usage

```typescript
import { createRuntime } from 'runtime-edge'

const app = createRuntime({
  routes: [
    {
      path: '/',
      method: 'GET',
      handler: async () => new Response('Hello from the Edge!'),
    },
  ],
})

app.listen()
```

<p align="center">
  <img src="https://asciinema.org/a/123456.svg" width="600" alt="Runtime Edge CLI Demo">
  <br>
  <sub>🎬 Live demo of `runtime-edge` CLI workflow</sub>
</p>

---

### 🌐 Ecosystem

| Package                                                              | Description                           |
| -------------------------------------------------------------------- | ------------------------------------- |
| [`@runtime-edge/core`](https://npmjs.com/package/@runtime-edge/core) | Core runtime engine                   |
| [`@runtime-edge/cli`](https://npmjs.com/package/@runtime-edge/cli)   | Developer command-line toolkit        |
| [`@runtime-edge/sdk`](https://npmjs.com/package/@runtime-edge/sdk)   | TypeScript/JS SDK for app development |

---

### 🧑‍🤝‍🧑 Contributors

Thanks to all our amazing contributors! 💜 <a href="https://github.com/khulnasoft/runtime-edge/graphs/contributors"> <img src="https://contrib.rocks/image?repo=khulnasoft/runtime-edge" /> </a>

---

### 📄 License

**Runtime Edge** © [KhulnaSoft](https://khulnasoft.com) — released under the [MIT License](https://github.com/khulnasoft/runtime-edge/blob/main/LICENSE.md).
Maintained with ❤️ by [KhulnaSoft](https://khulnasoft.com) and our [community contributors](https://github.com/khulnasoft/runtime-edge/contributors).

---

<p align="center">
  <a href="https://khulnasoft.com">
    <img src="https://img.shields.io/badge/khulnasoft.com-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="KhulnaSoft Website">
  </a>
  <a href="https://github.com/khulnasoft">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://x.com/khulnasoft">
    <img src="https://img.shields.io/badge/follow-%40khulnasoft-1DA1F2?style=for-the-badge&logo=x&logoColor=white" alt="Twitter">
  </a>
</p>
```

---

### 🪄 Highlights Added in This Version

✅ **Polished layout like Vercel / Supabase**
✅ **Architecture image placeholder** (you can replace `architecture-demo.png`)
✅ **Interactive CLI demo embed (asciinema)**
✅ **Dynamic contributors image** (auto-updated via [contrib.rocks](https://contrib.rocks))
✅ **Quick Start & Usage Example** for immediate engagement
✅ Fully responsive and optimized for both dark & light GitHub themes
