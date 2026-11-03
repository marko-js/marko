# Render `{"x":"p","show":true}`
```html
<p>
  0p
</p>
<em>
  0|p
</em>
<p>
  0p
</p>
<em>
  0|p
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1p
</p>
<em>
  1|p
</em>
<p>
  1p
</p>
<em>
  1|p
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0p" => "1p"
UPDATE: em:nth-of-type(1)::text@0 "0" => "1"
UPDATE: p:nth-of-type(2)::text "0p" => "1p"
UPDATE: em:nth-of-type(2)::text@0 "0" => "1"
```

# Update `{"x":"q","show":true}`
```html
<p>
  1q
</p>
<em>
  1|q
</em>
<p>
  1q
</p>
<em>
  1|q
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text@2 "p" => "q"
UPDATE: p:nth-of-type(1)::text "1p" => "1q"
UPDATE: em:nth-of-type(1)::text@2 "p" => "q"
UPDATE: p:nth-of-type(2)::text "1p" => "1q"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1q
</p>
<p>
  1q
</p>
<em>
  1|q
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
REMOVE: p:nth-of-type(1) + em
```

# Update
```js
document.querySelector(selector).click();
```
```html
<p>
  1q
</p>
<em>
  1|q
</em>
<p>
  1q
</p>
<em>
  1|q
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
INSERT: p:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text@0 "" => "1"
UPDATE: em:nth-of-type(1)::text@2 "" => "q"
```

# Update `{"x":"r","show":true}`
```html
<p>
  1r
</p>
<em>
  1|r
</em>
<p>
  1r
</p>
<em>
  1|r
</em>
<button
  class="n"
>
  +
</button>
<button
  class="s"
>
  s
</button>
```
## Change
```
UPDATE: em:nth-of-type(2)::text@2 "q" => "r"
UPDATE: p:nth-of-type(1)::text "1q" => "1r"
UPDATE: p:nth-of-type(2)::text "1q" => "1r"
UPDATE: em:nth-of-type(1)::text@2 "q" => "r"
```
