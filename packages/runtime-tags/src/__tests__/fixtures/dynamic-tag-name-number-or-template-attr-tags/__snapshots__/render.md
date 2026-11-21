# Render
```html
<ul>
  <li>
    one
  </li>
  <li>
    two
  </li>
</ul>
<em>
  after
</em>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  after
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em
REMOVE: em + ul
REMOVE: em + em
```

# Update
```js
document.querySelector("button").click();
```
```html
<ul>
  <li>
    one
  </li>
  <li>
    two
  </li>
</ul>
<em>
  after
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: ul
REMOVE: em + em
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul + em
```
