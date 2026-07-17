# Render
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  0
</p>
<p
  id="server"
>
  0
</p>
<p
  id="pending"
>
  false/false
</p>
```

# Update
```js
container.querySelector("#fast").click();
container.querySelector("#slow").click();
```
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  0
</p>
<p
  id="pending"
>
  true/true
</p>
```
## Change
```
UPDATE: #draft::text "0" => "11"
UPDATE: #pending::text@0 "false" => "true"
UPDATE: #pending::text@5 "false" => "true"
```

# Update
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  1
</p>
<p
  id="pending"
>
  true/true
</p>
```
## Change
```
UPDATE: #server::text "0" => "1"
```

# Update
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  1
</p>
<p
  id="pending"
>
  false/true
</p>
```
## Change
```
UPDATE: #pending::text@0 "true" => "false"
```

# Update
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  10
</p>
<p
  id="pending"
>
  false/true
</p>
```
## Change
```
UPDATE: #server::text "1" => "10"
```

# Update
```html
<button
  id="fast"
>
  fast
</button>
<button
  id="slow"
>
  slow
</button>
<p
  id="draft"
>
  10
</p>
<p
  id="server"
>
  10
</p>
<p
  id="pending"
>
  false/false
</p>
```
## Change
```
UPDATE: #draft::text "11" => "10"
UPDATE: #pending::text@6 "true" => "false"
```
