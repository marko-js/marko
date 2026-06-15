# Render
```html
<button>
  b
</button>
<textarea>
  a-y-b
</textarea>
<div
  data-x="y"
  id="id-y"
>
  t-y-z
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  b
</button>
<textarea
  default-value="a-y!-b"
>
  a-y-b
</textarea>
<div
  data-x="y!"
  id="id-y!"
>
  t-y!-z
</div>
```
## Change
```
REMOVE: textarea::text("a-y-b")
INSERT: textarea::text("a-y!-b")
UPDATE: #id-y![id] "id-y" => "id-y!"
UPDATE: #id-y![data-x] "y" => "y!"
UPDATE: #id-y!::text "t-y-z" => "t-y!-z"
```
