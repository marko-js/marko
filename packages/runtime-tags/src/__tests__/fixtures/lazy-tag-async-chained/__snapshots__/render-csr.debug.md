# Render `{"value":1}`

# Update
```html
<button
  id="sync"
>
  1
</button>
```
## Change
```
INSERT: #sync
UPDATE: #sync[id] null => "sync"
UPDATE: #sync::text " " => "1"
```

# Update
```html
<button
  id="sync"
>
  1
</button>
<button
  id="async"
>
  2
</button>
```
## Change
```
INSERT: #sync + #async
UPDATE: #async::text " " => "2"
UPDATE: #async[id] null => "async"
```

# Update
```js
container.querySelector("#sync").click();
```
```html
<button
  id="sync"
>
  2
</button>
<button
  id="async"
>
  2
</button>
```
## Change
```
UPDATE: #sync::text "1" => "2"
```

# Update
```js
container.querySelector("#async").click();
```
```html
<button
  id="sync"
>
  2
</button>
<button
  id="async"
>
  3
</button>
```
## Change
```
UPDATE: #async::text "2" => "3"
```
