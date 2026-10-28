# Render `{"picked":["a"]}`
```html
<fieldset>
  <input
    checked=""
    class="a"
    type="checkbox"
    value="a"
  />
  <input
    class="b"
    type="checkbox"
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
    type="checkbox"
    value="a"
  />
  <input
    class="b"
    type="checkbox"
    value="b"
  />
</fieldset>
<p>
  a,b
</p>
```
## Change
```
UPDATE: p::text "" => "a,b"
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
    type="checkbox"
    value="a"
  />
  <input
    class="b"
    type="checkbox"
    value="b"
  />
</fieldset>
<p>
  a:true b:false
</p>
```
## Change
```
REMOVE: p::text("a,b")
INSERT: p::text("a:true b:false")
```

# Update `{"picked":["a","b"]}`

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
    type="checkbox"
    value="a"
  />
  <input
    checked=""
    class="b"
    type="checkbox"
    value="b"
  />
</fieldset>
<p>
  a:true b:true
</p>
```
## Change
```
REMOVE: p::text("a:true b:false")
INSERT: p::text("a:true b:true")
```

# Update `{"picked":[]}`

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
    type="checkbox"
    value="a"
  />
  <input
    class="b"
    type="checkbox"
    value="b"
  />
</fieldset>
<p>
  a:false b:false
</p>
```
## Change
```
REMOVE: p::text("a:true b:true")
INSERT: p::text("a:false b:false")
```
