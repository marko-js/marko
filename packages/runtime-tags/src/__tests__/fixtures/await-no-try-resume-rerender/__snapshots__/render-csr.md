# Render
```html
<button
  id="a"
>
  A
</button>
```

# Update
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
## Change
```
INSERT: #a + #out
UPDATE: #out::text@5 "" => "0"
```

# Update
```js
c.querySelector("#a").click();
```

# Update
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
