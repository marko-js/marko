# Render
```html
<button>
  1
</button>
```

# Update
```js
document.querySelector("button").click();
await wait(30);
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
```

# Update
```js
wait(100);
```
```html
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
```
