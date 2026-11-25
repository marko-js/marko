# Render
```html
<div>
  <span>
    before
  </span>
  <span>
    after
  </span>
</div>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<div>
  <span>
    before
  </span>
  <b>
    0
  </b>
  <i>
    0
  </i>
  <span>
    after
  </span>
</div>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
INSERT: div > b, div > i
```

# Update
```js
document.querySelector("button.add").click();
```
```html
<div>
  <span>
    before
  </span>
  <b>
    1
  </b>
  <i>
    1
  </i>
  <b>
    0
  </b>
  <i>
    0
  </i>
  <span>
    after
  </span>
</div>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
REMOVE: div > b
REMOVE: div > i
INSERT: div > b:nth-of-type(1), div > i:nth-of-type(1)
INSERT: div > b:nth-of-type(2), div > i:nth-of-type(2)
```

# Update
```js
document.querySelector("button.clear").click();
```
```html
<div>
  <span>
    before
  </span>
  <span>
    after
  </span>
</div>
<button
  class="add"
>
  add
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
REMOVE: div > b
REMOVE: div > b
REMOVE: div > i
REMOVE: div > i
```
