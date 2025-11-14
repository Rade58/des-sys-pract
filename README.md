# Design Systems with Storybook - tryout

Mostly based on [this project](https://github.com/stevekinney/anthology/blob/main/src/components/badge/badge.stories.tsx) project from [course/workshop](https://stevekinney.com/courses/storybook) by Steve Kinney, but I had to change some things since course/workshop uses Tailwind bellow version 4

I also added some things like biome for linting and formatting

and tailwind-merge

The rest is based on the workshop/course so I encurage you to buy it because it is really good

## Setup

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

***

# Class variance authority

<https://cva.style/docs>

Read this

## You don't need to leave typing of args to the typescript like i originaly thought

You can set available options to `argTypes`, for example for select: 

**This should be better choice, because if something happens likee it did with react-docgen they used, we should only relly on setting available options inside story and not rlaying on typescript based generation**

```ts
argTypes: {

  variant: {
    control: "select",
    options: ["primary", "secondary", "destructive"],
  },

// ... 
```

See what happened to me because of that

***
I had **Storybook only** problems with types produced by cva since storybook generates controls from prop types.

Well using just types from cva (Which is ideal way) isn't supported by storybook (see the example of `SillyButtonVariants` type used in `src/components/silly_button_with_cva/SillyButtonCva.tsx`) also type utilities like `Exclude<>` or `NonNullable<>` couldn't fix the problem so I enf up typing props by hand

This is not ideal for me because

**This problem isn't ideal for me because now besides just defining variants with cva, you need to make effort to more precisely type your props**

This wasn't the problem in older versions of Storybook, so they maybe change way of using types because switching from `react-docgen-typescript` to `react-docgen`

**SO SOLUTION IS NOT TO RALLY ON TYPESCRIPT IN THIS CASE**
**SET OPTIONS INSIDE `argTypes` INSIDE STORY `meta` OBJECT**

## But there is better solution and it is kepping possible variant values inside array

In file where you use class authority variance, just keep individual variants in variables and assign them to `variants` object (this object: `const variants = vca(...`)

And then make an array from specific variant values

```ts
export const variants = Object.keys(size)
```

You then use this array above, to define options for select elemnt for example

See how I did it inside: `src/components/callout/callout-variant.ts`

Or even better is to start with the object of the variant options you can reference it

## Hanadling styling conflicts with tailwind merge

<https://github.com/dcastil/tailwind-merge>

I used it and combine it with `clsx` to build utility function that is offten used, and it preventing duplicate classes: `src/util/cn.ts`

But also you can use it instead clsx, like here: `src/components/text-area/TextArea.tsx`

# Docs

We did colors

See how to document [icons](https://stevekinney.com/courses/storybook/icon-gallery) and [typogtraphy](https://stevekinney.com/courses/storybook/typeset)


# UI test

Not going to use `@storybook/test-runner` like in workshop since it is suggested to use `@storybook/addon-vitest`.

Make sure to specify it in main.ts

I added two new scripts

```json
"test": "vitest",
"test:ui": "vitest --ui"
```

vitest and playwright are already set in vite config

# Visual tests

<https://www.chromatic.com/>

# Using decorators

See here how we used dcoraters to use context: `src/components/task-list/task-list.stories.tsx`

We also use decorators when we were dealing with theme. We used `withThemeByDataAttribute`

# Loaders

We are not talking here about spinner or similar, we are talking about situation where your component makes api call

see here: <https://storybook.js.org/docs/writing-stories/loaders>

we used it here: `src/components/task-list/task-list.stories.tsx`

## Mock service workser

Look into this: <https://mswjs.io/>

Intercepting network request to give you back mock data
