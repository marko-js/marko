# Render `{"value":"a","title":"t"}`
```html
<main
  data-id="sM_1"
>
  <p>
    0
  </p>
  <button>
    +
  </button>
</main>
```
## Console
```
LOG "t"
```

# Update `{"value":"b","title":"t"}`
```html
<main
  data-id="sM_1"
>
  <p>
    11
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "0" => "11"
UPDATE: main > p::text "1" => "11"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-id="sM_1"
>
  <p>
    42
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "11" => "42"
UPDATE: main > p::text "32" => "42"
```

# Update `{"value":"b","title":"u"}`
```html
<main
  data-id="sM_1"
>
  <p>
    52
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "42" => "52"
```
