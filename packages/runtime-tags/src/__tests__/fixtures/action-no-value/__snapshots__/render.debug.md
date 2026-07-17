# Render
```html
<button>
  go
</button>
<p
  id="status"
>
  idle
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
  id="status"
>
  idle
</p>
<p
  id="pending"
>
  true
</p>
```
## Change
```
UPDATE: #pending::text "false" => "true"
```

# Update
```html
<button>
  go
</button>
<p
  id="status"
>
  idle
</p>
<p
  id="pending"
>
  false
</p>
```
## Change
```
UPDATE: #pending::text "true" => "false"
```

# Update
```html
<button>
  go
</button>
<p
  id="status"
>
  done
</p>
<p
  id="pending"
>
  false
</p>
```
## Change
```
UPDATE: #status::text "idle" => "done"
```
