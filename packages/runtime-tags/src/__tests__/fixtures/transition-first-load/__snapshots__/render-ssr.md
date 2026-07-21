# Render
```html
LOADING...
<button
  id="inc"
>
  1
</button>
```

# Update
```html
<h2>
  Id: 1
</h2>
<pre>
  {"id":1}
</pre>
<button
  id="inc"
>
  1
</button>
```
## Change
```
INSERT: pre::text("{\"id\":1}")
REMOVE: ::text("LOADING...")
INSERT: h2, pre
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```html
<h2>
  Id: 2
</h2>
<pre>
  {"id":2}
</pre>
<button
  id="inc"
>
  2
</button>
```
## Change
```
UPDATE: #inc::text "1" => "2"
UPDATE: h2::text@4 "1" => "2"
UPDATE: pre::text "{\"id\":1}" => "{\"id\":2}"
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```html
<h2>
  Id: 3
</h2>
<pre>
  {"id":3}
</pre>
<button
  id="inc"
>
  3
</button>
```
## Change
```
UPDATE: #inc::text "2" => "3"
UPDATE: h2::text@4 "2" => "3"
UPDATE: pre::text "{\"id\":2}" => "{\"id\":3}"
```
