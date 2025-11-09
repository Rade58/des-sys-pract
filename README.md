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

we set up everything in `src/style.css`

## Dark mode

Tried both using classes and using data attribute, so we opted out media queries for prefered color scheme

- **using `class`**:

in css specify this: `@custom-variant dark(&:where .dark, .dark *)`

<https://tailwindcss.com/docs/dark-mode>

You also need to set up decorators in `.storybook/preview.ts` with `withThemeByClassName` and specify _@storybook/addon-themes_ inside `.storybook/main.ts`

- **using `data-` attribute**:

just add this to css instead of class setup `@custom-variant dark(&:where [data-theme="dark"], [data-theme="dark"] *)`

and inside `.storybook/preview.ts` use `withThemeByDataAttribute`

## Tools for generating tints for figma

[Color, Tint & Shade Generator](https://www.figma.com/community/plugin/1143464892862229742/color-tint-shade-generator)

[tints and shades](https://www.figma.com/community/plugin/943569346291474506/tints-and-shades)

- Then all colors should be added to css variables with naming that would be apropriate for generating css custom properties with tools like this one: [variables2css](https://www.figma.com/community/plugin/1261234393153346915/variables2css)

