# Render
```html
<main>
  <input />
  <em />
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
```html
<main>
  <input
    value="z"
  />
  <em>
    z
  </em>
  <button>
    t
  </button>
</main>
```
## Change
```
UPDATE: main > em::text "" => "z"
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
REMOVE: main > em
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<main>
  <input />
  <em />
  <button>
    t
  </button>
</main>
```
## Change
```
INSERT: main > :is(input, em)
UPDATE: main > em::text " " => ""
```
