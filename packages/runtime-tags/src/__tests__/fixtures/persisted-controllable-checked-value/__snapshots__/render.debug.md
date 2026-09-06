# Render `{"picked":"a"}`
```html
<fieldset>
  <input
    checked=""
    class="a"
    type="radio"
    value="a"
  />
  <input
    class="b"
    type="radio"
    value="b"
  />
</fieldset>
<p />
```

# Update
```js
document.querySelectorAll("input")[1].click();
```
```html
<fieldset>
  <input
    checked=""
    class="a"
    type="radio"
    value="a"
  />
  <input
    class="b"
    type="radio"
    value="b"
  />
</fieldset>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "" => "b"
```

# Update
```js
const [a, b] = document.querySelectorAll("input");
document.querySelector("p").textContent = `a:${a .checked} b:${b .checked}`;
```
```html
<fieldset>
  <input
    checked=""
    class="a"
    type="radio"
    value="a"
  />
  <input
    class="b"
    type="radio"
    value="b"
  />
</fieldset>
<p>
  a:true b:false
</p>
```
## Change
```
REMOVE: p::text("b")
INSERT: p::text("a:true b:false")
```

# Update `{"picked":"a"}`

# Update
```js
const [a, b] = document.querySelectorAll("input");
document.querySelector("p").textContent = `a:${a .checked} b:${b .checked}`;
```
```html
<fieldset>
  <input
    checked=""
    class="a"
    type="radio"
    value="a"
  />
  <input
    class="b"
    type="radio"
    value="b"
  />
</fieldset>
<p>
  a:true b:false
</p>
```
## Change
```
REMOVE: p::text("a:true b:false")
INSERT: p::text("a:true b:false")
```

# Update `{"picked":"b"}`

# Update
```js
const [a, b] = document.querySelectorAll("input");
document.querySelector("p").textContent = `a:${a .checked} b:${b .checked}`;
```
```html
<fieldset>
  <input
    class="a"
    default-checked=""
    type="radio"
    value="a"
  />
  <input
    checked=""
    class="b"
    type="radio"
    value="b"
  />
</fieldset>
<p>
  a:false b:true
</p>
```
## Change
```
REMOVE: p::text("a:true b:false")
INSERT: p::text("a:false b:true")
```
