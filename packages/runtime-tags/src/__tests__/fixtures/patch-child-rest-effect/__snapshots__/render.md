# Render `{"title":"a"}`
```html
<main
  data-log="[a]"
>
  <p>
    {"value":0,"label":"a"}
  </p>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-log="[a]"
>
  <p>
    {"value":1,"label":"a"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":0,\"label\":\"a\"}" => "{\"value\":1,\"label\":\"a\"}"
```

# Update `{"title":"b"}`
```html
<main
  data-log="[a][b]"
>
  <p>
    {"value":1,"label":"b"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1,\"label\":\"a\"}" => "{\"value\":1,\"label\":\"b\"}"
UPDATE: main[data-log] "[a]" => "[a][b]"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main
  data-log="[a][b]"
>
  <p>
    {"value":2,"label":"b"}
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "{\"value\":1,\"label\":\"b\"}" => "{\"value\":2,\"label\":\"b\"}"
```
