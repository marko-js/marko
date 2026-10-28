# Render `{"label":"a"}`
```html
<main>
  <button>
    a:0
  </button>
</main>
```

# Update
```js
setTimeout(() => document.body.click());
```

# Update `{"label":"b"}`
```html
<main>
  <button>
    b:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "a" => "b"
```

# Update `{"label":"c"}`
```html
<main>
  <button>
    c:0
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@0 "b" => "c"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    c:1
  </button>
</main>
```
## Change
```
UPDATE: main > button::text@2 "0" => "1"
```
