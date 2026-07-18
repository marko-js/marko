# Render
```html
<button>
  go
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
container.querySelector("button").click();
```
```html
<button>
  go
</button>
<p
  id="draft"
>
  1
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
UPDATE: #draft::text "0" => "1"
UPDATE: #pending::text@0 "false" => "true"
UPDATE: #pending::text@5 "false" => "true"
```

# Update
```html
<button>
  go
</button>
<p
  id="draft"
>
  1
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
<button>
  go
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
UPDATE: #draft::text "1" => "11"
UPDATE: #pending::text@0 "true" => "false"
```

# Update
```html
<button>
  go
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  11
</p>
<p
  id="pending"
>
  false/true
</p>
```
## Change
```
UPDATE: #server::text "1" => "11"
```

# Update
```html
<button>
  go
</button>
<p
  id="draft"
>
  11
</p>
<p
  id="server"
>
  11
</p>
<p
  id="pending"
>
  false/false
</p>
```
## Change
```
UPDATE: #pending::text@6 "true" => "false"
```
