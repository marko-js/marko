# Render
```html
<button>
  toggle
</button>
```

# Update
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
INSERT: button + section
INSERT: section::text("shown")
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
