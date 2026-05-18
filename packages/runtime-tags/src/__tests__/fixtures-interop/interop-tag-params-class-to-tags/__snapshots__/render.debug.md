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

# Update
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
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: #class::text@4 "0" => "1"
UPDATE: #class::text@8 "0" => "1"
```

# Update
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
## Change
```
REMOVE: #class + h1
REMOVE: #class + #class
INSERT: div > h1
INSERT: div > h1::text("hello")
INSERT: div > h1 + #class
INSERT: #class::text("2")
INSERT: #class::text@0 + ::text(" * ")
INSERT: #class::text@1 + ::text("1")
INSERT: #class::text@4 + ::text(" = ")
INSERT: #class::text@5 + ::text("2")
```

# Update
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
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: #class::text@4 "1" => "2"
UPDATE: #class::text@8 "2" => "4"
```

# Update
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
## Change
```
REMOVE: #class + h1
REMOVE: #class + #class
INSERT: div > h1
INSERT: div > h1::text("hello")
INSERT: div > h1 + #class
INSERT: #class::text("3")
INSERT: #class::text@0 + ::text(" * ")
INSERT: #class::text@1 + ::text("2")
INSERT: #class::text@4 + ::text(" = ")
INSERT: #class::text@5 + ::text("6")
```

# Update
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
## Change
```
UPDATE: #tags::text "2" => "3"
UPDATE: #class::text@4 "2" => "3"
UPDATE: #class::text@8 "6" => "9"
```
