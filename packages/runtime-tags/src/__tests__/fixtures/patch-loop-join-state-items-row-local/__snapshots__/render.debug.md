# Render `{"b":"m"}`
```html
<p>
  km!
</p>
<p>
  km!
</p>
<button
  class="n"
>
  +
</button>
<button
  class="l"
>
  l
</button>
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  km!
</p>
<p>
  km!
</p>
<p>
  km!
</p>
<button
  class="n"
>
  +
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "km!"
```

# Update `{"b":"n"}`
```html
<p>
  kn!
</p>
<p>
  kn!
</p>
<p>
  kn!
</p>
<button
  class="n"
>
  +
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "km!" => "kn!"
UPDATE: p:nth-of-type(2)::text "km!" => "kn!"
UPDATE: p:nth-of-type(3)::text "km!" => "kn!"
```

# Update
```js
d.querySelector(sel).click();
```
```html
<p>
  kkn!
</p>
<p>
  kkn!
</p>
<p>
  kkn!
</p>
<button
  class="n"
>
  +
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "kn!" => "kkn!"
UPDATE: p:nth-of-type(2)::text "kn!" => "kkn!"
UPDATE: p:nth-of-type(3)::text "kn!" => "kkn!"
```

# Update `{"b":"o"}`
```html
<p>
  kko!
</p>
<p>
  kko!
</p>
<p>
  kko!
</p>
<button
  class="n"
>
  +
</button>
<button
  class="l"
>
  l
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "kkn!" => "kko!"
UPDATE: p:nth-of-type(2)::text "kkn!" => "kko!"
UPDATE: p:nth-of-type(3)::text "kkn!" => "kko!"
```
