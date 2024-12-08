+++
title = "Getting Started with Vite"
template = "blog-post.html"
description = "A beginner-friendly guide to starting your development workflow with Vite."
+++

![blog-cover](/images/blog/2024-12-30/vite.png)
<h4><b>Setting Up a Vite Project</b></h4>

**1. Start a project with Vite**

To start a project with Vite, you can either create a basic project or directly specify a template

**1.1. Option 1.** Install Vite

```sh
npm create vite@latest my-vite-app
```
> Replace `my-vite-app` with your project name.

**1.2 Option 2.** Choose a Template

Vite supports vanilla JavaScript, React, Vue, Svelte, and <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project" target="_blank">more</a>. For example, to create a React app, you can specify it directly:

```sh
npm create vite@latest my-react-app -- --template react
```

**2. Install Dependencies**
After creating the project, navigate into the directory and install the dependencies:

```sh
cd my-vite-app
npm install
```
**3. Run the Development Server**
Start the development server with:

```sh
npm run dev
```
Vite's blazing-fast Hot Module Replacement (HMR) ensures near-instantaneous updates as you
code.

---

<h4><b>Key Configuration Options</b></h4>

Configuring your `vite.config.js` is crucial for improving the development experience.

**1. Alias Imports**

Simplify your imports by defining aliases:

```js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
```

**2. Environment Variables**

Vite supports `.env` files for managing configurations. Create a `.env` file and define variables:

```env
VITE_API_URL=https://api.example.com
```
Access these variables in your app with `import.meta.env`:

```js
console.log(import.meta.env.VITE_API_URL);
```

**3. Plugins**

Extend Vite's functionality using <a href="https://vite.dev/plugins/#plugins" target="_blank">plugins</a>, such as `@vitejs/plugin-react` for React projects. Install it and add it to your configuration:

```sh
npm install @vitejs/plugin-react
```

```javascript
import react from '@vitejs/plugin-react';
    export default defineConfig({
    plugins: [react()]
});
```

---

<h4><b>Challenges and Considerations</b></h4>
<p>While Vite offers a powerful development experience, there are some challenges to keep in mind:</p>

1. **Hot Module Replacement (HMR)**
Vite's HMR is fast, but integrating it with certain frameworks or configurations (like Module
Federation) may require additional effort.

2. **Build Performance**
Vite leverages Rollup for production builds, which may require fine-tuning for large applications.

3. **Cross-Browser Compatibility**
Ensure your app is transpiled for older browsers using the `@vitejs/plugin-legacy` plugin.

```sh
npm install @vitejs/plugin-legacy
```

```js
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    plugins: [legacy()]
});
```

---

![garnalds](/images/blog/general/garlands.png)

<h4>Resources</h4>

- <a target="_blank" href="https://vite.dev/">VITE DOC</a>
- **Learn VITE + Module Federation** with this video tutorial by Jack Herrington. <a target="_blank" href="https://vite.dev/">Watch it here</a>.