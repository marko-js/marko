# Render `{"x":1}`
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
  5
</button>
```
## Change
```
UPDATE: button::text "1" => "5"
```

# Update `{"x":2}`

# Update
```js
if (document.querySelector("button").textContent !== "5") {
throw new Error("guess dropped by a patch");
}
```

# Update
```js
wait(150);
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "5" => "2"
```
