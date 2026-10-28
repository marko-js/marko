# Render `{"a":"x","b":"m"}`
```html
<div>
  s:m
</div>
<p>
  mp
</p>
<p>
  mq
</p>
<button
  class="l"
>
  l
</button>
```

# Update
```js
d.querySelector(selector).click();
```
```html
<div>
  s:m
</div>
<p>
  mp
</p>
<p>
  mq
</p>
<p>
  mr
</p>
<button
  class="l"
>
  l
</button>
```
## Change
```
INSERT: p:nth-of-type(2) + p
UPDATE: p:nth-of-type(3)::text " " => "mr"
```
