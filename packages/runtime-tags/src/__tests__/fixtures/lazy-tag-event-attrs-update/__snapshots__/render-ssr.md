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
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.body.dispatchEvent(new document.defaultView.Event("mouseover", {
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
document.querySelector("button").click();
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
