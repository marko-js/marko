# Render `{"a":"x","b":"p","fail":false}`
```html
<p>
  ok
</p>
<p>
  ok
</p>
<button
  class="n"
>
  +
</button>
```

# Update `{"a":"y","b":"q","fail":true}`
```html
<em>
  yk
</em>
<em>
  yq
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
REMOVE: em:nth-of-type(1) + p
REMOVE: em:nth-of-type(2) + p
INSERT: em
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text " " => "yk"
UPDATE: em:nth-of-type(2)::text " " => "yq"
```

# Update
```js
container.querySelector("button.n").click();
```
```html
<em>
  ykk
</em>
<em>
  yq
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "yk" => "ykk"
```

# Update `{"a":"z","b":"r","fail":true}`
```html
<em>
  zkk
</em>
<em>
  zr
</em>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "ykk" => "zkk"
UPDATE: em:nth-of-type(2)::text "yq" => "zr"
```

# Update `{"a":"w","b":"s","fail":false}`
## Console
```
ERROR Error: A patch rendered the body of a `<try>` this page caught: the page loads the URL as a document instead.
```

## Patch rejected (navigate)
