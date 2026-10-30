# Render
```html
<button>
  toggle
</button>
<section />
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
  <p>
    yes
  </p>
</section>
```
## Change
```
INSERT: section > p
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
INSERT: section > i
REMOVE: #document-fragment > i + p
REMOVE: section > i
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
  <p>
    yes
  </p>
</section>
```
## Change
```
INSERT: section > p
```
