# Render
```html
<span>
  before
</span>
```

# Update
```html
<button>
  nope 0
</button>
<button
  class="toggle"
>
  true
</button>
```
## Change
```
INSERT: button
INSERT: button:nth-of-type(1)::text("nope ")
INSERT: button:nth-of-type(1)::text@0 + ::text("0")
INSERT: button:nth-of-type(1) + .toggle
INSERT: .toggle::text("true")
REMOVE: span
```

# Update
```js
document.querySelector("button:not(.toggle)").click();
```
```html
<button>
  nope 1
</button>
<button
  class="toggle"
>
  true
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@5 "0" => "1"
```

# Update
```js
document.querySelector(".toggle").click();
```
```html
<button>
  nope 1
</button>
<button
  class="toggle"
/>
```
## Change
```
UPDATE: .toggle::text "true" => ""
```
