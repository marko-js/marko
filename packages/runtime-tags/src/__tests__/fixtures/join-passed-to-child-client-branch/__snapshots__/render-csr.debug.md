# Render `{"a":"x","b":"1"}`
```html
<button>
  toggle
</button>
<p>
  x1
</p>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  toggle
</button>
<p>
  x1
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "x1"
```
