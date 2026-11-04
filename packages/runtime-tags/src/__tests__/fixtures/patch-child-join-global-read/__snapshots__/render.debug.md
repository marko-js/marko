# Render `{"x":"a","y":"b","$global":{"g":"!","serializedGlobals":["g"]}}`
```html
<p>
  an0!
</p>
<p>
  m0b!
</p>
<button
  class="n"
>
  +
</button>
```

# Update `{"x":"a","y":"b","$global":{"g":"?","serializedGlobals":["g"]}}`
```html
<p>
  an0?
</p>
<p>
  m0b?
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "an0!" => "an0?"
UPDATE: p:nth-of-type(2)::text "m0b!" => "m0b?"
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  an1?
</p>
<p>
  m1b?
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "an0?" => "an1?"
UPDATE: p:nth-of-type(2)::text "m0b?" => "m1b?"
```

# Update `{"x":"a","y":"b","$global":{"g":"#","serializedGlobals":["g"]}}`
```html
<p>
  an1#
</p>
<p>
  m1b#
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "an1?" => "an1#"
UPDATE: p:nth-of-type(2)::text "m1b?" => "m1b#"
```
