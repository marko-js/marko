# Render `{"hint":"a"}`
```html
<button>
  v
</button>
<input
  placeholder="a"
  value="x"
/>
```
## Console
```
LOG "x" "a"
```

# Update `{"hint":"b"}`
```html
<button>
  v
</button>
<input
  placeholder="b"
  value="x"
/>
```
## Change
```
UPDATE: input[placeholder] "a" => "b"
```
## Console
```
LOG "x" "b"
```

# Update
```js
document.querySelector("button").click();
```
## Console
```
LOG "x!" "b"
```

# Update `{"hint":"c"}`
```html
<button>
  v
</button>
<input
  default-value="x"
  placeholder="c"
  value="x!"
/>
```
## Change
```
UPDATE: input[placeholder] "b" => "c"
```
## Console
```
LOG "x!" "c"
```
