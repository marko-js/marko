# Render
```html
<!---->
<div>
  <button
    id="count"
  >
    0
  </button>
</div>
<button
  id="changeTag"
/>
```

# Mutations
```
INSERT #comment, div, button
```

# Render
```js
container.querySelector("#count").click();
```
```html
<!---->
<div>
  <button
    id="count"
  >
    1
  </button>
</div>
<button
  id="changeTag"
/>
```

# Mutations
```
UPDATE div/button/#text "0" => "1"
```

# Render
```js
container.querySelector("#changeTag").click();
```
```html
<!---->
<span>
  <button
    id="count"
  >
    0
  </button>
</span>
<button
  id="changeTag"
/>
```

# Mutations
```
INSERT span
REMOVE div after span
INSERT span/button
UPDATE span/button/#text " " => "0"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<!---->
<span>
  <button
    id="count"
  >
    1
  </button>
</span>
<button
  id="changeTag"
/>
```

# Mutations
```
UPDATE span/button/#text "0" => "1"
```