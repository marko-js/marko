# Render `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<main>
  <h1>
    Marko
  </h1>
  <button>
    read
  </button>
  <p />
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Marko
  </h1>
  <button>
    read
  </button>
  <p>
    Marko
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "" => "Marko"
```

# Update `{"$global":{"brand":"Runtime","serializedGlobals":["brand"]}}`
```html
<main>
  <h1>
    Runtime
  </h1>
  <button>
    read
  </button>
  <p>
    Marko
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Marko" => "Runtime"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1>
    Runtime
  </h1>
  <button>
    read
  </button>
  <p>
    Runtime
  </p>
</main>
```
## Change
```
UPDATE: main > p::text "Marko" => "Runtime"
```

# Update `{"$global":{"serializedGlobals":["brand"]}}`
```html
<main>
  <h1 />
  <button>
    read
  </button>
  <p>
    Runtime
  </p>
</main>
```
## Change
```
UPDATE: main > h1::text "Runtime" => ""
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <h1 />
  <button>
    read
  </button>
  <p />
</main>
```
## Change
```
UPDATE: main > p::text "Runtime" => ""
```
