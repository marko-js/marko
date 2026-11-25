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
REMOVE: span
INSERT: button:nth-of-type(1)
INSERT: button:nth-of-type(1)::text("nope ")
INSERT: button:nth-of-type(1)::text("0")
INSERT: .toggle
INSERT: .toggle::text("true")
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
