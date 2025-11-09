# Design Systems with Storybook - tryout

- [Storybook](https://storybook.js.org/docs/get-started/frameworks/react-vite?renderer=react) instatiated in existing [vite](https://vite.dev/guide/) react app

```bash
npm create storybook@latest
```

- lint and format with [biome](https://biomejs.dev/guides/getting-started/)

- styling with [tailwind](https://tailwindcss.com/docs/installation/using-vite)

## Additional addons

```bsah
npm i -D @storybook/addon-themes
```

<!-- 
## Disble tailwind if you want

```ts
// comment out this in /.storybook/preview.ts  
import "../src/style.css";
```
-->

# Styling

I am using tailwind V4, so we do not need postcss, and [Autoprefixing](https://www.npmjs.com/package/autoprefixer) is built-in automatically

## Dark theme

using classes, this way: `@custom-variant dark(&:where .dark, .dark *)`

<https://tailwindcss.com/docs/dark-mode>

