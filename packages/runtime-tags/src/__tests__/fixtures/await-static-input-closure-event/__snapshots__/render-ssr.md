# Render `{"foo":"hello"}`
```html
Loading
```

# Update
```html
<p>
  hello
</p>
<button>
  0
</button>
```
## Change
```
INSERT: p::text("hello")
INSERT: button::text("0")
REMOVE: ::text("Loading")
INSERT: p, button
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
