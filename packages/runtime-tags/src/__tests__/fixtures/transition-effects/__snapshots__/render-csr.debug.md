# Render

# Update
```html
LOADING...
```
## Change
```
INSERT: ::text("LOADING...")
```

# Update
```html
<h2>
  Id: 1 --&gt; 100
</h2>
<pre>
  {"id":100}
</pre>
<button
  id="inc"
>
  1
</button>
<button
  id="count"
>
  0
</button>
```
## Change
```
INSERT: h2, pre, #inc, #count
REMOVE: #count + ::text("LOADING...")
```
## Console
```
LOG "B" "{\"id\":1,\"payloadId\":100,\"data\":{\"id\":100}}"
LOG "A" "{\"id\":1,\"count\":0}"
```

# Update
```js
container.querySelector("#inc").click();
```

# Update
```js
container.querySelector("#count").click();
```
```html
<h2>
  Id: 1 --&gt; 100
</h2>
<pre>
  {"id":100}
</pre>
<button
  id="inc"
>
  1
</button>
<button
  id="count"
>
  1
</button>
```
## Change
```
UPDATE: #count::text "0" => "1"
```
## Console
```
LOG "A" "{\"id\":1,\"count\":1}"
```

# Update
```html
<h2>
  Id: 2 --&gt; 200
</h2>
<pre>
  {"id":200}
</pre>
<button
  id="inc"
>
  2
</button>
<button
  id="count"
>
  1
</button>
```
## Change
```
UPDATE: h2::text@4 "1" => "2"
UPDATE: #inc::text "1" => "2"
UPDATE: h2::text@10 "100" => "200"
UPDATE: pre::text "{\"id\":100}" => "{\"id\":200}"
```
## Console
```
LOG "B" "{\"id\":2,\"payloadId\":200,\"data\":{\"id\":200}}"
LOG "A" "{\"id\":2,\"count\":1}"
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
  Id: 3 --&gt; 300
</h2>
<pre>
  {"id":300}
</pre>
<button
  id="inc"
>
  3
</button>
<button
  id="count"
>
  1
</button>
```
## Change
```
UPDATE: h2::text@4 "2" => "3"
UPDATE: #inc::text "2" => "3"
UPDATE: h2::text@10 "200" => "300"
UPDATE: pre::text "{\"id\":200}" => "{\"id\":300}"
```
## Console
```
LOG "B" "{\"id\":3,\"payloadId\":300,\"data\":{\"id\":300}}"
LOG "A" "{\"id\":3,\"count\":1}"
```

# Update
```js
container.querySelector("#count").click();
```
```html
<h2>
  Id: 3 --&gt; 300
</h2>
<pre>
  {"id":300}
</pre>
<button
  id="inc"
>
  3
</button>
<button
  id="count"
>
  2
</button>
```
## Change
```
UPDATE: #count::text "1" => "2"
```
## Console
```
LOG "A" "{\"id\":3,\"count\":2}"
```
