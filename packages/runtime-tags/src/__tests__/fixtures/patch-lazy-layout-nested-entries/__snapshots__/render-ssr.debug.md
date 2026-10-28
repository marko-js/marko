# Render `{"page":0}`
```html
<p>
  home
</p>
```

# Update `{"page":1,"wide":true,"note":"a1","list":{"value":["x","y"]}}`
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
  <p>
    a1
  </p>
  <p>
    wide
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: nav, main
REMOVE: main + p
INSERT: nav > :is(a, a)
```

# Update `{"page":2,"wide":false,"note":"b1","list":{"value":["x"]}}`
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
  <p>
    b1
  </p>
</main>
```
## Change
```
INSERT: main > :is(h1, p)
REMOVE: main > p + h1
REMOVE: main > p + p
REMOVE: main > p + p
REMOVE: main > p + button
REMOVE: nav > a
REMOVE: nav > a
INSERT: nav > a
```

# Update `{"page":1,"wide":false,"note":"a2","list":{"value":["z"]}}`
```html
<nav>
  <a>
    z
  </a>
</nav>
<main>
  <h1>
    A
  </h1>
  <p>
    a2
  </p>
  <button>
    0
  </button>
</main>
```
## Change
```
INSERT: main > :is(h1, p, button)
REMOVE: main > button + h1
REMOVE: main > button + p
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
