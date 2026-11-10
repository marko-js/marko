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
INSERT: .parent + .child
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
INSERT: .child + .later
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
INSERT: .later + button
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
INSERT: button:nth-of-type(4) + button
REMOVE: button:nth-of-type(5) + ::text("loading")
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
