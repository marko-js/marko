# Render
```html
<button>
  show
</button>
<div
  class="layout"
/>
```

# Update
```html
<button>
  show
</button>
layout loading
```
## Change
```
INSERT: button + ::text("layout loading")
REMOVE: ::text + div
```

# Update
```html
<button>
  show
</button>
<div
  class="layout"
>
  laid out
</div>
```
## Change
```
INSERT: button + .layout
REMOVE: .layout + ::text("layout loading")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  show
</button>
<div />
<section />
<div
  class="layout"
>
  laid out
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + section
INSERT: button + div
```

# Update
```html
<button>
  show
</button>
define loadingwrapper loading
<div
  class="layout"
>
  laid out
</div>
```
## Change
```
INSERT: ::text@0 + ::text("wrapper loading")
REMOVE: ::text@14 + section
INSERT: button + ::text("define loading")
REMOVE: ::text@0 + div
```

# Update
```html
<button>
  show
</button>
<div>
  defined
</div>
<section>
  wrapped
</section>
<div
  class="layout"
>
  laid out
</div>
```
## Change
```
INSERT: div:nth-of-type(1) + section
REMOVE: section + ::text("wrapper loading")
INSERT: button + div
REMOVE: div:nth-of-type(1) + ::text("define loading")
```
