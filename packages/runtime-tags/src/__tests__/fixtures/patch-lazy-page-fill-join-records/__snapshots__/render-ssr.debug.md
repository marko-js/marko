# Render `{"page":0}`
```html
<p>
  home
</p>
```

# Update `{"page":2,"note":"b1","list":{"value":["x"]}}`
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
  <section>
    <h2>
      1
    </h2>
    <span>
      b1/0/1
    </span>
  </section>
  <section>
    <h2>
      2
    </h2>
    <span>
      b1/0/2
    </span>
  </section>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: p
INSERT: nav, main
UPDATE: main > button::text " " => "0"
UPDATE: main > section:nth-of-type(1) > span::text@3 "" => "0"
UPDATE: main > section:nth-of-type(2) > span::text@3 "" => "0"
INSERT: nav > a
```

# Update `{"page":1,"wide":true,"list":{"value":["y"]}}`
```html
<nav>
  <a>
    y
  </a>
</nav>
<main>
  <h1>
    A
  </h1>
  <p />
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
REMOVE: main > h1
REMOVE: main > section
REMOVE: main > section
REMOVE: main > button
INSERT: main > :is(h1, p, p, button)
UPDATE: nav > a::text "x" => "y"
UPDATE: main > button::text " " => "0"
```

# Update `{"page":2,"note":"b2","list":{"value":["z"]}}`
```html
<nav>
  <a>
    z
  </a>
</nav>
<main>
  <h1>
    B
  </h1>
  <section>
    <h2>
      1
    </h2>
    <span>
      b2/0/1
    </span>
  </section>
  <section>
    <h2>
      2
    </h2>
    <span>
      b2/0/2
    </span>
  </section>
  <button>
    0
  </button>
</main>
```
## Change
```
REMOVE: main > h1
REMOVE: main > p
REMOVE: main > p
REMOVE: main > button
INSERT: main > :is(h1, section, section, button)
UPDATE: nav > a::text "y" => "z"
UPDATE: main > button::text " " => "0"
UPDATE: main > section:nth-of-type(1) > span::text@3 "" => "0"
UPDATE: main > section:nth-of-type(2) > span::text@3 "" => "0"
```
