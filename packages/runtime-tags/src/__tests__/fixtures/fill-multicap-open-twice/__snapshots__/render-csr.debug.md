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

# Update `{"a":"2","b":"y"}`
```html
<main>
  <p>
    2:y
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "1:x" => "2:y"
```

# Update `{"a":"3","b":"z"}`
```html
<main>
  <p>
    3:z
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "2:y" => "3:z"
```

# Update `{"a":"3","b":"z"}`
