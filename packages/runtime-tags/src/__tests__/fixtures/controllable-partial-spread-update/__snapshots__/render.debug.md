# Render
```html
<button>
  respread
</button>
<input
  placeholder="p"
  value="a"
/>
<div>
  a
</div>
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="p"
  value="one"
/>
<div>
  one
</div>
```
## Change
```
UPDATE: div::text "a" => "one"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="q"
  value="one"
/>
<div>
  one
</div>
```
## Change
```
UPDATE: input[placeholder] "p" => "q"
```

# Update
```js
const input = document.querySelector("input");
const window = input.ownerDocument.defaultView;
input.value = value;
input.dispatchEvent(new window.Event("input", { bubbles: true }));
```
```html
<button>
  respread
</button>
<input
  default-value="a"
  placeholder="q"
  value="two"
/>
<div>
  two
</div>
```
## Change
```
UPDATE: div::text "one" => "two"
```
