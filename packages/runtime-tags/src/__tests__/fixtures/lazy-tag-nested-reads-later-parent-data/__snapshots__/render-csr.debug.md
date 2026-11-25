# Render

# Update
```html
<button
  class="parent"
>
  parent
</button>
```
## Change
```
INSERT: .parent
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
```
## Change
```
INSERT: .child
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
```
## Change
```
INSERT: .later
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
```
## Change
```
INSERT: button:nth-of-type(4)
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
