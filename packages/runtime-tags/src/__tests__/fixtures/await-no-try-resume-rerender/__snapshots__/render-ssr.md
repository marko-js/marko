# Render
```html
<button
  id="a"
>
  A
</button>
<div
  id="out"
>
  done 0
</div>
```

# Update
```js
c.querySelector("#a").click();
```
```html
<button
  id="a"
>
  A
</button>
<div
  id="out"
>
  done 1
</div>
```
## Change
```
UPDATE: #out::text@5 "0" => "1"
```
