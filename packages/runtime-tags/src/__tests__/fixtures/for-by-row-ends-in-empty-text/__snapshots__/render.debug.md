# Render
```html
<section />
<button>
  add
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<section />
<section />
<button>
  add
</button>
```
## Change
```
INSERT: section:nth-of-type(1) + section
```

# Update
```js
document.querySelector("button").click();
```
```html
<section />
<section />
<section />
<button>
  add
</button>
```
## Change
```
INSERT: section:nth-of-type(2) + section
```
