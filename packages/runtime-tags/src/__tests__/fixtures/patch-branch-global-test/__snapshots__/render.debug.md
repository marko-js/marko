# Render `{"$global":{"enabled":true,"serializedGlobals":["enabled"]}}`
```html
<main>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    big
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
```

# Update `{"$global":{"enabled":false,"serializedGlobals":["enabled"]}}`
```html
<main>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > p
```

# Update `{"$global":{"enabled":true,"serializedGlobals":["enabled"]}}`
```html
<main>
  <p>
    big
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > p
```
