# Render `{"depth":0}`
```html
<button
  id="toggle"
>
  toggle
</button>
depth 0
```

# Update `{"depth":1}`
```html
<button
  id="toggle"
>
  toggle
</button>
depth 1
```
## Change
```
UPDATE: ::text@6 "0" => "1"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: #toggle + ::text("depth ")
REMOVE: #toggle + ::text("1")
```

# Update `{"depth":2}`

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
depth 2
```
## Change
```
INSERT: #toggle + :is(::text("depth "), ::text("2"))
UPDATE: ::text@6 "" => "2"
```
