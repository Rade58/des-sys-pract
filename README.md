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

## Color and variable plugin for figma

[Tailwind CSS Color Generator](https://www.figma.com/community/plugin/1559145837943070163)

But it is better to make variables by yourself (also in figma variables can use other variables values which is great for taiwind components styles)

## Tools for generating tints for figma

[Color, Tint & Shade Generator](https://www.figma.com/community/plugin/1143464892862229742/color-tint-shade-generator)

[tints and shades](https://www.figma.com/community/plugin/943569346291474506/tints-and-shades)


## Variables exporters or css custom properies generators

Then all colors should be added to css variables with naming that would be apropriate for generating css custom properties with tools like these:

- [Tailwind CSS v4 variables to Figma](https://www.figma.com/community/plugin/1463378448591477945/tailwind-css-v4-variables-to-figma)

- [Tailwind CSS v4 variables to Figma](https://www.figma.com/community/plugin/1463378448591477945/tailwind-css-v4-variables-to-figma)

- [Layout - Tailwind CSS V4 Import & Expor](https://www.figma.com/community/plugin/1482322139658592700/layout-tailwind-css-v4-import-export)
  
outdated ones, it is for older tailwind versions before v4 but you can copy from them what you need

- [Export Variables (CSS, SCSS, Tailwind)](https://www.figma.com/community/plugin/1382804904426179542/export-variables-css-scss-tailwind)

- [variables2css](https://www.figma.com/community/plugin/1261234393153346915/variables2css)

# Variable font with Fontsource

Cool because we can install it with npm

<https://fontsource.org/>

using `Plus Jakarta Sans`  font

```bsh
npm install @fontsource-variable/plus-jakarta-sans
```

I replaced this font for sans through global css

***

performance tip:

Cool thing about this approach is if you have font that you want to use inside just one component, you can import it in that component and use it there (If you want to lazy load font this way, just for one component)

***

# Class variance authority

<https://cva.style/docs>

## Hanadling styling conflicts with tailwind merge

Workshop didn't use tailwind-merge

<https://github.com/dcastil/tailwind-merge>

I used it and combine it with `clsx` to build utility function that is offten used, and it preventing duplicate classes: `src/util/cn.ts`
