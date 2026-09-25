# Render
```html
<button>
  show
</button>
layout loadingbutton loading
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
<button>
  pressed
</button>
```
## Change
```
INSERT: button:nth-of-type(2)::text("pressed")
REMOVE: ::text("layout loading")
INSERT: button:nth-of-type(1) + .layout
REMOVE: ::text("button loading")
INSERT: .layout + button
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
<div
  class="layout"
/>
<button>
  pressed
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + div
INSERT: div:nth-of-type(1) + section
INSERT: div:nth-of-type(2) + div
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
layout attr loading
<button>
  pressed
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + ::text("define loading")
REMOVE: ::text@0 + div
INSERT: ::text@0 + ::text("wrapper loading")
REMOVE: ::text@14 + section
INSERT: .layout + ::text("layout attr loading")
REMOVE: ::text@29 + .layout
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
<div
  class="layout"
>
  defined
</div>
<button>
  pressed
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + div
REMOVE: div:nth-of-type(1) + ::text("define loading")
INSERT: div:nth-of-type(1) + section
REMOVE: section + ::text("wrapper loading")
INSERT: div:nth-of-type(2) + div
REMOVE: div:nth-of-type(3) + ::text("layout attr loading")
```
