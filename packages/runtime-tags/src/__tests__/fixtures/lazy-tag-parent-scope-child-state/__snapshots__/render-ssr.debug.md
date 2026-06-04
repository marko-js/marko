# Render
```html
<button
  class="parent"
>
  parent: 0
</button>
<button
  class="child"
>
  0: 0
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
  parent: 1
</button>
<button
  class="child"
>
  1: 0
</button>
```
## Change
```
UPDATE: .parent::text@8 "0" => "1"
UPDATE: .child::text@0 "0" => "1"
```

# Update
```js
container.querySelector(".child").click();
```
```html
<button
  class="parent"
>
  parent: 1
</button>
<button
  class="child"
>
  1: 1
</button>
```
## Change
```
UPDATE: .child::text@3 "0" => "1"
```
