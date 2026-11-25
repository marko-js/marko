# Render
```html
<button>
  toggle
</button>
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  toggle
</button>
<em>
  held on
</em>
```
## Change
```
INSERT: em
UPDATE: em::text@5 "" => "on"
```

# Update
```js
document.querySelectorAll("button")[index].click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: em
```
