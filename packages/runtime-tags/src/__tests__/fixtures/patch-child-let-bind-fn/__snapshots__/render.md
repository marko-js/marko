# Render
```html
<button>
  load
</button>
<ul />
<p>
  idle
</p>
<button
  id="outer"
>
  outer
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  load
</button>
<ul>
  <li>
    a
  </li>
  <li>
    b
  </li>
</ul>
<p>
  idle
</p>
<button
  id="outer"
>
  outer
</button>
```
## Change
```
INSERT: ul > li
INSERT: ul > li:nth-of-type(1) + li
```
