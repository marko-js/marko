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
REMOVE: p
INSERT: nav, main
INSERT: main > h1
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
REMOVE: main > h1
INSERT: main > h1
UPDATE: nav > a::text "x" => "x"
REMOVE: nav > a + a
```

# Update `{"page":0}`
```html
<p>
  home
</p>
```
## Change
```
REMOVE: nav
REMOVE: main
INSERT: p
```
