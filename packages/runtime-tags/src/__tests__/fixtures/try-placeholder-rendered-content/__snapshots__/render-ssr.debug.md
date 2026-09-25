# Render
```html
<button>
  show
</button>
layout loading
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
REMOVE: ::text("layout loading")
INSERT: button + .layout
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
INSERT: button + div
INSERT: div:nth-of-type(1) + section
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
INSERT: button + ::text("define loading")
REMOVE: ::text@0 + div
INSERT: ::text@0 + ::text("wrapper loading")
REMOVE: ::text@14 + section
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
INSERT: button + div
REMOVE: div:nth-of-type(1) + ::text("define loading")
INSERT: div:nth-of-type(1) + section
REMOVE: section + ::text("wrapper loading")
```
