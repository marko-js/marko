# Render

# Update
```html
<button
  class="child"
>
  child:shared
</button>
```
## Change
```
INSERT: .child
UPDATE: .child::text@6 "" => "shared"
```

# Update
```html
<button
  class="child"
>
  child:shared
</button>
<button
  class="grand"
>
  grand:shared
</button>
```
## Change
```
INSERT: .child + .grand
```

# Update
```js
container.querySelector(".child").click();
```
```html
<button
  class="child"
>
  child:shared!
</button>
<button
  class="grand"
>
  grand:shared
</button>
```
## Change
```
UPDATE: .child::text@6 "shared" => "shared!"
```

# Update
```js
container.querySelector(".grand").click();
```
```html
<button
  class="child"
>
  child:shared!
</button>
<button
  class="grand"
>
  grand:shared?
</button>
```
## Change
```
UPDATE: .grand::text@6 "shared" => "shared?"
```
