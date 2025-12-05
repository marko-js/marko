# Render
```html
<!---->
<button
  id="class"
>
  0
</button>
<div>
  <button
    id="tags"
  >
    0
  </button>
</div>
<!---->
```

# Mutations
```
INSERT #comment0, #text0, #text1, #comment1
INSERT button
INSERT button/#text
INSERT div
INSERT div/#text0
INSERT div/#text3
INSERT div/#text1
INSERT div/#text2
INSERT div/button
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!---->
<button
  id="class"
>
  0
</button>
<div>
  <button
    id="tags"
  >
    1
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<!---->
<button
  id="class"
>
  1
</button>
<div>
  <button
    id="tags"
  >
    1
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE button/#text "0" => "1"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!---->
<button
  id="class"
>
  1
</button>
<div>
  <button
    id="tags"
  >
    2
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text "1" => "2"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<!---->
<button
  id="class"
>
  2
</button>
<div>
  <button
    id="tags"
  >
    2
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<!---->
<button
  id="class"
>
  2
</button>
<div>
  <button
    id="tags"
  >
    3
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text "2" => "3"
```