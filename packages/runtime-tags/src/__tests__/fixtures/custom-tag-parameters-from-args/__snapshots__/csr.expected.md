# Render
```html
<button
  class="inc"
>
  1,10
</button>
<div>
  Counts: 1,10
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
  2,11
</button>
<div>
  Counts: 2,11
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text0 "1" => "2"
UPDATE button/#text2 "10" => "11"
UPDATE div/#text1 "1" => "2"
UPDATE div/#text3 "10" => "11"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  3,12
</button>
<div>
  Counts: 3,12
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text0 "2" => "3"
UPDATE button/#text2 "11" => "12"
UPDATE div/#text1 "2" => "3"
UPDATE div/#text3 "11" => "12"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button
  class="inc"
>
  4,13
</button>
<div>
  Counts: 4,13
</div>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text0 "3" => "4"
UPDATE button/#text2 "12" => "13"
UPDATE div/#text1 "3" => "4"
UPDATE div/#text3 "12" => "13"
```