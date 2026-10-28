# Render `{"show":true,"attrs":{"href":"/a","title":"A"}}`
```html
<main>
  <a
    class="off"
    href="/a"
    title="A"
  >
    go
  </a>
  <button>
    t
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <a
    class="on"
    href="/a"
    title="A"
  >
    go
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: .on[class] "off" => "on"
```

# Update `{"show":true,"attrs":{"href":"/b"}}`
```html
<main>
  <a
    class="on"
    href="/b"
  >
    go
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: .on[title] "A" => null
UPDATE: .on[href] "/a" => "/b"
```

# Update `{"show":false,"attrs":{"href":"/b"}}`
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > a
```

# Update `{"show":true,"attrs":{"href":"/c","title":"C"}}`
```html
<main>
  <a
    class="on"
    href="/c"
    title="C"
  >
    go
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > .on
UPDATE: .on[href] null => "/c"
UPDATE: .on[title] null => "C"
UPDATE: .on[class] null => "on"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <a
    class="off"
    href="/c"
    title="C"
  >
    go
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: .off[class] "on" => "off"
```
