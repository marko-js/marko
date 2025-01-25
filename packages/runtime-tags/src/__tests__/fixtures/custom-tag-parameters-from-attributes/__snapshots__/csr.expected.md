# Render
```html
<button
  class="inc"
>
  1
</button>
<div>
  Count (hello): 1
</div>
<!---->
<!---->
```

# Mutations
```
INSERT button, div, #comment0, #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  2
</button>
<div>
  Count (hello): 2
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text3 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  3
</button>
<div>
  Count (hello): 3
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text3 "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  4
</button>
<div>
  Count (hello): 4
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div/#text3 "3" => "4"
```