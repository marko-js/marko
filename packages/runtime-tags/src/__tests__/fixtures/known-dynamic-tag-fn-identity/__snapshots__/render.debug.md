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

# Update
```js
d.querySelector(".call").click();
```
```html
<output
  id="out"
>
  v:a
</output>
<button
  class="call"
>
  call
</button>
<pre>
  new;
</pre>
```
## Change
```
INSERT: #out::text("v:a")
```
