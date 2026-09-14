# Render `{"$global":{"brand":"Marko","serializedGlobals":["brand"]}}`
```html
<div>
  <h1>
    Marko #0
  </h1>
  <button>
    +
  </button>
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    Marko #1
  </h1>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Marko #0" => "Marko #1"
```

# Update `{"$global":{"brand":"Runtime","serializedGlobals":["brand"]}}`
```html
<div>
  <h1>
    Runtime #1
  </h1>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Marko #1" => "Runtime #1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <h1>
    Runtime #2
  </h1>
  <button>
    +
  </button>
</div>
```
## Change
```
UPDATE: div > h1::text "Runtime #1" => "Runtime #2"
```
