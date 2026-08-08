# Render
```html
<main>
  <p>
    hi
  </p>
  <button>
    +
  </button>
</main>
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <input
    value="hi"
  />
  <em>
    hi
  </em>
  <p>
    hi
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
INSERT: main > :is(input, em)
UPDATE: main > em::text " " => "hi"
UPDATE: main > input[value] null => "hi"
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
    default-value="hi"
    value="yo"
  />
  <em>
    yo
  </em>
  <p>
    yo
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
UPDATE: main > p::text "hi" => "yo"
UPDATE: main > em::text "hi" => "yo"
```

# Update
```js
document.querySelector("button").click();
```
```html
<main>
  <p>
    yo
  </p>
  <button>
    +
  </button>
</main>
```
## Change
```
REMOVE: main > input
REMOVE: main > em
```
