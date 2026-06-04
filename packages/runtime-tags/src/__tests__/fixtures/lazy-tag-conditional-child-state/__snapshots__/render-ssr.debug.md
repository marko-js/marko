# Render
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 0
</button>
```

# Update
```js
container.querySelector(".parent").click();
```
```html
<button
  class="parent"
>
  Inc
</button>
```
## Change
```
REMOVE: .parent + button
```

# Update
```js
container.querySelector(".parent").click();
```
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  : 
</button>
```
## Change
```
INSERT: .parent + .child
```

# Update
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 2
</button>
```
## Change
```
UPDATE: .child::text@7 "" => "2"
UPDATE: .child::text@0 "" => "child"
```

# Update
```js
container.querySelector(".child").click();
```
```html
<button
  class="parent"
>
  Inc
</button>
<button
  class="child"
>
  child: 3
</button>
```
## Change
```
UPDATE: .child::text@7 "2" => "3"
```
