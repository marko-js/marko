# Render `{"attrs":{"title":"A","data-x":"1"},"box":{"id":"b1"},"label":"l1"}`
```html
<main>
  <button
    data-x="1"
    title="A"
  >
    0
  </button>
  <div
    class="fixed"
    id="b1"
  >
    l1
  </div>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    data-x="1"
    title="A"
  >
    1
  </button>
  <div
    class="fixed"
    id="b1"
  >
    l1
  </div>
</main>
```
## Change
```
UPDATE: main > button::text "0" => "1"
```

# Update `{"attrs":{"title":"B"},"box":{"id":"b2","title":"t"},"label":"l2"}`
```html
<main>
  <button
    title="B"
  >
    1
  </button>
  <div
    class="fixed"
    id="b2"
    title="t"
  >
    l2
  </div>
</main>
```
## Change
```
UPDATE: main > button[data-x] "1" => null
UPDATE: main > button[title] "A" => "B"
UPDATE: #b2[id] "b1" => "b2"
UPDATE: #b2[title] null => "t"
UPDATE: #b2::text "l1" => "l2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button
    title="B"
  >
    2
  </button>
  <div
    class="fixed"
    id="b2"
    title="t"
  >
    l2
  </div>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
```
