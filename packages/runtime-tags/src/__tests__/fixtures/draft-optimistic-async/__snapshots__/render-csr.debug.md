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
  false
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
  5
</p>
<p
  id="server"
>
  0
</p>
<p
  id="pending"
>
  true
</p>
```
## Change
```
UPDATE: #draft::text "0" => "5"
UPDATE: #pending::text "false" => "true"
```

# Update
```html
<button>
  go
</button>
<p
  id="draft"
>
  5
</p>
<p
  id="server"
>
  1
</p>
<p
  id="pending"
>
  true
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
  false
</p>
```
## Change
```
UPDATE: #draft::text "5" => "1"
UPDATE: #pending::text "true" => "false"
```
