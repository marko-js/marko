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
```

# Mutations
```
INSERT #text0, #text1, #text2, button, #text3, #text6, #comment, #text7, #text8, #text9
INSERT #text4
INSERT #text5
INSERT div
INSERT div/#text0
INSERT div/#text1
INSERT div/#text2
INSERT div/#text3
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
```

# Mutations
```
UPDATE button/#text2 "10" => "11"
UPDATE button/#text0 "1" => "2"
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
```

# Mutations
```
UPDATE button/#text2 "11" => "12"
UPDATE button/#text0 "2" => "3"
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
```

# Mutations
```
UPDATE button/#text2 "12" => "13"
UPDATE button/#text0 "3" => "4"
UPDATE div/#text1 "3" => "4"
UPDATE div/#text3 "12" => "13"
```