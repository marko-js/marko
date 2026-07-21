# Render
```html
<h2>
  Id: 1
</h2>
<button
  id="inc"
>
  1
</button>
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
LOADING...
<button
  id="inc"
>
  1
</button>
```
## Change
```
INSERT: ::text("LOADING...")
REMOVE: ::text + h2
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
INSERT: h2, pre
REMOVE: pre + ::text("LOADING...")
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
