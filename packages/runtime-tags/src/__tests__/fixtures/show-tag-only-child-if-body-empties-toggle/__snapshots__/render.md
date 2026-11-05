# Render
```html
<button>
  next
</button>
<p>
  zero
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  next
</button>
<p />
```
## Change
```
REMOVE: p::text("zero")
```

# Update
```js
document.querySelector("button").click();
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  next
</button>
<p>
  zero
</p>
```
## Change
```
INSERT: p::text("zero")
```
