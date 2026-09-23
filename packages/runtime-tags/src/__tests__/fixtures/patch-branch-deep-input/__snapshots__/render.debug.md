# Render `{"opts":{"show":true}}`
```html
<button>
  t
</button>
<span>
  shown
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + span
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<span>
  shown
</span>
```
## Change
```
INSERT: button + span
```

# Update `{"opts":{"show":false}}`
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + span
```

# Update `{"opts":{"show":true}}`
```html
<button>
  t
</button>
<span>
  shown
</span>
```
## Change
```
INSERT: button + span
```
