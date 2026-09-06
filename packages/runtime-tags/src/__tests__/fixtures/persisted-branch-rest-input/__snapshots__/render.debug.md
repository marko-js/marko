# Render `{"label":"x","show":true}`
```html
<button>
  x
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
  x
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
  x
</button>
<span>
  shown
</span>
```
## Change
```
INSERT: button + span
```

# Update `{"label":"x","show":false}`
```html
<button>
  x
</button>
```
## Change
```
UPDATE: button::text "x" => "x"
REMOVE: button + span
```

# Update `{"label":"x","show":true}`
```html
<button>
  x
</button>
<span>
  shown
</span>
```
## Change
```
UPDATE: button::text "x" => "x"
INSERT: button + span
```
