# Render `{"show":false}`

# Update `{"show":true}`
```html
<button>
  0
</button>
<span
  class="title"
>
  Switch 0
</span>
```
## Change
```
INSERT: button, .title
UPDATE: button::text " " => "0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  1
</button>
<span
  class="title"
>
  Switch 1
</span>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: .title::text@7 "0" => "1"
```
