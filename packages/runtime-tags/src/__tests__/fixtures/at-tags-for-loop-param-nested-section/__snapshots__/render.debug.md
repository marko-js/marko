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
INSERT: em:nth-of-type(3)
UPDATE: em:nth-of-type(3)::text@3 "" => "2"
INSERT: b:nth-of-type(3)
UPDATE: b:nth-of-type(3)::text@4 "" => "2"
INSERT: span:nth-of-type(5), span:nth-of-type(6)
UPDATE: span:nth-of-type(5)::text@0 "" => "2"
UPDATE: span:nth-of-type(6)::text@0 "" => "2"
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
REMOVE: b
REMOVE: b
REMOVE: b
REMOVE: em
REMOVE: em
REMOVE: em
REMOVE: strong
REMOVE: strong
INSERT: i:nth-of-type(1)
UPDATE: i:nth-of-type(1)::text@4 "" => "0"
INSERT: i:nth-of-type(2)
UPDATE: i:nth-of-type(2)::text@4 "" => "1"
INSERT: i:nth-of-type(3)
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
REMOVE: i
REMOVE: i
REMOVE: i
INSERT: em:nth-of-type(1)
UPDATE: em:nth-of-type(1)::text@3 "" => "0"
INSERT: b:nth-of-type(1)
UPDATE: b:nth-of-type(1)::text@4 "" => "0"
INSERT: em:nth-of-type(2)
UPDATE: em:nth-of-type(2)::text@3 "" => "1"
INSERT: b:nth-of-type(2)
UPDATE: b:nth-of-type(2)::text@4 "" => "1"
INSERT: em:nth-of-type(3)
UPDATE: em:nth-of-type(3)::text@3 "" => "2"
INSERT: b:nth-of-type(3)
UPDATE: b:nth-of-type(3)::text@4 "" => "2"
INSERT: strong:nth-of-type(1)
UPDATE: strong:nth-of-type(1)::text " " => "a"
INSERT: strong:nth-of-type(2)
UPDATE: strong:nth-of-type(2)::text " " => "b"
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
