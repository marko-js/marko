# Render `{"label":"one","a":{}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending 
</p>
<b>
  a1
</b>
<span>
  one
</span>
```

# Update `{"label":"two","a":{"value":"a2"}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<i>
  loading
</i>
<span>
  two
</span>
```
## Change
```
UPDATE: span::text "one" => "two"
UPDATE: p::text@8 "" => "true"
INSERT: p + i
REMOVE: i + b
```

# Update
```js
pending(document, true);
```

# Update `{"label":"two","a":{"value":"a2"}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<b>
  a2
</b>
<span>
  two
</span>
```
## Change
```
INSERT: p + b
REMOVE: b + i
```

# Update
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending 
</p>
<b>
  a2
</b>
<span>
  two
</span>
```
## Change
```
UPDATE: p::text "true" => ""
```

# Update
```js
pending(document, false);
```

# Update `{"label":"three","a":{"value":"a3"}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<i>
  loading
</i>
<span>
  three
</span>
```
## Change
```
UPDATE: span::text "two" => "three"
UPDATE: p::text@8 "" => "true"
INSERT: p + i
REMOVE: i + b
```

# Update abandon

# Update `{"label":"three","a":{"value":"a3"}}`

# Update
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending 
</p>
<i>
  loading
</i>
<span>
  three
</span>
```
## Change
```
UPDATE: p::text "true" => ""
```

# Update
```js
pending(document, false);
```

# Update `{"label":"four","a":{"value":"a4"}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<i>
  loading
</i>
<span>
  four
</span>
```
## Change
```
UPDATE: p::text@8 "" => "true"
UPDATE: span::text "three" => "four"
```

# Update supersede

# Update `{"label":"four","a":{"value":"a4"}}`

# Update
```js
pending(document, true);
```

# Update `{"label":"five","a":{}}`
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending true
</p>
<b>
  a5
</b>
<span>
  five
</span>
```
## Change
```
UPDATE: span::text "four" => "five"
INSERT: p + b
REMOVE: b + i
```

# Update
```html
<a
  href="/next"
  id="go"
>
  go
</a>
<p>
  pending 
</p>
<b>
  a5
</b>
<span>
  five
</span>
```
## Change
```
UPDATE: p::text "true" => ""
```

# Update
```js
pending(document, false);
```
