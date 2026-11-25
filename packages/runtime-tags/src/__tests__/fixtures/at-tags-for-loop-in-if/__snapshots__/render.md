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
INSERT: div:nth-of-type(2)::text("if "), div:nth-of-type(2)::text("2")
INSERT: div:nth-of-type(5)::text("for-if "), div:nth-of-type(5)::text("2")
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
INSERT: div:nth-of-type(3)::text("else-if "), div:nth-of-type(3)::text("0")
INSERT: div:nth-of-type(3)::text("else-if "), div:nth-of-type(3)::text("1")
INSERT: div:nth-of-type(3)::text("else-if "), div:nth-of-type(3)::text("2")
REMOVE: div:nth-of-type(5)::text("2")
REMOVE: div:nth-of-type(5)::text("for-if ")
UPDATE: div:nth-of-type(5)::text@7 "0" => "1"
INSERT: div:nth-of-type(6)::text("labeled "), div:nth-of-type(6)::text("0")
UPDATE: div:nth-of-type(6)::text "zero" => ""
INSERT: div:nth-of-type(6)::text("labeled "), div:nth-of-type(6)::text("1")
INSERT: div:nth-of-type(6)::text("labeled "), div:nth-of-type(6)::text("2")
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
INSERT: div:nth-of-type(4)::text("else "), div:nth-of-type(4)::text("0")
INSERT: div:nth-of-type(4)::text("else "), div:nth-of-type(4)::text("1")
INSERT: div:nth-of-type(4)::text("else "), div:nth-of-type(4)::text("2")
UPDATE: div:nth-of-type(5)::text@7 "1" => "0"
INSERT: div:nth-of-type(5)::text("for-if "), div:nth-of-type(5)::text("2")
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
INSERT: div:nth-of-type(2)::text("if "), div:nth-of-type(2)::text("0")
INSERT: div:nth-of-type(2)::text("if "), div:nth-of-type(2)::text("1")
INSERT: div:nth-of-type(2)::text("if "), div:nth-of-type(2)::text("2")
REMOVE: div:nth-of-type(4) > :is(::text("else "), ::text("0"), ::text("else "), ::text("1"), ::text("else "), ::text("2"))
REMOVE: div:nth-of-type(6)::text("0")
REMOVE: div:nth-of-type(6)::text("1")
REMOVE: div:nth-of-type(6)::text("2")
REMOVE: div:nth-of-type(6)::text("labeled ")
REMOVE: div:nth-of-type(6)::text("labeled ")
REMOVE: div:nth-of-type(6)::text("labeled ")
UPDATE: div:nth-of-type(6)::text "" => "zero"
```
