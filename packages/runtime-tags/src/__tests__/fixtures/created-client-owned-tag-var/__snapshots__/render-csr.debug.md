# Render `{"show":false,"label":"a"}`
```html
<button
  class="edit"
>
  edit
</button>
```

# Update `{"show":true,"label":"a"}`
```html
<button
  class="edit"
>
  edit
</button>
<span>
  a
</span>
<p>
  a!
</p>
<button
  class="log"
>
  log
</button>
```
## Change
```
INSERT: .edit + :is(span, p, .log)
UPDATE: p::text " " => "a!"
UPDATE: span::text " " => "a"
```

# Update
```js
document.querySelector(sel).click();
```
## Console
```
LOG "a!"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="edit"
>
  edit
</button>
<span>
  a?
</span>
<p>
  a?!
</p>
<button
  class="log"
>
  log
</button>
```
## Change
```
UPDATE: p::text "a!" => "a?!"
UPDATE: span::text "a" => "a?"
```
