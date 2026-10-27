# Render
```html
<button>
  1 1
</button>
```

# Update
```js
document.querySelector("button").click();
await wait(30);
```
```html
<button>
  stuck quick
</button>
```
## Change
```
UPDATE: button::text@0 "1" => "stuck"
UPDATE: button::text@6 "1" => "quick"
```

# Update
```js
wait(100);
```
```html
<button>
  stuck 1
</button>
```
## Change
```
UPDATE: button::text@6 "quick" => "1"
```
