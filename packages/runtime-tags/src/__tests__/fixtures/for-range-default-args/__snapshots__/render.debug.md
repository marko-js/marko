# Render
```html
<button>
  more
</button>
<div
  class="defaults"
>
  0123
</div>
<div
  class="from"
>
  123
</div>
<div
  class="step"
>
  02
</div>
<div
  class="by"
>
  0123
</div>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  more
</button>
<div
  class="defaults"
>
  01234
</div>
<div
  class="from"
>
  1234
</div>
<div
  class="step"
>
  02
</div>
<div
  class="by"
>
  01234
</div>
```
## Change
```
INSERT: .defaults::text@3 + ::text("4")
INSERT: .from::text@2 + ::text("4")
INSERT: .by::text@3 + ::text("4")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  more
</button>
<div
  class="defaults"
>
  012345
</div>
<div
  class="from"
>
  12345
</div>
<div
  class="step"
>
  024
</div>
<div
  class="by"
>
  012345
</div>
```
## Change
```
INSERT: .defaults::text@4 + ::text("5")
INSERT: .from::text@3 + ::text("5")
INSERT: .step::text@1 + ::text("4")
INSERT: .by::text@4 + ::text("5")
```
