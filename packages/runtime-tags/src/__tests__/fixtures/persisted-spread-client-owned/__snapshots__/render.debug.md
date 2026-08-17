# Render `{"attrs":{"href":"/a"}}`
```html
<main>
  <button>
    t
  </button>
</main>
```

# Update `{"attrs":{"href":"/b","title":"B"}}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <a
    href="/b"
    title="B"
  >
    x
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > a
UPDATE: main > a[href] null => "/b"
UPDATE: main > a[title] null => "B"
```

# Update `{"attrs":{"href":"/c"}}`
```html
<main>
  <a
    href="/c"
  >
    x
  </a>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > a[title] "B" => null
UPDATE: main > a[href] "/b" => "/c"
```

# Update
```js
document.querySelector("button").click();
```
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
