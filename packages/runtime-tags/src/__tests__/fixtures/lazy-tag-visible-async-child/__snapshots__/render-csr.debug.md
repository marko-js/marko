# Render `{"value":1}`
```html
<button
  class="parent"
>
  parent 1
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
  parent 2
</button>
```
## Change
```
UPDATE: .parent::text@7 "1" => "2"
```

# Update
```js
const parent = container.querySelector(".parent");
if (!parent.textContent?.includes("parent 2")) {
  throw new Error("Expected parent to resume before async visible child loads.");
}
```

# Update
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
INSERT: .parent + .child
UPDATE: .child::text@6 "" => "1"
```
