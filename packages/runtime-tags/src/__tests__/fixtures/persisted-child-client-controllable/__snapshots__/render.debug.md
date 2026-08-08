# Render
```html
<main>
  <input />
  <button>
    t
  </button>
</main>
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<main>
  <button>
    t
  </button>
</main>
```
## Change
```
REMOVE: main > input
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<main>
  <input />
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > input
```
