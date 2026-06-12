# Render
```html
<button>
  Inc
</button>
<span>
  0
</span>
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
