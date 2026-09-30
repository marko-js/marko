# Render
```html
<button>
  0
</button>
```

# Update
```html
<button>
  0
</button>
<span>
  done
</span>
```
## Change
```
INSERT: button + span
INSERT: span::text("done")
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
  done
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
```
