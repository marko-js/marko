# Render
```html
<div />
<ul>
  <li>
    1
  </li>
</ul>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <span>
    on
  </span>
</div>
<ul>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ul>
<button>
  toggle
</button>
```
## Change
```
INSERT: div > span
INSERT: ul > li:nth-of-type(1) + li
```
