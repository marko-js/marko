# Render
```html
<button />
<p>
  a
</p>
<p
  class="row"
>
  a
</p>
<p>
  b
</p>
<p
  class="row"
>
  b
</p>
<p
  class="define"
>
  2
</p>
<p
  class="wrap"
>
  w
</p>
```

# Update
```html
<button />
<p>
  a
</p>
<p
  class="row"
>
  a
</p>
<p>
  b
</p>
<p
  class="row"
>
  b
</p>
<p
  class="define"
>
  2
</p>
<p
  class="wrap"
>
  w
</p>
<p
  class="await"
>
  a
</p>
```
## Change
```
INSERT: .wrap + .await
UPDATE: .await::text " " => "a"
```

# Update
```html
<button />
<p>
  a
</p>
<p
  class="row"
>
  a
</p>
<p>
  b
</p>
<p
  class="row"
>
  b
</p>
<p
  class="define"
>
  2
</p>
<p
  class="wrap"
>
  w
</p>
<p
  class="await"
>
  a
</p>
<p
  class="catch"
>
  e
</p>
```
## Change
```
INSERT: .await + .catch
UPDATE: .catch::text " " => "e"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button />
<p>
  a
</p>
<p
  class="row"
>
  a
</p>
<p>
  b
</p>
<p
  class="row"
>
  b
</p>
<p>
  c
</p>
<p
  class="row"
>
  c
</p>
<p
  class="define"
>
  3
</p>
<p
  class="wrap"
>
  w
</p>
<p
  class="await"
>
  a
</p>
<p
  class="catch"
>
  e
</p>
```
## Change
```
UPDATE: .define::text "2" => "3"
INSERT: p:nth-of-type(4) + :is(p, p)
UPDATE: p:nth-of-type(5)::text " " => "c"
UPDATE: p:nth-of-type(6)::text " " => "c"
```
