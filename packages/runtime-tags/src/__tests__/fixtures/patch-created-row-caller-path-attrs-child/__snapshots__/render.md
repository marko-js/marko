# Render `{"show":false,"items":[]}`
```html
<button
  class="p"
>
  p
</button>
```

# Update `{"show":true,"items":[{"href":"/a","icon":"a","label":"A"}]}`
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
<button
  class="p"
>
  p
</button>
```
## Change
```
INSERT: nav, main
UPDATE: .link.active[class] "link" => "link active"
```

# Update `{"show":true,"items":[{"href":"/a","icon":"a","label":"A"},{"href":"/b","icon":"b","label":"B"}],"page":"b"}`
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
  <a
    class="link"
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
<button
  class="p"
>
  p
</button>
```
## Change
```
INSERT: .link.active + a
INSERT: main > p
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
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
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: nav > a:nth-of-type(1)[class] "link active" => "link"
UPDATE: .link.active[class] "link" => "link active"
```

# Update `{"show":true,"items":[{"href":"/b","icon":"b","label":"B"},{"href":"/c","icon":"c","label":"C"}]}`
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
  <a
    class="link"
    href="/c"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        c
      </title>
    </svg>
    <span>
      C
    </span>
  </a>
</nav>
<main />
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: .link.active[href] "/a" => "/b"
REMOVE: .link.active > svg > title::text("a")
INSERT: .link.active > svg > title::text("b")
UPDATE: .link.active > span::text "A" => "B"
UPDATE: nav > a:nth-of-type(2)[href] "/b" => "/c"
REMOVE: nav > a:nth-of-type(2) > svg > title::text("b")
INSERT: nav > a:nth-of-type(2) > svg > title::text("c")
UPDATE: nav > a:nth-of-type(2) > span::text "B" => "C"
REMOVE: main > p
UPDATE: .link.active[class] "link" => "link active"
UPDATE: nav > a:nth-of-type(2)[class] "link active" => "link"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<nav>
  <a
    class="link"
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
  <a
    class="link"
    href="/c"
  >
    <svg
      viewBox="0 0 1 1"
    >
      <title>
        c
      </title>
    </svg>
    <span>
      C
    </span>
  </a>
</nav>
<main />
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: nav > a:nth-of-type(1)[class] "link active" => "link"
```
