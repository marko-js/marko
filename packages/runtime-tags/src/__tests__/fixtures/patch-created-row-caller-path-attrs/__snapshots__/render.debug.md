# Render `{"show":false,"items":[]}`
```html
<button
  class="p"
>
  p
</button>
```

# Update `{"show":true,"items":[{"href":"/a","label":"A"}]}`
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
## Change
```
INSERT: .link.active
UPDATE: .link.active[class] "link" => "link active"
```

# Update `{"show":true,"items":[{"href":"/a","label":"A"},{"href":"/b","label":"B"}]}`
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

# Update `{"show":true,"items":[{"href":"/b","label":"B"},{"href":"/c","label":"C"}]}`
```html
<a
  class="link active"
  href="/b"
>
  B
</a>
<a
  class="link"
  href="/c"
>
  C
</a>
<button
  class="p"
>
  p
</button>
```
## Change
```
UPDATE: .link.active[href] "/a" => "/b"
UPDATE: .link.active::text "A" => "B"
UPDATE: a:nth-of-type(2)[href] "/b" => "/c"
UPDATE: a:nth-of-type(2)::text "B" => "C"
UPDATE: .link.active[class] "link" => "link active"
UPDATE: a:nth-of-type(2)[class] "link active" => "link"
```

# Update
```js
(d.querySelectorAll(sel)[i]).click();
```
```html
<a
  class="link"
  href="/b"
>
  B
</a>
<a
  class="link"
  href="/c"
>
  C
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
```
