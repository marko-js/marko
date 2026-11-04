# Render
```html
<button
  class="add"
>
  add
</button>
<button>
  a
</button>
<button>
  b
</button>
<div
  id="log"
/>
```

# Update
```js
const buttons = document.querySelectorAll("button");
buttons[buttons.length - 1].click();
```
```html
<button
  class="add"
>
  add
</button>
<button>
  a
</button>
<button>
  b
</button>
<div
  id="log"
>
  1
</div>
```
## Change
```
INSERT: #log::text("1")
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<button
  class="add"
>
  add
</button>
<button>
  a
</button>
<button>
  b
</button>
<button>
  c
</button>
<div
  id="log"
>
  1
</div>
```
## Change
```
INSERT: button:nth-of-type(3) + button
```

# Update
```js
const buttons = document.querySelectorAll("button");
buttons[buttons.length - 1].click();
```
```html
<button
  class="add"
>
  add
</button>
<button>
  a
</button>
<button>
  b
</button>
<button>
  c
</button>
<div
  id="log"
>
  2
</div>
```
## Change
```
REMOVE: #log::text("1")
INSERT: #log::text("2")
```
