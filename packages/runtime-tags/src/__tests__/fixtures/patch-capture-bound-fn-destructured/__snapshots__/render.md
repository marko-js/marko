# Render `{"label":"a"}`
```html
<button>
  a: none
</button>
```

# Update `{"label":"b"}`
```html
<button>
  b: none
</button>
```
## Change
```
UPDATE: button::text@0 "a" => "b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  b: b
</button>
```
## Change
```
UPDATE: button::text@3 "none" => "b"
```
