# Render `{"show":false,"path":"/a"}`
```html
<button
  class="add"
>
  add
</button>
```

# Update `{"show":true,"path":"/a"}`
```html
<a
  class="link active"
  href="/a"
>
  A
</a>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: .link.active
UPDATE: .link.active[class] "link" => "link active"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<a
  class="link active"
  href="/a"
>
  A
</a>
<a
  class="link"
  href="/b"
>
  B
</a>
<button
  class="add"
>
  add
</button>
```
## Change
```
INSERT: .link.active + a
```

# Update `{"show":true,"path":"/b"}`
```html
<a
  class="link"
  href="/a"
>
  A
</a>
<a
  class="link active"
  href="/b"
>
  B
</a>
<button
  class="add"
>
  add
</button>
```
## Change
```
UPDATE: a:nth-of-type(1)[class] "link active" => "link"
UPDATE: .link.active[class] "link" => "link active"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<a
  class="link"
  href="/a"
>
  A
</a>
<a
  class="link active"
  href="/b"
>
  B/b
</a>
<button
  class="add"
>
  add
</button>
```
## Change
```
REMOVE: .link.active::text("B")
INSERT: .link.active::text("B/b")
```
