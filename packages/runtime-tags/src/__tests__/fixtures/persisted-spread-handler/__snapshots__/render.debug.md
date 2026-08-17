# Render `{"show":true,"attrs":{"href":"/a"}}`
```html
<main>
  <a
    href="/a"
  >
    go
  </a>
  <em>
    0
  </em>
</main>
```

# Update
```js
document.querySelector("a").click();
```
```html
<main>
  <a
    href="/a"
  >
    go
  </a>
  <em>
    1
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "0" => "1"
```

# Update `{"show":true,"attrs":{"href":"/b"}}`
```html
<main>
  <a
    href="/b"
  >
    go
  </a>
  <em>
    1
  </em>
</main>
```
## Change
```
UPDATE: main > a[href] "/a" => "/b"
```

# Update
```js
document.querySelector("a").click();
```
```html
<main>
  <a
    href="/b"
  >
    go
  </a>
  <em>
    2
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "1" => "2"
```

# Update `{"show":false,"attrs":{"href":"/b"}}`
```html
<main>
  <em>
    2
  </em>
</main>
```
## Change
```
REMOVE: main > a
```

# Update `{"show":true,"attrs":{"href":"/c"}}`
```html
<main>
  <a
    href="/c"
  >
    go
  </a>
  <em>
    2
  </em>
</main>
```
## Change
```
INSERT: main > a
UPDATE: main > a[href] null => "/c"
```

# Update
```js
document.querySelector("a").click();
```
```html
<main>
  <a
    href="/c"
  >
    go
  </a>
  <em>
    3
  </em>
</main>
```
## Change
```
UPDATE: main > em::text "2" => "3"
```
