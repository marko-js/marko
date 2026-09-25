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
item 0 Helloitem 1 Hello
```
## Change
```
INSERT: #toggle + :is(::text("item "), ::text("0"), ::text(" "), ::text("Hello"))
INSERT: ::text@7 + :is(::text("item "), ::text("1"), ::text(" "), ::text("Hello"))
UPDATE: ::text@7 "" => "Hello"
UPDATE: ::text@19 "" => "Hello"
```
