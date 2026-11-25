# Render
```html
<button
  id="o"
>
  O
</button>
<button
  id="c"
>
  C
</button>
<li>
  item 0
</li>
<li>
  item 1
</li>
<li>
  item 2
</li>
```

# Update
```js
document.querySelector("#c").click();
```
```html
<button
  id="o"
>
  O
</button>
<button
  id="c"
>
  C
</button>
<li>
  item 0
</li>
<li>
  item 1
</li>
<li>
  item 2
</li>
<li>
  item 3
</li>
```
## Change
```
INSERT: li:nth-of-type(4)
```

# Update
```js
document.querySelector("#o").click();
```
```html
<button
  id="o"
>
  O
</button>
<button
  id="c"
>
  C
</button>
```
## Change
```
REMOVE: li
REMOVE: li
REMOVE: li
REMOVE: li
```

# Update
```js
document.querySelector("#c").click();
```
