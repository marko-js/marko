# Render
```html
<button>
  Toggle
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```

# Update
```html
<button>
  Toggle
</button>
<span>
   
</span>
```
## Change
```
INSERT: button + span
```

# Update
```html
<button>
  Toggle
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text " " => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: button + span
```
