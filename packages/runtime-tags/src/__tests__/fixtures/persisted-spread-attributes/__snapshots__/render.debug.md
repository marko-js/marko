# Render `{"attrs":{"class":"x","title":"t1"},"label":"a","show":false}`
```html
<main>
  <a
    class="x"
    href="/static"
    title="t1"
  >
    a
  </a>
  <button>
    0
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
    class="x"
    href="/static"
    title="t1"
  >
    a
  </a>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"attrs":{"class":"y","data-id":"7"},"label":"b","show":false}`
```html
<main>
  <a
    class="y"
    data-id="7"
    href="/static"
  >
    b
  </a>
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: .y[title] "t1" => null
UPDATE: .y[class] "x" => "y"
UPDATE: .y[data-id] null => "7"
UPDATE: .y::text "a" => "b"
```

# Update `{"attrs":{"class":"y"},"label":"b","show":true,"img":{"src":"/i.png","width":10}}`
```html
<main>
  <a
    class="y"
    href="/static"
  >
    b
  </a>
  <img
    alt="hero"
    src="/i.png"
    width="10"
  />
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: .y[data-id] "7" => null
UPDATE: .y::text "b" => "b"
INSERT: .y + img
UPDATE: main > img[alt] null => "hero"
UPDATE: main > img[src] null => "/i.png"
UPDATE: main > img[width] null => "10"
```

# Update `{"attrs":{"class":"y"},"label":"b","show":true,"img":{"src":"/j.png"}}`
```html
<main>
  <a
    class="y"
    href="/static"
  >
    b
  </a>
  <img
    alt="hero"
    src="/j.png"
  />
  <button>
    1
  </button>
</main>
```
## Change
```
UPDATE: .y::text "b" => "b"
UPDATE: main > img[width] "10" => null
UPDATE: main > img[src] "/i.png" => "/j.png"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <a
    class="y"
    href="/static"
  >
    b
  </a>
  <img
    alt="hero"
    src="/j.png"
  />
  <button>
    2
  </button>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
```
