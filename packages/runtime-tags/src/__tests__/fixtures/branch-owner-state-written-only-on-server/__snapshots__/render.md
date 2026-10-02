# Render `{"show":true}`
```html
<div
  class="c1"
>
  <button
    id="own"
  >
    1
  </button>
</div>
<section
  class="c1"
>
  <button
    id="param"
  >
    1
  </button>
</section>
0
<span>
  function
</span>
```

# Update
```js
document.getElementById("own").click();
```
```html
<div
  class="c1"
>
  <button
    id="own"
  >
    1
  </button>
</div>
<section
  class="c1"
>
  <button
    id="param"
  >
    1
  </button>
</section>
0
<span>
  function
</span>
```
## Change
```
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("own 1")
```

# Update
```js
document.getElementById("param").click();
```
```html
<div
  class="c1"
>
  <button
    id="own"
  >
    1
  </button>
</div>
<section
  class="c1"
>
  <button
    id="param"
  >
    1
  </button>
</section>
0
<span>
  function
</span>
```
## Change
```
REMOVE: #document > html > head > title::text("own 1")
INSERT: #document > html > head > title::text("param 1")
```
