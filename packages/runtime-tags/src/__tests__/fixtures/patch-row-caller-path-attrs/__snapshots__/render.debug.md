# Render `{"items":[{"href":"/a","label":"A"}]}`
```html
<a
  class="link active"
  href="/a"
>
  A
</a>
<button
  class="p"
>
  p
</button>
```

# Update `{"items":[{"href":"/a","label":"A"},{"href":"/b","label":"B"}]}`
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
  class="p"
>
  p
</button>
```
## Change
```
INSERT: .link.active + a
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
  B
</a>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: a:nth-of-type(1)[class] "link active" => "link"
UPDATE: .link.active[class] "link" => "link active"
```

# Update `{"items":[{"href":"/c","label":"C"},{"href":"/b","label":"B"}]}`
```html
<a
  class="link"
  href="/c"
>
  C
</a>
<a
  class="link active"
  href="/b"
>
  B
</a>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: a:nth-of-type(1)[href] "/a" => "/c"
UPDATE: a:nth-of-type(1)::text "A" => "C"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<a
  class="link"
  href="/c"
>
  C
</a>
<a
  class="link"
  href="/b"
>
  B
</a>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: a:nth-of-type(2)[class] "link active" => "link"
```
