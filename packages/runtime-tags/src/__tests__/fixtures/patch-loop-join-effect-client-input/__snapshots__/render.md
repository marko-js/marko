# Render `{"x":"a","items":["p"]}`
```html
<p>
  ap
</p>
<div>
  s:pa
</div>
<p>
  m0p
</p>
<div>
  s:pm0
</div>
<button
  class="n"
>
  +
</button>
```

# Update `{"x":"c","items":["r","q","s"]}`
```html
<p>
  cr
</p>
<div>
  s:rc
</div>
<p>
  cq
</p>
<div>
  s:qc
</div>
<p>
  cs
</p>
<div>
  s:sc
</div>
<p>
  m0r
</p>
<div>
  s:rm0
</div>
<p>
  m0q
</p>
<div>
  s:qm0
</div>
<p>
  m0s
</p>
<div>
  s:sm0
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "ap" => "cr"
INSERT: div:nth-of-type(1) + :is(p, div)
INSERT: div:nth-of-type(2) + :is(p, div)
INSERT: div:nth-of-type(4) + :is(p, div)
INSERT: div:nth-of-type(5) + :is(p, div)
UPDATE: p:nth-of-type(4)::text "m0p" => "m0r"
UPDATE: p:nth-of-type(5)::text " " => "m0q"
UPDATE: p:nth-of-type(6)::text " " => "m0s"
REMOVE: div:nth-of-type(1)::text("s:pa")
INSERT: div:nth-of-type(1)::text("s:rc")
INSERT: div:nth-of-type(2)::text("s:qc")
INSERT: div:nth-of-type(3)::text("s:sc")
REMOVE: div:nth-of-type(4)::text("s:pm0")
INSERT: div:nth-of-type(4)::text("s:rm0")
REMOVE: div:nth-of-type(4)::text("s:rm0")
INSERT: div:nth-of-type(4)::text("s:rm0")
INSERT: div:nth-of-type(5)::text("s:qm0")
INSERT: div:nth-of-type(6)::text("s:sm0")
```

# Update
```js
d.querySelector("button.n").click();
```
```html
<p>
  cr
</p>
<div>
  s:rc
</div>
<p>
  cq
</p>
<div>
  s:qc
</div>
<p>
  cs
</p>
<div>
  s:sc
</div>
<p>
  m1r
</p>
<div>
  s:rm1
</div>
<p>
  m1q
</p>
<div>
  s:qm1
</div>
<p>
  m1s
</p>
<div>
  s:sm1
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(4)::text "m0r" => "m1r"
UPDATE: p:nth-of-type(5)::text "m0q" => "m1q"
UPDATE: p:nth-of-type(6)::text "m0s" => "m1s"
REMOVE: div:nth-of-type(4)::text("s:rm0")
INSERT: div:nth-of-type(4)::text("s:rm1")
REMOVE: div:nth-of-type(5)::text("s:qm0")
INSERT: div:nth-of-type(5)::text("s:qm1")
REMOVE: div:nth-of-type(6)::text("s:sm0")
INSERT: div:nth-of-type(6)::text("s:sm1")
```

# Update `{"x":"e","items":["u","q","s","t"]}`
```html
<p>
  eu
</p>
<div>
  s:ue
</div>
<p>
  eq
</p>
<div>
  s:qe
</div>
<p>
  es
</p>
<div>
  s:se
</div>
<p>
  et
</p>
<div>
  s:te
</div>
<p>
  m1u
</p>
<div>
  s:um1
</div>
<p>
  m1q
</p>
<div>
  s:qm1
</div>
<p>
  m1s
</p>
<div>
  s:sm1
</div>
<p>
  m1t
</p>
<div>
  s:tm1
</div>
<button
  class="n"
>
  +
</button>
```
## Change
```
UPDATE: p:nth-of-type(1)::text "cr" => "eu"
UPDATE: p:nth-of-type(2)::text "cq" => "eq"
UPDATE: p:nth-of-type(3)::text "cs" => "es"
INSERT: div:nth-of-type(3) + :is(p, div)
INSERT: div:nth-of-type(7) + :is(p, div)
UPDATE: p:nth-of-type(5)::text "m1r" => "m1u"
UPDATE: p:nth-of-type(8)::text " " => "m1t"
REMOVE: div:nth-of-type(1)::text("s:rc")
INSERT: div:nth-of-type(1)::text("s:ue")
REMOVE: div:nth-of-type(2)::text("s:qc")
INSERT: div:nth-of-type(2)::text("s:qe")
REMOVE: div:nth-of-type(3)::text("s:sc")
INSERT: div:nth-of-type(3)::text("s:se")
INSERT: div:nth-of-type(4)::text("s:te")
REMOVE: div:nth-of-type(5)::text("s:rm1")
INSERT: div:nth-of-type(5)::text("s:um1")
REMOVE: div:nth-of-type(5)::text("s:um1")
INSERT: div:nth-of-type(5)::text("s:um1")
REMOVE: div:nth-of-type(6)::text("s:qm1")
INSERT: div:nth-of-type(6)::text("s:qm1")
REMOVE: div:nth-of-type(7)::text("s:sm1")
INSERT: div:nth-of-type(7)::text("s:sm1")
INSERT: div:nth-of-type(8)::text("s:tm1")
```
