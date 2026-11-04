# Render `{"value":"a","title":"t"}`
```html
<main
  data-id="sM_.uid"
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
  data-id="sM_.uid"
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
  data-id="sM_.uid"
>
  <p>
    32
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "11" => "32"
UPDATE: main > p::text "22" => "32"
```

# Update `{"value":"b","title":"u"}`
```html
<main
  data-id="sM_.uid"
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
UPDATE: main > p::text "32" => "42"
```
