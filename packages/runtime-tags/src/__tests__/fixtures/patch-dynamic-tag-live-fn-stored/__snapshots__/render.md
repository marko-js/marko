# Render `{"title":"a"}`
```html
<output
  id="out"
/>
<button
  class="call"
>
  call
</button>
<pre>
  new;
</pre>
```

# Update `{"title":"b"}`
```html
<output
  id="out"
/>
<button
  class="call"
>
  call
</button>
<pre>
  new;new;
</pre>
```
## Change
```
REMOVE: pre::text("new;")
INSERT: pre::text("new;new;")
```

# Update `{"title":"b"}`

# Update
```js
d.querySelector(".call").click();
```
```html
<output
  id="out"
>
  v:b
</output>
<button
  class="call"
>
  call
</button>
<pre>
  new;new;
</pre>
```
## Change
```
INSERT: #out::text("v:b")
```

# Update `{"title":"c"}`
```html
<output
  id="out"
>
  v:b
</output>
<button
  class="call"
>
  call
</button>
<pre>
  new;new;new;
</pre>
```
## Change
```
REMOVE: pre::text("new;new;")
INSERT: pre::text("new;new;new;")
```

# Update
```js
d.querySelector(".call").click();
```
```html
<output
  id="out"
>
  v:c
</output>
<button
  class="call"
>
  call
</button>
<pre>
  new;new;new;
</pre>
```
## Change
```
REMOVE: #out::text("v:b")
INSERT: #out::text("v:c")
```
