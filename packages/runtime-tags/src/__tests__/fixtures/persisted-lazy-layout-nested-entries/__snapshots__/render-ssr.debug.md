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
REMOVE: p
INSERT: nav, main
INSERT: main > :is(h1, p, button)
UPDATE: main > p:nth-of-type(1)::text " " => "a1"
INSERT: main > p:nth-of-type(1) + p
UPDATE: main > button::text " " => "0"
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
REMOVE: main > h1
REMOVE: main > p
REMOVE: main > p
REMOVE: main > button
INSERT: main > :is(h1, p)
UPDATE: nav > a::text "x" => "x"
REMOVE: nav > a + a
UPDATE: main > p::text " " => "b1"
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
REMOVE: main > h1
REMOVE: main > p
INSERT: main > :is(h1, p, button)
UPDATE: nav > a::text "x" => "z"
UPDATE: main > p::text " " => "a2"
UPDATE: main > button::text " " => "0"
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
