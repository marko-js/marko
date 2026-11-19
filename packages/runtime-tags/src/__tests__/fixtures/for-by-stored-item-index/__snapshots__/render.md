# Render
```html
<ul>
  <li>
    <button>
      0
    </button>
  </li>
  <li>
    <button>
      1
    </button>
  </li>
</ul>
<button
  id="rotate"
>
  rotate
</button>
<span />
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    <button>
      0
    </button>
  </li>
  <li>
    <button>
      1
    </button>
  </li>
</ul>
<button
  id="rotate"
>
  rotate
</button>
<span>
  A
</span>
```
## Change
```
UPDATE: span::text "" => "A"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    <button>
      0
    </button>
  </li>
  <li>
    <button>
      1
    </button>
  </li>
</ul>
<button
  id="rotate"
>
  rotate
</button>
<span>
  A
</span>
```
## Change
```
UPDATE: ul > li:nth-of-type(1) > button::text "1" => "0"
UPDATE: ul > li:nth-of-type(2) > button::text "0" => "1"
REMOVE: ul > li:nth-of-type(2) + li
INSERT: ul > li
```

# Update
```js
document.querySelector(selector).click();
```
```html
<ul>
  <li>
    <button>
      0
    </button>
  </li>
  <li>
    <button>
      1
    </button>
  </li>
</ul>
<button
  id="rotate"
>
  rotate
</button>
<span>
  B
</span>
```
## Change
```
UPDATE: span::text "A" => "B"
```
