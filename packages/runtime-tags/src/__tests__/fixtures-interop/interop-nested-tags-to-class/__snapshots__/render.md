# Render
```html
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
```

# Update
```js
document.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text "0" => "1"
```

# Update
```js
document.querySelector("#class").click();
```
```html
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
```
## Change
```
UPDATE: #class::text "0" => "1"
```

# Update
```js
document.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text "1" => "2"
```

# Update
```js
document.querySelector("#class").click();
```
```html
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
```
## Change
```
UPDATE: #class::text "1" => "2"
```

# Update
```js
document.querySelector("#tags").click();
```
```html
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
```
## Change
```
UPDATE: #tags::text "2" => "3"
```
