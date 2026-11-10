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
(document.querySelector("#tags")).click();
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
(document.querySelector("#class")).click();
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
UPDATE: #class::text@0 "1" => "2"
UPDATE: #class::text@8 "1" => "2"
```

# Update
```js
(document.querySelector("#tags")).click();
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
(document.querySelector("#class")).click();
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
UPDATE: #class::text@0 "2" => "3"
UPDATE: #class::text@8 "4" => "6"
```

# Update
```js
(document.querySelector("#tags")).click();
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
