# Render
```html
<button
  id="add"
>
  add
</button>
<button
  id="toggle"
>
  toggle
</button>
<button
  id="rename"
>
  rename
</button>
<em>
  if 0
</em>
<b>
  tag 0
</b>
<span>
  0.0
</span>
<span>
  0.1
</span>
<em>
  if 1
</em>
<b>
  tag 1
</b>
<span>
  1.0
</span>
<span>
  1.1
</span>
<strong>
  a
</strong>
<strong>
  b
</strong>
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
  id="toggle"
>
  toggle
</button>
<button
  id="rename"
>
  rename
</button>
<em>
  if 0
</em>
<b>
  tag 0
</b>
<span>
  0.0
</span>
<span>
  0.1
</span>
<em>
  if 1
</em>
<b>
  tag 1
</b>
<span>
  1.0
</span>
<span>
  1.1
</span>
<em>
  if 2
</em>
<b>
  tag 2
</b>
<span>
  2.0
</span>
<span>
  2.1
</span>
<strong>
  a
</strong>
<strong>
  b
</strong>
```
## Change
```
INSERT: span:nth-of-type(4) + em
INSERT: em:nth-of-type(3) + b
INSERT: b:nth-of-type(3) > :is(::text("tag "), ::text("2"))
INSERT: b:nth-of-type(3) + span
INSERT: span:nth-of-type(5) + span
UPDATE: em:nth-of-type(3)::text@3 "" => "2"
UPDATE: b:nth-of-type(3)::text@4 "" => "2"
UPDATE: span:nth-of-type(5)::text@0 "" => "2"
UPDATE: span:nth-of-type(5)::text@2 "" => "0"
UPDATE: span:nth-of-type(6)::text@0 "" => "2"
UPDATE: span:nth-of-type(6)::text@2 "" => "1"
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
  id="toggle"
>
  toggle
</button>
<button
  id="rename"
>
  rename
</button>
<i>
  tag 0
</i>
<span>
  0.0
</span>
<span>
  0.1
</span>
<i>
  tag 1
</i>
<span>
  1.0
</span>
<span>
  1.1
</span>
<i>
  tag 2
</i>
<span>
  2.0
</span>
<span>
  2.1
</span>
```
## Change
```
REMOVE: #rename + em
INSERT: #rename + i
REMOVE: i:nth-of-type(1) + b
INSERT: i:nth-of-type(1) > :is(::text("tag "), ::text("0"))
REMOVE: span:nth-of-type(2) + em
INSERT: span:nth-of-type(2) + i
REMOVE: i:nth-of-type(2) + b
INSERT: i:nth-of-type(2) > :is(::text("tag "), ::text("1"))
REMOVE: span:nth-of-type(6) + strong
REMOVE: span:nth-of-type(6) + strong
REMOVE: span:nth-of-type(4) + em
INSERT: span:nth-of-type(4) + i
REMOVE: i:nth-of-type(3) + b
INSERT: i:nth-of-type(3) > :is(::text("tag "), ::text("2"))
UPDATE: i:nth-of-type(1)::text@4 "" => "0"
UPDATE: i:nth-of-type(2)::text@4 "" => "1"
UPDATE: i:nth-of-type(3)::text@4 "" => "2"
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
  id="toggle"
>
  toggle
</button>
<button
  id="rename"
>
  rename
</button>
<em>
  if 0
</em>
<b>
  tag 0
</b>
<span>
  0.0
</span>
<span>
  0.1
</span>
<em>
  if 1
</em>
<b>
  tag 1
</b>
<span>
  1.0
</span>
<span>
  1.1
</span>
<em>
  if 2
</em>
<b>
  tag 2
</b>
<span>
  2.0
</span>
<span>
  2.1
</span>
<strong>
  a
</strong>
<strong>
  b
</strong>
```
## Change
```
INSERT: #rename + em
INSERT: em:nth-of-type(1) + b
REMOVE: b:nth-of-type(1) + i
INSERT: b:nth-of-type(1) > :is(::text("tag "), ::text("0"))
INSERT: span:nth-of-type(2) + em
INSERT: em:nth-of-type(2) + b
REMOVE: b:nth-of-type(2) + i
INSERT: b:nth-of-type(2) > :is(::text("tag "), ::text("1"))
INSERT: span:nth-of-type(6) + strong
INSERT: strong:nth-of-type(1) + strong
INSERT: span:nth-of-type(4) + em
INSERT: em:nth-of-type(3) + b
REMOVE: b:nth-of-type(3) + i
INSERT: b:nth-of-type(3) > :is(::text("tag "), ::text("2"))
UPDATE: em:nth-of-type(1)::text@3 "" => "0"
UPDATE: b:nth-of-type(1)::text@4 "" => "0"
UPDATE: em:nth-of-type(2)::text@3 "" => "1"
UPDATE: b:nth-of-type(2)::text@4 "" => "1"
UPDATE: strong:nth-of-type(1)::text " " => "a"
UPDATE: strong:nth-of-type(2)::text " " => "b"
UPDATE: em:nth-of-type(3)::text@3 "" => "2"
UPDATE: b:nth-of-type(3)::text@4 "" => "2"
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
  id="toggle"
>
  toggle
</button>
<button
  id="rename"
>
  rename
</button>
<em>
  if 0
</em>
<b>
  tag 0
</b>
<span>
  0.0
</span>
<span>
  0.1
</span>
<em>
  if 1
</em>
<b>
  tag 1
</b>
<span>
  1.0
</span>
<span>
  1.1
</span>
<em>
  if 2
</em>
<b>
  tag 2
</b>
<span>
  2.0
</span>
<span>
  2.1
</span>
<strong>
  a!
</strong>
<strong>
  b!
</strong>
```
## Change
```
UPDATE: strong:nth-of-type(1)::text "a" => "a!"
UPDATE: strong:nth-of-type(2)::text "b" => "b!"
```
