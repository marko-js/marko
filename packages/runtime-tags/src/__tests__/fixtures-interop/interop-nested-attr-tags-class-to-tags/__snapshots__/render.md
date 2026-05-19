# Render
```html
<button
  id="tags"
>
  0
</button>
<div>
  <button
    id="class"
  >
    0
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
  <button
    id="class"
  >
    0
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
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
  <button
    id="class"
  >
    1
  </button>
</div>
```
## Change
```
REMOVE: #class + #class
INSERT: div > #class
INSERT: #class::text("1")
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
  <button
    id="class"
  >
    1
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
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
  <button
    id="class"
  >
    2
  </button>
</div>
```
## Change
```
REMOVE: #class + #class
INSERT: div > #class
INSERT: #class::text("2")
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
  <button
    id="class"
  >
    2
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "2" => "3"
```
