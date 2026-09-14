# Render `{"items":[{"href":"/a","icon":"a","label":"A"}],"path":"/a"}`
```html
<nav>
  <a
    class="link active"
    href="/a"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        a
      </title>
    </svg>
    <span>
      A
    </span>
  </a>
</nav>
<main />
```

# Update `{"items":[{"href":"/a","icon":"a","label":"A"},{"href":"/b","icon":"b","label":"B"}],"path":"/b","page":"b"}`
```html
<nav>
  <a
    class="link"
    href="/a"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        a
      </title>
    </svg>
    <span>
      A
    </span>
  </a>
  <a
    class="link active"
    href="/b"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        b
      </title>
    </svg>
    <span>
      B
    </span>
  </a>
</nav>
<main>
  <p>
    b
  </p>
</main>
```
## Change
```
UPDATE: nav > a:nth-of-type(1)[class] "link active" => "link"
UPDATE: nav > a:nth-of-type(1) > span::text "A" => "A"
INSERT: nav > a:nth-of-type(1) + .link.active
INSERT: main > p
```

# Update `{"items":[{"href":"/b","icon":"b","label":"B"}],"path":"/b"}`
```html
<nav>
  <a
    class="link active"
    href="/b"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        b
      </title>
    </svg>
    <span>
      B
    </span>
  </a>
</nav>
<main />
```
## Change
```
UPDATE: .link.active[class] "link" => "link active"
UPDATE: .link.active[href] "/a" => "/b"
REMOVE: .link.active > svg > title::text("a")
INSERT: .link.active > svg > title::text("b")
UPDATE: .link.active > span::text "A" => "B"
REMOVE: .link.active + .link.active
REMOVE: main > p
```
