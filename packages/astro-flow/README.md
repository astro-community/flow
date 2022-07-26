# Astro Flow

**Astro Flow** lets you use control flow statements in [Astro](https://astro.build).

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
import { Case, For, Switch, When } from '@astropub/flow'
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
