# Render
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<span>
  before
  <b>
    B
  </b>
  <em>
    end
  </em>
  after
</span>
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<span>
  beforeafter
</span>
```
## Change
```
REMOVE: span > b
REMOVE: span > em
```

# Update
```js
document.getElementById("i").click();
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<span>
  before
  <em>
    end
  </em>
  after
</span>
```
## Change
```
INSERT: span > em
```

# Update
```js
document.getElementById("i").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<span>
  before
  <b>
    B
  </b>
  <em>
    end
  </em>
  after
</span>
```
## Change
```
INSERT: span > b
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<button
  id="i"
>
  i
</button>
<span>
  beforeafter
</span>
```
## Change
```
REMOVE: span > b
REMOVE: span > em
```
