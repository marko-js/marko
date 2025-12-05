# Render
```html
<!---->
<button
  id="class-api"
>
  0
</button>
<div
  id="tags-api"
>
  0
</div>
```

# Mutations
```
INSERT #comment, #text0, #text1, div
INSERT button
INSERT button/#text
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<!---->
<button
  id="class-api"
>
  1
</button>
<div
  id="tags-api"
>
  1
</div>
```

# Mutations
```
UPDATE div/#text "0" => "1"
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class-api").click();
```
```html
<!---->
<button
  id="class-api"
>
  2
</button>
<div
  id="tags-api"
>
  2
</div>
```

# Mutations
```
UPDATE div/#text "1" => "2"
UPDATE button/#text "1" => "2"
```