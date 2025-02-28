# Render
```html
<button
  class="inc"
>
  0
</button>
<div>
  Marko 1
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
  1
</button>
<div>
  Marko 2
</div>
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE div/#text "Marko 1" => "Marko 2"
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
  Marko 3
</div>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text "Marko 2" => "Marko 3"
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
  Marko 4
</div>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text "Marko 3" => "Marko 4"
```