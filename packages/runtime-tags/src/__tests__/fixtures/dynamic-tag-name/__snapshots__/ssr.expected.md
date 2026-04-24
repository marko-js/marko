# Write
```html
  <h2 class="a b"></h2><div class="a b">B </div>Body content<div class="a b">A </div><h2 class="a b"></h2><ab class="a b"></ab><hundefined class="a b"></hundefined><hundefined class="a b"></hundefined><a class="a b"></a><h1></h1><div></div><div></div><div></div>
```

# Render End
```html
<h2
  class="a b"
/>
<div
  class="a b"
>
  B 
</div>
Body content
<div
  class="a b"
>
  A 
</div>
<h2
  class="a b"
/>
<ab
  class="a b"
/>
<hundefined
  class="a b"
/>
<hundefined
  class="a b"
/>
<a
  class="a b"
/>
<h1 />
<div />
<div />
<div />
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT h20
INSERT div0
INSERT div0/#text
INSERT #text
INSERT div1
INSERT div1/#text
INSERT h21
INSERT ab
INSERT hundefined0
INSERT hundefined1
INSERT a
INSERT h1
INSERT div2
INSERT div3
INSERT div4
```