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
REMOVE: main > p
INSERT: main > :is(nav, article)
INSERT: main > article > h1
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
REMOVE: main > article > h1
INSERT: main > article > h1
UPDATE: main > nav > a::text "x" => "z"
REMOVE: main > nav > a + a
UPDATE: main > nav > svg[viewBox] "x" => "z"
UPDATE: main > nav > svg > path[d] "x" => "z"
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
REMOVE: main > nav
REMOVE: main > article
INSERT: main > p
```
