# Render
```html
<button
  class="inc"
>
  0
</button>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  1
</button>
```
## Change
```
UPDATE: .inc::text "0" => "1"
```

# Update `{"show":true}`
```html
<button
  class="inc"
>
  1
</button>
<div>
  v1
</div>
```
## Change
```
INSERT: .inc + div
INSERT: div::text("v1")
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  2
</button>
<div>
  v1
</div>
```
## Change
```
UPDATE: .inc::text "1" => "2"
```

# Update `{"show":true}`
