# Render `{"show":false,"label":"a","promise":{}}`
```html
<button
  class="set"
>
  set
</button>
```

# Update
```js
document.querySelector("button.set").click();
```

# Update `{"show":true,"label":"SECRET_b","promise":{}}`

# Update
```html
<button
  class="set"
>
  set
</button>
<p>
  p:z
</p>
<button
  class="g"
>
  g
</button>
```
## Change
```
INSERT: .set + :is(p, .g)
UPDATE: p::text " " => "p:z"
```
