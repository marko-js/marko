# Render `{"x":"p","y":"q","show":true,"$global":{"g":"G","serializedGlobals":["g"]}}`
```html
<p>
  0pG!
</p>
<p>
  qpG!
</p>
<button
  class="n"
>
  +
</button>
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  1pG!
</p>
<p>
  qpG!
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "0pG!" => "1pG!"
```

# Update `{"x":"r","y":"s","show":true,"$global":{"g":"H","serializedGlobals":["g"]}}`
```html
<p>
  1rG!
</p>
<p>
  srH!
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "qpG!" => "srH!"
UPDATE: p:nth-of-type(1)::text "1pG!" => "1rG!"
```

# Update
```js
document.querySelector("button.n").click();
```
```html
<p>
  2rG!
</p>
<p>
  srH!
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "1rG!" => "2rG!"
```

# Update `{"x":"t","y":"u","show":true,"$global":{"g":"I","serializedGlobals":["g"]}}`
```html
<p>
  2tG!
</p>
<p>
  utI!
</p>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(2)::text "srH!" => "utI!"
UPDATE: p:nth-of-type(1)::text "2rG!" => "2tG!"
```
