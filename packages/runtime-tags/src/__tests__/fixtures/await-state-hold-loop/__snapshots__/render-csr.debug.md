# Render
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 1
  </li>
</ul>
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 1
  </li>
</ul>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
INSERT: ul + #awaited
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 2
  </li>
  <li>
    item 1 of 2
  </li>
</ul>
<div
  id="awaited"
>
  awaited 1
</div>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@10 "1" => "2"
INSERT: ul > li:nth-of-type(1) + li
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 2
  </li>
  <li>
    item 1 of 2
  </li>
</ul>
```
## Change
```
REMOVE: ul + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 2
  </li>
  <li>
    item 1 of 2
  </li>
</ul>
<div
  id="awaited"
>
  awaited 2
</div>
```
## Change
```
INSERT: ul + #awaited
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 3
  </li>
  <li>
    item 1 of 3
  </li>
  <li>
    item 2 of 3
  </li>
</ul>
<div
  id="awaited"
>
  awaited 2
</div>
```
## Change
```
UPDATE: ul > li:nth-of-type(1)::text@10 "2" => "3"
UPDATE: ul > li:nth-of-type(2)::text@10 "2" => "3"
INSERT: ul > li:nth-of-type(2) + li
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 3
  </li>
  <li>
    item 1 of 3
  </li>
  <li>
    item 2 of 3
  </li>
</ul>
```
## Change
```
REMOVE: ul + #awaited
```

# Update
```html
<button
  id="inc"
>
  inc
</button>
<ul>
  <li>
    item 0 of 3
  </li>
  <li>
    item 1 of 3
  </li>
  <li>
    item 2 of 3
  </li>
</ul>
<div
  id="awaited"
>
  awaited 3
</div>
```
## Change
```
INSERT: ul + #awaited
```
