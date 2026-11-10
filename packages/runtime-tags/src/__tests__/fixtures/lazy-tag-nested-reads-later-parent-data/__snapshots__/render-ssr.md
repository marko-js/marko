# Render
```html
<button
  class="parent"
>
  parent
</button>
<button
  class="child"
>
  first
</button>
```

# Update
```html
<button
  class="parent"
>
  parent
</button>
<button
  class="child"
>
  first
</button>
<button
  class="later"
>
  later
</button>
<button
  class="child"
>
  second
</button>
loading
```
## Change
```
INSERT: button:nth-of-type(2) + .later
INSERT: .later::text("later")
INSERT: .later + button
INSERT: button:nth-of-type(4)::text("second")
INSERT: button:nth-of-type(4) + ::text("loading")
```

# Update
```html
<button
  class="parent"
>
  parent
</button>
<button
  class="child"
>
  first
</button>
<button
  class="later"
>
  later
</button>
<button
  class="child"
>
  second
</button>
<button
  class="child"
>
  first
</button>
```
## Change
```
INSERT: button:nth-of-type(5)::text("first")
REMOVE: ::text("loading")
INSERT: button:nth-of-type(4) + button
```

# Update
```js
for (const button of document.querySelectorAll("button")) button.click();
```
## Console
```
LOG "parent" "{\"name\":\"first\"}"
LOG "child" "first"
LOG "later" "{\"name\":\"second\"}"
LOG "child" "second"
LOG "child" "first"
```
