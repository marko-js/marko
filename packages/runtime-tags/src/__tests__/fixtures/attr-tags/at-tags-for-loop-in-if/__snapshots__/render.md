# Render
```html
<button
  id="add"
>
  add
</button>
<button
  id="mode"
>
  mode
</button>
<div>
  static 0static 1static 2
</div>
<div>
  if 0if 1
</div>
<div />
<div />
<div>
  for-if 0
</div>
<div>
  zero
</div>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="mode"
>
  mode
</button>
<div>
  static 0static 1static 2
</div>
<div>
  if 0if 1if 2
</div>
<div />
<div />
<div>
  for-if 0for-if 2
</div>
<div>
  zero
</div>
```
## Change
```
INSERT: div:nth-of-type(2)::text@7 + :is(::text("if "), ::text("2"))
INSERT: div:nth-of-type(5)::text@7 + :is(::text("for-if "), ::text("2"))
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="mode"
>
  mode
</button>
<div>
  static 0static 1static 2
</div>
<div />
<div>
  else-if 0else-if 1else-if 2
</div>
<div />
<div>
  for-if 1
</div>
<div>
  labeled 0labeled 1labeled 2
</div>
```
## Change
```
REMOVE: div:nth-of-type(2) > :is(::text("if "), ::text("0"), ::text("if "), ::text("1"), ::text("if "), ::text("2"))
INSERT: div:nth-of-type(3) > :is(::text("else-if "), ::text("0"))
INSERT: div:nth-of-type(3)::text@8 + :is(::text("else-if "), ::text("1"))
INSERT: div:nth-of-type(3)::text@17 + :is(::text("else-if "), ::text("2"))
UPDATE: div:nth-of-type(5)::text@7 "0" => "1"
REMOVE: div:nth-of-type(5)::text@7 + ::text("for-if ")
REMOVE: div:nth-of-type(5)::text@7 + ::text("2")
UPDATE: div:nth-of-type(6)::text "zero" => ""
INSERT: div:nth-of-type(6) > :is(::text("labeled "), ::text("0"))
INSERT: div:nth-of-type(6)::text@8 + :is(::text("labeled "), ::text("1"))
INSERT: div:nth-of-type(6)::text@17 + :is(::text("labeled "), ::text("2"))
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="mode"
>
  mode
</button>
<div>
  static 0static 1static 2
</div>
<div />
<div />
<div>
  else 0else 1else 2
</div>
<div>
  for-if 0for-if 2
</div>
<div>
  labeled 0labeled 1labeled 2
</div>
```
## Change
```
REMOVE: div:nth-of-type(3) > :is(::text("else-if "), ::text("0"), ::text("else-if "), ::text("1"), ::text("else-if "), ::text("2"))
INSERT: div:nth-of-type(4) > :is(::text("else "), ::text("0"))
INSERT: div:nth-of-type(4)::text@5 + :is(::text("else "), ::text("1"))
INSERT: div:nth-of-type(4)::text@11 + :is(::text("else "), ::text("2"))
UPDATE: div:nth-of-type(5)::text@7 "1" => "0"
INSERT: div:nth-of-type(5)::text@7 + :is(::text("for-if "), ::text("2"))
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="add"
>
  add
</button>
<button
  id="mode"
>
  mode
</button>
<div>
  static 0static 1static 2
</div>
<div>
  if 0if 1if 2
</div>
<div />
<div />
<div>
  for-if 0for-if 2
</div>
<div>
  zero
</div>
```
## Change
```
INSERT: div:nth-of-type(2) > :is(::text("if "), ::text("0"))
INSERT: div:nth-of-type(2)::text@3 + :is(::text("if "), ::text("1"))
INSERT: div:nth-of-type(2)::text@7 + :is(::text("if "), ::text("2"))
REMOVE: div:nth-of-type(4) > :is(::text("else "), ::text("0"), ::text("else "), ::text("1"), ::text("else "), ::text("2"))
UPDATE: div:nth-of-type(6)::text "" => "zero"
REMOVE: div:nth-of-type(6)::text + ::text("labeled ")
REMOVE: div:nth-of-type(6)::text + ::text("0")
REMOVE: div:nth-of-type(6)::text + ::text("labeled ")
REMOVE: div:nth-of-type(6)::text + ::text("1")
REMOVE: div:nth-of-type(6)::text + ::text("labeled ")
REMOVE: div:nth-of-type(6)::text + ::text("2")
```
