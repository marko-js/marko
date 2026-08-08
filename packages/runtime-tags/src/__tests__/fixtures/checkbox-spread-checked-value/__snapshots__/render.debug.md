# Render
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<button>
  t
</button>
<div>
  a
</div>
```

# Update
```js
const input = document.querySelector("input");
document.querySelector("div").textContent =
  `checked:${(input                    ).checked}`;
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<button>
  t
</button>
<div>
  checked:true
</div>
```
## Change
```
REMOVE: div::text("a")
INSERT: div::text("checked:true")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
const input = document.querySelector("input");
document.querySelector("div").textContent =
  `checked:${(input                    ).checked}`;
```
```html
<input
  checked=""
  type="checkbox"
  value="a"
/>
<button>
  t
</button>
<div>
  checked:true
</div>
```
## Change
```
REMOVE: div::text("checked:true")
INSERT: div::text("checked:true")
```
