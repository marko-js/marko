# Render
```html
<button>
  go
</button>
```

# Update
```js
document.querySelector("button").click();
await wait(50);
```
```html
<button
  disabled=""
>
  go
</button>
```
## Change
```
UPDATE: button[disabled] null => ""
```

# Update
```js
wait(150);
```
```html
<button>
  go
</button>
```
## Change
```
UPDATE: button[disabled] "" => null
```
