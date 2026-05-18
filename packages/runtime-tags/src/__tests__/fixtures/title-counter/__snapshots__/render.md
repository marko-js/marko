# Render
```html
<button>
  +
</button>
<div>
  Count is 0
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 1
</div>
```
## Change
```
REMOVE: div::text("Count is 0")
INSERT: div::text("Count is 1")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 2
</div>
```
## Change
```
REMOVE: div::text("Count is 1")
INSERT: div::text("Count is 2")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  +
</button>
<div>
  Count is 3
</div>
```
## Change
```
REMOVE: div::text("Count is 2")
INSERT: div::text("Count is 3")
```
