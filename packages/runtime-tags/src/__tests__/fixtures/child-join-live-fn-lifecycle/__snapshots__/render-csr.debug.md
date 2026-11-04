# Render `{"a":"x","b":"p"}`
```html
<p>
  x!0
</p>
<p>
  x!p
</p>
<button>
  +
</button>
```

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  x!1
</p>
<p>
  x!p
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x!0" => "x!1"
```
## Console
```
LOG "update" "x!1"
```

# Update `{"a":"y","b":"p"}`
```html
<p>
  y!1
</p>
<p>
  y!p
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "x!1" => "y!1"
UPDATE: p:nth-of-type(2)::text "x!p" => "y!p"
```
## Console
```
LOG "update" "y!1"
LOG "update" "y!p"
```

# Update `{"a":"y","b":"p"}`

# Update
```js
d.querySelector("button").click();
```
```html
<p>
  y!2
</p>
<p>
  y!p
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "y!1" => "y!2"
```
## Console
```
LOG "update" "y!2"
```
