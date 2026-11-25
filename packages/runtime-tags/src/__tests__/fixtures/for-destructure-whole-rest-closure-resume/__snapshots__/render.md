# Render `{"items":[{"id":1,"extra":"x"},{"id":2,"extra":"y"}],"lists":[["a","b"],["c","d"]]}`
```html
<button
  id="toggle"
>
  toggle
</button>
<i>
  {"id":1,"extra":"x"}
</i>
<i>
  {"id":2,"extra":"y"}
</i>
<u>
  a+b
</u>
<u>
  c+d
</u>
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
REMOVE: i
REMOVE: i
REMOVE: u
REMOVE: u
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
<i>
  {"id":1,"extra":"x"}
</i>
<i>
  {"id":2,"extra":"y"}
</i>
<u>
  a+b
</u>
<u>
  c+d
</u>
```
## Change
```
INSERT: i:nth-of-type(1)
UPDATE: i:nth-of-type(1)::text " " => "{\"id\":1,\"extra\":\"x\"}"
INSERT: i:nth-of-type(2)
UPDATE: i:nth-of-type(2)::text " " => "{\"id\":2,\"extra\":\"y\"}"
INSERT: u:nth-of-type(1)
UPDATE: u:nth-of-type(1)::text " " => "a+b"
INSERT: u:nth-of-type(2)
UPDATE: u:nth-of-type(2)::text " " => "c+d"
```
