# Render
```html
<button
  id="toggle"
>
  toggle
</button>
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
text Hello
```
## Change
```
INSERT: #toggle + :is(::text("text "), ::text("Hello"))
UPDATE: ::text@5 "" => "Hello"
```
