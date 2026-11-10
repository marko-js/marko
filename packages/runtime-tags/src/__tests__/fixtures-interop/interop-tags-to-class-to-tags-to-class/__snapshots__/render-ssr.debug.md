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
UPDATE: span::text@0 "0 0 0" => "1 0 0"
UPDATE: div::text@8 "0" => "1"
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
UPDATE: span::text@0 "1 0 0" => "1 1 0"
UPDATE: div::text@10 "0" => "1"
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
UPDATE: span::text@0 "1 1 1" => "2 1 1"
UPDATE: div::text@8 "1" => "2"
```
