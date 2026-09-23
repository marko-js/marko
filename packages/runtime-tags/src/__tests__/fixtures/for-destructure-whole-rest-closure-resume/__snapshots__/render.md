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
REMOVE: #toggle + i
REMOVE: #toggle + i
REMOVE: #toggle + u
REMOVE: #toggle + u
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
INSERT: #toggle + i
INSERT: i:nth-of-type(1) + i
INSERT: i:nth-of-type(2) + u
INSERT: u:nth-of-type(1) + u
UPDATE: i:nth-of-type(1)::text " " => "{\"id\":1,\"extra\":\"x\"}"
UPDATE: i:nth-of-type(2)::text " " => "{\"id\":2,\"extra\":\"y\"}"
UPDATE: u:nth-of-type(1)::text " " => "a+b"
UPDATE: u:nth-of-type(2)::text " " => "c+d"
```
