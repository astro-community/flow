# Astro Flow

**Astro Flow** lets you use control flow statements in [Astro](https://astro.build).

[![Open in StackBlitz][open-img]][open-url]

```astro
<For of={items}>{
  (item) => <h2>{item.title}</h2>
}</For>
```

```astro
<When {checkForTruthiness} {alsoCheckForTruthiness}>
  <p>Everything was Truthy!</p>

  <Fragment slot="else">
    <p>Not everything was truthy...</p>
</When>
```

```astro
<Switch of={null}>
  <Case of={true}>
    <h1>Positive</h1>
    <h2>Truly Positive</h2>
  </Case>
  <Case of={false}>
    <h1>Negative</h1>
    <h2>Really Negative</h2>
  </Case>
  <Case default>
    <h1>Default</h1>
    <h2>Definitely Default</h2>
  </Case>
</Switch>
```

## Usage

Install **Astro Flow** to your project.

```shell
npm install @astropub/flow
```

Use **Astro Flow** components in your project.

```astro
---
import { Case, For, Switch } from '@astropub/flow'
---
<For of={items}>{
  (item) => <h2>{item.title}</h2>
}</For>

<When {true}>
  <p>Things are true.</p>
</When>

<Switch of={null}>
  <Case of={true}>
    <h1>Positive</h1>
    <h2>Truly Positive</h2>
  </Case>
  <Case of={false}>
    <h1>Negative</h1>
    <h2>Really Negative</h2>
  </Case>
  <Case default>
    <h1>Default</h1>
    <h2>Definitely Default</h2>
  </Case>
</Switch>
```

Enjoy!

## Project Structure

Inside of this Astro project, you'll see the following folders and files:

```
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
            ├── index.astro
│           └── ...etc
└── packages/
    └── astro-flow/
        ├── package.json
        └── ...etc
```

This project uses **workspaces** to develop a single package, `@astropub/flow`.

It also includes a minimal Astro project, `demo`, for developing and demonstrating the component.

## Commands

All commands are run from the root of the project, from a terminal:

| Command         | Action                                       |
|:----------------|:---------------------------------------------|
| `npm install`   | Installs dependencies                        |
| `npm run start` | Starts local dev server at `localhost:3000`  |
| `npm run build` | Build your production site to `./dist/`      |
| `npm run serve` | Preview your build locally, before deploying |

Want to learn more?
Read the [Astro documentation][docs-url] or jump into the [Astro Discord][chat-url].

[chat-url]: https://astro.build/chat
[docs-url]: https://github.com/withastro/astro
[open-img]: https://developer.stackblitz.com/img/open_in_stackblitz.svg
[open-url]: https://stackblitz.com/github/astro-community/astro-flow
