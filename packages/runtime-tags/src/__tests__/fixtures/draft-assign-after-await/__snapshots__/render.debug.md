# Render
```html
<button>
  save
</button>
<p
  id="status"
>
  saved
</p>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button
  disabled=""
>
  save
</button>
<p
  id="status"
>
  saving
</p>
```
## Change
```
UPDATE: #status::text "saved" => "saving"
UPDATE: button[disabled] null => ""
```

# Update
```html
<button
  disabled=""
>
  save
</button>
<p
  id="status"
>
  syncing
</p>
```
## Change
```
UPDATE: #status::text "saving" => "syncing"
```

# Update
```html
<button>
  save
</button>
<p
  id="status"
>
  saved again
</p>
```
## Change
```
UPDATE: #status::text "syncing" => "saved again"
UPDATE: button[disabled] "" => null
```
