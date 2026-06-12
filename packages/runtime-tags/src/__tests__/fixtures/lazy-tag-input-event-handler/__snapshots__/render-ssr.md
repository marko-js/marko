# Render
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="child"
>
  child:?
</button>
```

# Update
```js
container.querySelector(".child").click();
```
```html
<button
  class="main"
>
  main:0
</button>
<button
  class="child"
>
  child:true
</button>
```
## Change
```
UPDATE: .child::text@6 "?" => "true"
```
