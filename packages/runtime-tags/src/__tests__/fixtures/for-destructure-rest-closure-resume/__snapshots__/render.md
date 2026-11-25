# Render `{"items":[{"id":1,"extra":"x"},{"id":2,"extra":"y"}],"lists":[["a","b"],["c","d"]]}`
```html
<button
  id="toggle"
>
  toggle
</button>
<span>
  1:x
</span>
<span>
  2:y
</span>
<b>
  ab
</b>
<b>
  cd
</b>
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
REMOVE: b
REMOVE: b
REMOVE: span
REMOVE: span
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<span>
  1:x
</span>
<span>
  2:y
</span>
<b>
  ab
</b>
<b>
  cd
</b>
```
## Change
```
INSERT: span:nth-of-type(1)
UPDATE: span:nth-of-type(1)::text@0 "" => "1"
UPDATE: span:nth-of-type(1)::text@2 "" => "x"
INSERT: span:nth-of-type(2)
UPDATE: span:nth-of-type(2)::text@0 "" => "2"
UPDATE: span:nth-of-type(2)::text@2 "" => "y"
INSERT: b:nth-of-type(1)
UPDATE: b:nth-of-type(1)::text@0 "" => "a"
UPDATE: b:nth-of-type(1)::text@1 "" => "b"
INSERT: b:nth-of-type(2)
UPDATE: b:nth-of-type(2)::text@0 "" => "c"
UPDATE: b:nth-of-type(2)::text@1 "" => "d"
```
