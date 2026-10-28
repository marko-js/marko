# Render `{"page":0}`
```html
<header>
  site
</header>
<main>
  <p>
    home
  </p>
</main>
```

# Update `{"page":1,"list":{"value":["x","y"]}}`
```html
<header>
  site
</header>
<main>
  <nav>
    <a>
      x
    </a>
    <a>
      y
    </a>
    <svg
      viewBox="x"
    >
      <path
        d="x"
      />
    </svg>
  </nav>
  <article>
    <h1>
      A
    </h1>
  </article>
</main>
```
## Change
```
INSERT: main > :is(nav, article)
REMOVE: main > article + p
INSERT: main > nav > :is(a, a, svg)
```

# Update `{"page":2,"list":{"value":["z"]}}`
```html
<header>
  site
</header>
<main>
  <nav>
    <a>
      z
    </a>
    <svg
      viewBox="z"
    >
      <path
        d="z"
      />
    </svg>
  </nav>
  <article>
    <h1>
      B
    </h1>
  </article>
</main>
```
## Change
```
INSERT: main > article > h1
REMOVE: main > article > h1 + h1
REMOVE: main > nav > a
REMOVE: main > nav > a
REMOVE: main > nav > svg
INSERT: main > nav > :is(a, svg)
```

# Update `{"page":0}`
```html
<header>
  site
</header>
<main>
  <p>
    home
  </p>
</main>
```
## Change
```
INSERT: main > p
REMOVE: main > p + nav
REMOVE: main > p + article
```
