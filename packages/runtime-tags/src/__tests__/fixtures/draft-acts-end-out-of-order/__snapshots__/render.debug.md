# Render
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
await wait(60);
```
```html
<button>
  fast
</button>
```
## Change
```
UPDATE: button::text "1" => "fast"
```

# Update
```js
wait(100);
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
UPDATE: button::text "fast" => "1"
```
