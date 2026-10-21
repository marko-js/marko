# Render
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 0
</div>
<span>
  outer text 0
</span>
<section>
  dynamic text 0
</section>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 1
</div>
<span>
  outer text 1
</span>
<section>
  dynamic text 1
</section>
```
## Change
```
REMOVE: div > :is(::text("body text "), ::text("0"))
REMOVE: span > :is(::text("outer text "), ::text("0"))
REMOVE: section > :is(::text("dynamic text "), ::text("0"))
INSERT: section::text("dynamic text ")
INSERT: section::text@0 + ::text("1")
INSERT: div::text("body text ")
INSERT: div::text@0 + ::text("1")
INSERT: span::text("outer text ")
INSERT: span::text@0 + ::text("1")
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  increment
</button>
<div>
  body text 2
</div>
<span>
  outer text 2
</span>
<section>
  dynamic text 2
</section>
```
## Change
```
REMOVE: div > :is(::text("body text "), ::text("1"))
REMOVE: span > :is(::text("outer text "), ::text("1"))
REMOVE: section > :is(::text("dynamic text "), ::text("1"))
INSERT: section::text("dynamic text ")
INSERT: section::text@0 + ::text("2")
INSERT: div::text("body text ")
INSERT: div::text@0 + ::text("2")
INSERT: span::text("outer text ")
INSERT: span::text@0 + ::text("2")
```
