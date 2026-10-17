# Render `{"$global":{"o":{"x":"a","list":[1],"a.b":"p"},"c.d":"q","serializedGlobals":["o","c.d","p"]}}`
```html
<button>
  t
</button>
<p>
  A
</p>
<b>
  1
</b>
<i>
  p
</i>
<u>
  q
</u>
<s />
```

# Update `{"$global":{"o":{"x":"b","list":[1,2],"a.b":"r"},"c.d":"s","p":{"x":"t"},"serializedGlobals":["o","c.d","p"]}}`
```html
<button>
  t
</button>
<p>
  B
</p>
<b>
  2
</b>
<i>
  r
</i>
<u>
  s
</u>
<s>
  t
</s>
```
## Change
```
UPDATE: p::text "A" => "B"
UPDATE: b::text "1" => "2"
UPDATE: i::text "p" => "r"
UPDATE: s::text "" => "t"
UPDATE: u::text "q" => "s"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + p
REMOVE: button + b
REMOVE: button + i
REMOVE: button + u
REMOVE: button + s
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<p>
  B
</p>
<b>
  2
</b>
<i>
  r
</i>
<u>
  s
</u>
<s>
  t
</s>
```
## Change
```
INSERT: button + :is(p, b, i, u, s)
```

# Update `{"$global":{"o":{"x":"c","list":[3,4],"a.b":"u"},"c.d":"v","p":{"x":"w"},"serializedGlobals":["o","c.d","p"]}}`
```html
<button>
  t
</button>
<p>
  C
</p>
<b>
  2
</b>
<i>
  u
</i>
<u>
  v
</u>
<s>
  w
</s>
```
## Change
```
UPDATE: p::text "B" => "C"
UPDATE: i::text "r" => "u"
UPDATE: s::text "t" => "w"
UPDATE: u::text "s" => "v"
```
