# Render
```html
<button
  id="inc"
>
  1
</button>
<button
  id="back"
>
  back
</button>
LOADING...
```

# Update
```html
<button
  id="inc"
>
  1
</button>
<button
  id="back"
>
  back
</button>
<pre>
  {"id":1,"call":1}
</pre>
```
## Change
```
INSERT: pre::text("{\"id\":1,\"call\":1}")
REMOVE: ::text("LOADING...")
INSERT: #back + pre
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
<button
  id="inc"
>
  2
</button>
<button
  id="back"
>
  back
</button>
<pre>
  {"id":2,"call":1}
</pre>
```
## Change
```
UPDATE: #inc::text "1" => "2"
UPDATE: pre::text "{\"id\":1,\"call\":1}" => "{\"id\":2,\"call\":1}"
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#back").click();
```

# Update
```html
<button
  id="inc"
>
  2
</button>
<button
  id="back"
>
  back
</button>
<pre>
  {"id":2,"call":3}
</pre>
```
## Change
```
UPDATE: pre::text "{\"id\":2,\"call\":1}" => "{\"id\":2,\"call\":3}"
```
