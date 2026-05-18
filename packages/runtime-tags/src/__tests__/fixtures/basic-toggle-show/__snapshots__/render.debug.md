# Render
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
REMOVE: div::text("Hello!")
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Hello!
  <button>
    Toggle
  </button>
</div>
```
## Change
```
INSERT: div::text("Hello!")
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    Toggle
  </button>
</div>
```
## Change
```
REMOVE: div::text("Hello!")
```
