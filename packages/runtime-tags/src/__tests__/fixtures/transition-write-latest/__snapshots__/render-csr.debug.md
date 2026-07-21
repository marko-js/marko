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
LOADING...
```
## Change
```
INSERT: #back + ::text("LOADING...")
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
INSERT: #back + pre
REMOVE: pre + ::text("LOADING...")
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
  {"id":2,"call":2}
</pre>
```
## Change
```
UPDATE: #inc::text "1" => "2"
UPDATE: pre::text "{\"id\":1,\"call\":1}" => "{\"id\":2,\"call\":2}"
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
  {"id":2,"call":4}
</pre>
```
## Change
```
UPDATE: pre::text "{\"id\":2,\"call\":2}" => "{\"id\":2,\"call\":4}"
```
