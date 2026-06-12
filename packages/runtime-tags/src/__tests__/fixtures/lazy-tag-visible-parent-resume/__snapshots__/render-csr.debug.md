# Render `{"value":1}`
```html
<button
  class="parent"
>
  parent 1
</button>
```

# Update
```html
<button
  class="parent"
>
  parent 1
</button>
<button
  class="child"
>
  child 1
</button>
```
## Change
```
INSERT: .parent + .child
```

# Update
```js
container.querySelector(".parent").click();
```
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  child 1
</button>
```
## Change
```
UPDATE: .parent::text@7 "1" => "2"
```

# Update
```js
container.querySelector(".child").click();
```
```html
<button
  class="parent"
>
  parent 2
</button>
<button
  class="child"
>
  child 2
</button>
```
## Change
```
UPDATE: .child::text@6 "1" => "2"
```
