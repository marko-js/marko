# Render `{"show":false}`
```html
<div />
<button>
  toggle
</button>
```

# Update `{"show":true}`
```html
<em>
  panel
</em>
<div />
<button>
  toggle
</button>
```
## Change
```
INSERT: em
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  panel
</em>
<em>
  panel
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + em
REMOVE: em:nth-of-type(2) + div
```

# Update `{"show":false}`
```html
<em>
  panel
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```

# Update `{"show":true}`
```html
<em>
  panel
</em>
<em>
  panel
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
```
