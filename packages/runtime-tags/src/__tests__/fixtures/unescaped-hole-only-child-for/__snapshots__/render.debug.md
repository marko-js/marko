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
INSERT: div > span:nth-of-type(1) + :is(b, i)
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
INSERT: div > span:nth-of-type(1) + :is(b, i)
REMOVE: div > i:nth-of-type(1) + b
REMOVE: div > i:nth-of-type(1) + i
INSERT: div > i:nth-of-type(1) + :is(b, i)
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
REMOVE: div > span:nth-of-type(1) + b
REMOVE: div > span:nth-of-type(1) + i
REMOVE: div > span:nth-of-type(1) + b
REMOVE: div > span:nth-of-type(1) + i
```
