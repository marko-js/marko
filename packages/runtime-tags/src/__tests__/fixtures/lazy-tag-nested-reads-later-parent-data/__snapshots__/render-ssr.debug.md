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
INSERT: .later
INSERT: .later::text("later")
INSERT: button:nth-of-type(4)
INSERT: button:nth-of-type(4)::text("second")
INSERT: ::text("loading")
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
REMOVE: ::text("loading")
INSERT: button:nth-of-type(5)
INSERT: button:nth-of-type(5)::text("first")
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
