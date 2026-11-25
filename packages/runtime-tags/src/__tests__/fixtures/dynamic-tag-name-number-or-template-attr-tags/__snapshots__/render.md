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
REMOVE: em
REMOVE: ul
INSERT: em
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
REMOVE: em
INSERT: ul
INSERT: ul > li:nth-of-type(1)
INSERT: ul > li:nth-of-type(2)
INSERT: em
```
