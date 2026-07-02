# Render
```html
<button>
  toggle
</button>
<ul>
  <li>
    read
  </li>
  <li>
    write
  </li>
  <li>
    admin
  </li>
</ul>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<ul />
```
## Change
```
REMOVE: ul > li
REMOVE: ul > li
REMOVE: ul > li
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<ul>
  <li>
    read
  </li>
  <li>
    write
  </li>
  <li>
    admin
  </li>
</ul>
```
## Change
```
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
INSERT: ul > li:nth-of-type(2) + li
```
