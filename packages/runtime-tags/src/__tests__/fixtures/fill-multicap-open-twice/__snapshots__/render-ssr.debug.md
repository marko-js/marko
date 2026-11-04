# Render `{"a":"1","b":"x"}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
d.querySelector("button").click();
```
```html
<main>
  <p>
    1:x
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
UPDATE: main > p::text " " => "1:x"
```
