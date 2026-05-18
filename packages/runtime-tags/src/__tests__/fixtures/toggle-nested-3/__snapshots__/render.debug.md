# Render
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    0
  </button>
   hello
</div>
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    1
  </button>
   hello
</div>
```
## Change
```
UPDATE: #count::text "0" => "1"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
   hello
</div>
```
## Change
```
UPDATE: #count::text "1" => "2"
```

# Update
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
   hello
</div>
```
## Change
```
REMOVE: #inner + #count
```

# Update
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
   hello
</div>
```
## Change
```
INSERT: #inner + #count
UPDATE: #count::text " " => "2"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
   hello
</div>
```
## Change
```
UPDATE: #count::text "2" => "3"
```

# Update
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
   hello
</div>
```
## Change
```
REMOVE: #outer + #inner
REMOVE: #outer + #count
```

# Update
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
   hello
</div>
```
## Change
```
INSERT: #outer + #inner
INSERT: #inner + #count
UPDATE: #count::text " " => "3"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    4
  </button>
   hello
</div>
```
## Change
```
UPDATE: #count::text "3" => "4"
```
