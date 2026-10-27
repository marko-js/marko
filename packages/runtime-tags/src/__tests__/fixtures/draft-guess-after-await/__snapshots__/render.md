# Render
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
await wait(80);
```
```html
<button>
  9
</button>
```
## Change
```
UPDATE: button::text "1" => "9"
```

# Update
```js
wait(150);
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "9" => "1"
```
