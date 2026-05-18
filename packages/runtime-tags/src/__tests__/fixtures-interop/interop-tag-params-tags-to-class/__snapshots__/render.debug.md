# Render
```html
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
```

# Update
```js
container.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text@0 "1" => "2"
```

# Update
```js
container.querySelector("#class").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text@4 "0" => "1"
UPDATE: #tags::text@8 "0" => "2"
UPDATE: #class::text "0" => "1"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text@0 "2" => "3"
UPDATE: #tags::text@8 "2" => "3"
```

# Update
```js
container.querySelector("#class").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text@4 "1" => "2"
UPDATE: #tags::text@8 "3" => "6"
UPDATE: #class::text "1" => "2"
```

# Update
```js
container.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text@0 "3" => "4"
UPDATE: #tags::text@8 "6" => "8"
```
