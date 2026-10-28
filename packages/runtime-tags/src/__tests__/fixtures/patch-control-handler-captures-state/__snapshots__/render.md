# Render `{"show":true}`
```html
<main>
  <input />
  <em />
  <button>
    s
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<main>
  <input
    value="z!!"
  />
  <em>
    z!!
  </em>
  <button>
    s
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "" => "z!!"
```
