# Render
```html
<button
  id="tags"
>
  0
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 0 = 0
  </button>
</div>
```

# Mutations
```
INSERT #text0, #text1, #text2, button, div, #text3, #text4, #text5
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    1 * 1 = 1
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "0" => "1"
UPDATE div/button/#text2 "0" => "1"
UPDATE div/button/#text4 "0" => "1"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  1
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 1 = 2
  </button>
</div>
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text before #text
REMOVE #text before h1
REMOVE h1 before button
REMOVE button before #text
REMOVE #text before #text
REMOVE #text before div/#text0
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    2 * 2 = 4
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/button/#text2 "1" => "2"
UPDATE div/button/#text4 "2" => "4"
```

# Render
```js
container.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  2
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 2 = 6
  </button>
</div>
```

# Mutations
```
INSERT div/#text0, div/#text3
REMOVE #text before #text
REMOVE #text before h1
REMOVE h1 before button
REMOVE button before #text
REMOVE #text before #text
REMOVE #text before div/#text0
INSERT div/#text1
INSERT div/#text2
INSERT div/h1
INSERT div/h1/#text
INSERT div/button
INSERT div/button/#text0
INSERT div/button/#text1
INSERT div/button/#text2
INSERT div/button/#text3
INSERT div/button/#text4
```

# Render
```js
container.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  3
</button>
<div>
  <h1>
    hello
  </h1>
  <button
    id="class"
  >
    3 * 3 = 9
  </button>
</div>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/button/#text2 "2" => "3"
UPDATE div/button/#text4 "6" => "9"
```