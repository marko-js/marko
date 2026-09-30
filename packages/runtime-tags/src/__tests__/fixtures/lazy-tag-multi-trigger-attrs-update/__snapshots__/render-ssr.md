# Render
```html
<button>
  Inc
</button>
<span>
  0
</span>
```

# Update `click("button")`

# Update `click("button")`

# Update
```js
document.body.dispatchEvent(
new document.defaultView.Event("mouseover", {
  bubbles: true,
}),
  );
```
```html
<button>
  Inc
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "0" => "2"
UPDATE: span::text "1" => "2"
```

# Update `click("button")`
```html
<button>
  Inc
</button>
<span>
  3
</span>
```
## Change
```
UPDATE: span::text "2" => "3"
```
