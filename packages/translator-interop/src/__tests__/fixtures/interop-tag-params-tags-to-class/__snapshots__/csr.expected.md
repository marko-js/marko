# Render
```html
<!---->
<button
  id="class"
>
  0
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    1 * 0 = 0
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
INSERT div/h1, div/button
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 0 = 0
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text0 "1" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    2 * 1 = 2
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text2 "0" => "1"
UPDATE div/button/#text4 "0" => "2"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 1 = 3
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text0 "2" => "3"
UPDATE div/button/#text4 "2" => "3"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    3 * 2 = 6
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text2 "1" => "2"
UPDATE div/button/#text4 "3" => "6"
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
  <h1>
    hello
  </h1>
  <button
    id="tags"
  >
    4 * 2 = 8
  </button>
</div>
<!---->
```

# Mutations
```
UPDATE div/button/#text0 "3" => "4"
UPDATE div/button/#text4 "6" => "8"
```