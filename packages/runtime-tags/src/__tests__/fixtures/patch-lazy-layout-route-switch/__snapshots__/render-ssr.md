# Render `{"page":0}`
```html
<p>
  home
</p>
```

# Update `{"page":1,"list":{"value":["x","y"]}}`
```html
<nav>
  <a>
    x
  </a>
  <a>
    y
  </a>
</nav>
<main>
  <h1>
    A
  </h1>
</main>
```
## Change
```
INSERT: nav, main
REMOVE: main + p
INSERT: nav > :is(a, a)
```

# Update `{"page":2,"list":{"value":["x"]}}`
```html
<nav>
  <a>
    x
  </a>
</nav>
<main>
  <h1>
    B
  </h1>
</main>
```
## Change
```
INSERT: main > h1
REMOVE: main > h1 + h1
REMOVE: nav > a
REMOVE: nav > a
INSERT: nav > a
```

# Update `{"page":0}`
```html
<p>
  home
</p>
```
## Change
```
INSERT: p
REMOVE: p + nav
REMOVE: p + main
```
