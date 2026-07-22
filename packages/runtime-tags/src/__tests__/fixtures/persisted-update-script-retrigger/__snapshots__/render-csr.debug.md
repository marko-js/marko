# Render `{"$global":{"persisted":true,"stock":5,"serializedGlobals":["stock"]}}`
```html
<button
  class="take"
>
  take
</button>
<p
  class="mirror"
>
  5 in stock
</p>
<p
  class="server"
>
  server says 5
</p>
```

# Update
```js
document.querySelector("button.take").click();
```
```html
<button
  class="take"
>
  take
</button>
<p
  class="mirror"
>
  4 in stock
</p>
<p
  class="server"
>
  server says 5
</p>
```
## Change
```
UPDATE: .mirror::text@0 "5" => "4"
```

# Update
```js
document.querySelector("button.take").click();
```
```html
<button
  class="take"
>
  take
</button>
<p
  class="mirror"
>
  3 in stock
</p>
<p
  class="server"
>
  server says 5
</p>
```
## Change
```
UPDATE: .mirror::text@0 "4" => "3"
```

# Update `{"$global":{"persisted":true,"stock":9,"serializedGlobals":["stock"]}}`

# Update `{"$global":{"persisted":true,"stock":9,"serializedGlobals":["stock"]}}`

# Update
```js
document.querySelector("button.take").click();
```
```html
<button
  class="take"
>
  take
</button>
<p
  class="mirror"
>
  2 in stock
</p>
<p
  class="server"
>
  server says 5
</p>
```
## Change
```
UPDATE: .mirror::text@0 "3" => "2"
```

# Update `{"$global":{"persisted":true,"stock":2,"serializedGlobals":["stock"]}}`

# Update `{"$global":{"persisted":true,"stock":2,"serializedGlobals":["stock"]}}`
