# Render
```html
<button>
  Toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  Value: foo
</div>
```
## Change
```
INSERT: button + div
UPDATE: div::text@7 "" => "foo"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
```
## Change
```
REMOVE: button + div
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  Toggle
</button>
<div>
  Value: foo
</div>
```
## Change
```
INSERT: button + div
UPDATE: div::text@7 "" => "foo"
```
