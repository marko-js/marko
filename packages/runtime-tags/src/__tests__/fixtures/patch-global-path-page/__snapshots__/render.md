# Render `{"$global":{"cspNonce":"doc","o":{"x":"a","y":1},"a":"a1","c":"c1","serializedGlobals":["o","a","c"]}}`
```html
<button>
  t
</button>
<b>
  a1c1
</b>
<ul>
  <li>
    a1c1
  </li>
</ul>
<div>
  a1c1
</div>
<div
  data-runs="1"
>
  a
</div>
<div
  data-runs="1"
>
  doc
</div>
<div
  data-runs="1"
/>
<div
  data-runs="1"
>
  doca
</div>
```

# Update `{"$global":{"cspNonce":"patch","o":{"x":"a","y":2},"a":"a1","c":"c1","serializedGlobals":["o","a","c"]}}`
```html
<button>
  t
</button>
<b>
  a1c1
</b>
<ul>
  <li>
    a1c1
  </li>
</ul>
<div>
  a1c1
</div>
<div
  data-runs="1"
>
  a
</div>
<div
  data-runs="1"
>
  doc
</div>
<div
  data-runs="2"
/>
<div
  data-runs="1"
>
  doca
</div>
```
## Change
```
UPDATE: div:nth-of-type(4)[data-runs] "1" => "2"
```

# Update `{"$global":{"cspNonce":"patch","o":{"x":"b","y":2},"a":"a1","c":"c1","serializedGlobals":["o","a","c"]}}`
```html
<button>
  t
</button>
<b>
  a1c1
</b>
<ul>
  <li>
    a1c1
  </li>
</ul>
<div>
  a1c1
</div>
<div
  data-runs="2"
>
  b
</div>
<div
  data-runs="1"
>
  doc
</div>
<div
  data-runs="3"
/>
<div
  data-runs="2"
>
  docb
</div>
```
## Change
```
REMOVE: div:nth-of-type(5)::text("doca")
INSERT: div:nth-of-type(5)::text("docb")
UPDATE: div:nth-of-type(5)[data-runs] "1" => "2"
UPDATE: div:nth-of-type(4)[data-runs] "2" => "3"
REMOVE: div:nth-of-type(2)::text("a")
INSERT: div:nth-of-type(2)::text("b")
UPDATE: div:nth-of-type(2)[data-runs] "1" => "2"
```

# Update `{"$global":{"cspNonce":"patch","o":{"x":"b","y":2},"a":"a1","c":"c2","serializedGlobals":["o","a","c"]}}`
```html
<button>
  t
</button>
<b>
  a1c2
</b>
<ul>
  <li>
    a1c2
  </li>
</ul>
<div>
  a1c2
</div>
<div
  data-runs="2"
>
  b
</div>
<div
  data-runs="1"
>
  doc
</div>
<div
  data-runs="4"
/>
<div
  data-runs="2"
>
  docb
</div>
```
## Change
```
UPDATE: ul > li::text "a1c1" => "a1c2"
UPDATE: b::text "a1c1" => "a1c2"
REMOVE: div:nth-of-type(1)::text("a1c1")
INSERT: div:nth-of-type(1)::text("a1c2")
UPDATE: div:nth-of-type(4)[data-runs] "3" => "4"
```

# Update `{"$global":{"cspNonce":"patch","o":{"x":"b","y":2},"a":"a2","c":"c2","serializedGlobals":["o","a","c"]}}`
```html
<button>
  t
</button>
<b>
  a2c2
</b>
<ul>
  <li>
    a2c2
  </li>
</ul>
<div>
  a2c2
</div>
<div
  data-runs="2"
>
  b
</div>
<div
  data-runs="1"
>
  doc
</div>
<div
  data-runs="5"
/>
<div
  data-runs="2"
>
  docb
</div>
```
## Change
```
UPDATE: ul > li::text "a1c2" => "a2c2"
UPDATE: b::text "a1c2" => "a2c2"
REMOVE: div:nth-of-type(1)::text("a1c2")
INSERT: div:nth-of-type(1)::text("a2c2")
UPDATE: div:nth-of-type(4)[data-runs] "4" => "5"
```
