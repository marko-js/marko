# Render `{"on":true,"start":1}`
```html
<main>
  <button>
    1
  </button>
  <p>
    1
  </p>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    2
  </button>
  <p>
    2
  </p>
</main>
```
## Change
```
UPDATE: main > button::text "1" => "2"
UPDATE: main > p::text "1" => "2"
```

# Update `{"on":true,"start":5}`
```html
<main>
  <button>
    2
  </button>
  <p>
    5
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "2" => "5"
```

# Update `{"on":false,"start":5}`
```html
<main>
  <p />
</main>
```
## Change
```
REMOVE: main > button
UPDATE: main > p::text "5" => ""
UPDATE: main > p::text "" => ""
```

# Update `{"on":true,"start":7}`
```html
<main>
  <button>
    7
  </button>
  <p>
    7
  </p>
</main>
```
## Change
```
INSERT: main > button
UPDATE: main > p::text "" => "7"
UPDATE: main > button::text " " => "7"
```
