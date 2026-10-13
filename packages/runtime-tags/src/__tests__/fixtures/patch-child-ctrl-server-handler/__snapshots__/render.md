# Render `{"prefix":"A"}`
```html
<main>
  <button>
    +
  </button>
  <output />
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <input
    value="a"
  />
  <button>
    +
  </button>
  <output />
</main>
```
## Change
```
INSERT: main > input
UPDATE: main > input[value] null => "a"
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
    value="a"
  />
  <button>
    +
  </button>
  <output>
    Ay
  </output>
</main>
```
## Change
```
INSERT: main > output::text("Ay")
```

# Update `{"prefix":"B"}`

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
    value="a"
  />
  <button>
    +
  </button>
  <output>
    Bz
  </output>
</main>
```
## Change
```
REMOVE: main > output::text("Ay")
INSERT: main > output::text("Bz")
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <button>
    +
  </button>
  <output>
    Bz
  </output>
</main>
```
## Change
```
REMOVE: main > input
```

# Update `{"prefix":"C"}`

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <input
    value="a"
  />
  <button>
    +
  </button>
  <output>
    Bz
  </output>
</main>
```
## Change
```
INSERT: main > input
UPDATE: main > input[value] null => "a"
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
    value="a"
  />
  <button>
    +
  </button>
  <output>
    Cw
  </output>
</main>
```
## Change
```
REMOVE: main > output::text("Bz")
INSERT: main > output::text("Cw")
```
