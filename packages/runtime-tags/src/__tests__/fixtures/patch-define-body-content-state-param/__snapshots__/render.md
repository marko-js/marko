# Render `{"y":"1"}`
```html
<button
  class="s"
>
  s
</button>
A1
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"y":"2"}`
```html
<button
  class="s"
>
  s
</button>
A2
```
## Change
```
UPDATE: ::text@1 "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"y":"3"}`
```html
<button
  class="s"
>
  s
</button>
A3
```
## Change
```
UPDATE: ::text@1 "2" => "3"
```
