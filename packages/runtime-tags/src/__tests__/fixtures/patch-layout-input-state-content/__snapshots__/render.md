# Render
```html
<main>
  <button>
    toggle
  </button>
</main>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <div>
    <b>
      shown
    </b>
  </div>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div > b
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <button>
    toggle
  </button>
</main>
```
## Change
```
REMOVE: main > div
```

# Update
```js
document.querySelector(selector).click();
```
```html
<main>
  <div>
    <b>
      shown
    </b>
  </div>
  <button>
    toggle
  </button>
</main>
```
## Change
```
INSERT: main > div
INSERT: main > div > b
```
