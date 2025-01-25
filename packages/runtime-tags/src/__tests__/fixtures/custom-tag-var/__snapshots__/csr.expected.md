# Render
```html
<button
  class="inc"
>
  1
</button>
<div>
  1
</div>
```

# Mutations
```
INSERT button, div
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  2
</button>
<div>
  2
</div>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  3
</button>
<div>
  3
</div>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text "2" => "3"
```

# Render
```js
container.querySelector("button.inc").click();
```
```html
<button
  class="inc"
>
  4
</button>
<div>
  4
</div>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div/#text "3" => "4"
```