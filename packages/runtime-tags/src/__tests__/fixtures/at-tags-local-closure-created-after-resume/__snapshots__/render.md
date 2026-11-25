# Render
```html
<button
  id="open"
>
  open
</button>
<button
  id="toggle-0"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="toggle-1"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="save-last"
>
  save
</button>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="open"
>
  open
</button>
<span>
  a:true
</span>
<span>
  b:
</span>
<button
  id="toggle-0"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="toggle-1"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="save-last"
>
  save
</button>
```
## Change
```
INSERT: span:nth-of-type(1)
UPDATE: span:nth-of-type(1)::text@2 "" => "true"
INSERT: span:nth-of-type(2)
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="open"
>
  open
</button>
<span>
  a:true
</span>
<span>
  b:
</span>
<button
  id="toggle-0"
>
  toggle
</button>
<button
  id="toggle-1"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="save-last"
>
  save
</button>
```
## Change
```
REMOVE: em
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="open"
>
  open
</button>
<span>
  a:true
</span>
<span>
  b:
</span>
<button
  id="toggle-0"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="toggle-1"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="save-last"
>
  save
</button>
```
## Change
```
INSERT: em:nth-of-type(1)
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="open"
>
  open
</button>
<span>
  a:true
</span>
<span>
  b:
</span>
<button
  id="toggle-0"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="toggle-1"
>
  toggle
</button>
<em>
  1
</em>
<button
  id="save-last"
>
  save
</button>
L1
<b>
  1
</b>
```
## Change
```
INSERT: ::text("L")
INSERT: ::text("1"), b
```
