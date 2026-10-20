# Render
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 0 0
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  0 0 0 0
</span>
```

# Update
```js
document.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 1 0
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  1 0 0 0
</span>
```
## Change
```
REMOVE: div > :is(::text("content "), ::text("0"), ::text(" "), ::text("0"))
INSERT: div::text("content ")
INSERT: div::text@0 + ::text("1")
INSERT: div::text@8 + ::text(" ")
INSERT: div::text@9 + ::text("0")
UPDATE: span::text@0 "0 0 0" => "1 0 0"
```

# Update
```js
document.querySelector("#class").click();
```
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 1 1
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  1 1 0 0
</span>
```
## Change
```
REMOVE: div > :is(::text("content "), ::text("1"), ::text(" "), ::text("0"))
INSERT: div::text("content ")
INSERT: div::text@0 + ::text("1")
INSERT: div::text@8 + ::text(" ")
INSERT: div::text@9 + ::text("1")
UPDATE: span::text@0 "1 0 0" => "1 1 0"
```

# Update
```js
document.querySelector("#tags-child").click();
```
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 1 1
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  1 1 1 0
</span>
```
## Change
```
UPDATE: span::text@0 "1 1 0" => "1 1 1"
```

# Update
```js
document.querySelector("#class-leaf").click();
```
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 1 1
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  1 1 1 1
</span>
```
## Change
```
UPDATE: span::text@6 "0" => "1"
```

# Update
```js
document.querySelector("#tags").click();
```
```html
<button
  id="tags"
>
  tags
</button>
<button
  id="class"
>
  class
</button>
<button
  id="tags-child"
>
  tags child
</button>
<div>
  content 2 1
</div>
<button
  id="class-leaf"
>
  class leaf
</button>
<span>
  2 1 1 1
</span>
```
## Change
```
REMOVE: div > :is(::text("content "), ::text("1"), ::text(" "), ::text("1"))
INSERT: div::text("content ")
INSERT: div::text@0 + ::text("2")
INSERT: div::text@8 + ::text(" ")
INSERT: div::text@9 + ::text("1")
UPDATE: span::text@0 "1 1 1" => "2 1 1"
```
