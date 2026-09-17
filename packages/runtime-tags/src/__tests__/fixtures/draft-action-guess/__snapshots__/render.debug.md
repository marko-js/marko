# Render
```html
<button>
  0
</button>
<span>
  idle
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<span>
  pending
</span>
```
## Change
```
UPDATE: span::text "idle" => "pending"
UPDATE: button::text "0" => "1"
```

# Update
```html
<button>
  1
</button>
<span>
  idle
</span>
```
## Change
```
UPDATE: span::text "pending" => "idle"
```
