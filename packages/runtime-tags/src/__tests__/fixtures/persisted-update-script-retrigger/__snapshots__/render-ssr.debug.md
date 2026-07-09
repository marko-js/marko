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
container.querySelector("button.take").click();
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
container.querySelector("button.take").click();
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
```html
<button
  class="take"
>
  take
</button>
<p
  class="mirror"
>
  9 in stock
</p>
<p
  class="server"
>
  server says 9
</p>
```
## Change
```
UPDATE: .server::text@12 "5" => "9"
UPDATE: .mirror::text@0 "3" => "9"
```

# Update
```js
container.querySelector("button.take").click();
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
  8 in stock
</p>
<p
  class="server"
>
  server says 9
</p>
```
## Change
```
UPDATE: .mirror::text@0 "9" => "8"
```

# Update `{"$global":{"persisted":true,"stock":2,"serializedGlobals":["stock"]}}`
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
  server says 2
</p>
```
## Change
```
UPDATE: .server::text@12 "9" => "2"
UPDATE: .mirror::text@0 "8" => "2"
```
