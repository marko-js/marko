# Render `{"foo":"hello"}`
```html
<p>
  hello
</p>
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  hello
</p>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```
