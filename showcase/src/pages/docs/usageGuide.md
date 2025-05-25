---
layout: ../../layouts/DocsLayout.astro
title: Usage Guide
order: 2
---

# Usage Guide

If you're a designer or just want to grab icons without any installations, simply head over to the [icons page](https://sse-auth.github.io/icons/icons/All) and download your desired icons.

For those with a React project, integrating `sse-icons` via our npm package is the best and easiest method.

## 📦 Installation

To add the icons to your project, run one of the following commands:

```bash
npm i @sse-auth/icons
```

or

```bash
yarn add @sse-auth/icons
```

or

```bash
pnpm add @sse-auth/icons
```

## 🛠️ Usage

Import named icon components from the `@sse-auth/icons` package and use them just like any other React component, with props/attributes similar to those of an SVG:

```javascript
import { AppleDark, Auth0 } from "@sse-auth/icons";

//inside your React component JSX
export const YourReactComponent = () => {
  return (
    <div>
      <AppleDark className="apple-icon" />
      <Auth0 size={52} style={{ marginLeft: 20 }} />
    </div>
  );
};
```

In this example, we import `AppleDark` and `Auth0` from the `@sse-auth/icons` package and use them within a React component. You can customize the icons by adjusting their `size`, `color`, `style`, and other properties.

<div style="margin-top: 12px" />

To explore all the available icons, visit our [icons page](https://sse-auth.github.io/icons/icons/All "Icons | SSE Icons").

<div style="margin-top: 20px">
Happy coding! 🚀
</div>
