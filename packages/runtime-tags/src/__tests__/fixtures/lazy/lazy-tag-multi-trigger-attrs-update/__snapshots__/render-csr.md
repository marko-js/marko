# Render
```html
<button>
  Inc
</button>
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

# Update
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
INSERT: button + span
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
