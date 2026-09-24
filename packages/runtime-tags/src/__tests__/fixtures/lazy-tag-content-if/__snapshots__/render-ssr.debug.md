# Render
```html
<button>
  toggle
</button>
<section>
  shown
</section>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section />
```
## Change
```
REMOVE: section::text("shown")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<section>
  shown
</section>
```
## Change
```
INSERT: section::text("shown")
```
