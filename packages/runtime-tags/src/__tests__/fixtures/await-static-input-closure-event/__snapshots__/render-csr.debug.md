# Render `{"foo":"hello"}`

# Update
```html
Loading
```
## Change
```
INSERT: ::text("Loading")
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
INSERT: p, button
REMOVE: button + ::text("Loading")
UPDATE: p::text " " => "hello"
UPDATE: button::text " " => "0"
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
