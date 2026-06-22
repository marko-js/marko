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
el.querySelector("#c").click();
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
INSERT: li:nth-of-type(3) + li
UPDATE: li:nth-of-type(4)::text@5 "" => "3"
```

# Update
```js
el.querySelector("#o").click();
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
REMOVE: #c + li
REMOVE: #c + li
REMOVE: #c + li
REMOVE: #c + li
```

# Update
```js
el.querySelector("#c").click();
```
