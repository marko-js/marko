# Render
```html
<button>
  Inc
</button>
```

# Update
```js
container.querySelector("button").click();
```

# Update
```js
container.querySelector("button").click();
```

# Update
```js
container.ownerDocument.body.dispatchEvent(new container.ownerDocument.defaultView.Event("mouseover", {
bubbles: true
  }));
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

# Update
```js
container.querySelector("button").click();
```
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
