# Render
```html
<span>
  before
</span>
<button
  class="toggle"
>
  true
</button>
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
REMOVE: button:nth-of-type(1) + span
UPDATE: button:nth-of-type(1)::text@0 "" => "nope"
UPDATE: button:nth-of-type(1)::text@5 "" => "0"
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
