+++
title = "Vite vs Webpack (MF)"
template = "blog-post.html"
description = "Comparing Vite and Webpack for microfrontend development"
+++

![blog-cover](/images/blog/2024-06-01/vite-vs-webpack.webp)

<h4><b>Overview</b></h4>

<b>Vite</b> and <b>Webpack</b> are popular module bundlers with different approaches, especially regarding microfrontends.

<h4><b>Key Points of Comparison</b></h4>

<b>1. Module Federation</b>

- <b>Webpack:</b> Uses <i>ModuleFederationPlugin</i> for sharing code.
- <b>Vite:</b> Uses <i>vite-plugin-federation</i>.

<b>2. Development Experience</b>

- <b>Hot Reloading:</b>
  - <b>Webpack:</b> Supports live hot reloading.
  - <b>Vite:</b> Requires build and preview commands, not as fast as Webpack.
- <b>Running All Microfrontends:</b> Vite needs all microfrontends running for the host to work.

<b>3. Remote Entry Generation</b>

- <b>Webpack:</b> Generates remoteEntry.js during development.
- <b>Vite:</b> Generates remoteEntry.js only during the build.

<b>4. Compatibility</b>
- <b>Interoperability</b> between Webpack and Vite requires special handling for proper communication.

![garnalds](/images/blog/general/garlands.png)


<h4><b>Resources</b></h4>

- Learn to create a <b>Webpack</b> project with MF: <a target="_blank" href="https://youtu.be/lKKsjpH09dU?si=lVE58HAuWyddfuRe" class="presentation-text">Click here</a>

- Learn to create a <b>VITE</b> project with MF: <a target="_blank" href="https://www.youtube.com/watch?si=D_stg3jW_fGL2uKh&v=t-nchkL9yIg&feature=youtu.be" class="presentation-text">Click here</a>

<h4><b>Conclusion</b></h4>

Choosing <b>Webpack</b> or <b>Vite</b> depends on your project needs. <b>Webpack</b> works well with microfrontends and has a mature ecosystem. <b>Vite</b> is faster for development and builds but needs all microfrontends built and previewed for Module Federation.