+++
title = "Shared Styles in Monorepos"
template = "blog-post.html"
description = "Approaches to maintain consistent styles across multiple projects in a monorepo environment"
+++

![blog-cover](/images/blog/2024-09-01/shared-styles-monorepo.webp)

<h4><b>🤔 Overview</b></h4>

In large-scale projects, especially those using a monorepo structure, maintaining consistent styles across multiple applications is crucial. Here are two key approaches for managing shared styles:

1. 📦 Creating a shared styles library as an <b>npm package</b>.
2. 🔗 Directly importing styles from <b>a centralized directory</b> within the monorepo.

---

<h4><b>📦 1. Creating a Styles Library with npm</b></h4>

<b>Overview:</b> This approach involves creating a dedicated styles library that is published as an npm package. The styles can then be imported into any project that needs them.

<b>Implementation:</b> For example, if you're working with custom theme styles for PrimeReact, you can create your styles in a library and export them using an `index.js` file like this:

<div style="border: 1px solid white; font-style: italic; border-radius: 1rem; padding: 0.5rem; margin: 10px 0">
module.exports = {
    theme: require('./style/themes/my-theme/theme.scss'),
};
</div>

After publishing the package, you can install it in your projects using:
<div style="border: 1px solid white; font-style: italic; border-radius: 1rem; padding: 0.5rem; margin: 10px 0">
npm i my-theme
</div>

Then, simply import the styles in your main JavaScript entry point:
<div style="border: 1px solid white; font-style: italic; border-radius: 1rem; padding: 0.5rem; margin: 10px 0">
import 'my-theme';
</div>

<b>Pros:</b>
Centralized version control of styles.
Easy to update and distribute across multiple projects.

<b>Cons:</b>
Requires publishing and versioning with each change.

<h4><b>🔗 2. Direct Import from a Centralized Directory</b></h4>

<b>Overview:</b> If you’re using a monorepo setup, you can store your styles in a central directory and import them directly into each project.

<b>Implementation:</b> Place your styles in a folder at the root level, parallel to your apps, and import them in your projects:

<div style="border: 1px solid white; font-style: italic; border-radius: 1rem; padding: 0.5rem; margin: 10px 0">
import '../style/themes/black-and-red-theme/theme.scss';
</div>

<b>Pros:</b>
No need to publish or manage versions.
Immediate access to the latest styles without additional steps.

<b>Cons:</b>
Potential for accidental breaking changes if styles are updated.
Dependency on monorepo structure; harder to manage if the projects are split into different repositories.

<h4><b>❓ What to choose</b></h4>

- Use a <b>npm package</b> if you want to have strict version control or you don't have all your projects in the same folder.
- Use directly importing from <b>a centralized directory</b> if you prefer a simpler solution and your code structure allows it.