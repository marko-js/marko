# Render
```html
<div
  id="log"
>
  [page][page-after]
</div>
```

# Update
```html
<div
  id="log"
>
  [page][page-after][child][child-after]
</div>
```
## Change
```
INSERT: #log::text("[page][page-after][child]")
REMOVE: #log::text("[page][page-after]")
REMOVE: #log::text("[page][page-after][child]")
INSERT: #log::text("[page][page-after][child][child-after]")
```

# Update
```html
<div
  id="log"
>
  [page][page-after][child][child-after][before-await][after-await]
</div>
```
## Change
```
INSERT: #log::text("[page][page-after][child][child-after][before-await]")
REMOVE: #log::text("[page][page-after][child][child-after]")
REMOVE: #log::text("[page][page-after][child][child-after][before-await]")
INSERT: #log::text("[page][page-after][child][child-after][before-await][after-await]")
```

# Update
```html
<div
  id="log"
>
  [page][page-after][child][child-after][before-await][after-await][grand-child]
</div>
```
## Change
```
REMOVE: #log::text("[page][page-after][child][child-after][before-await][after-await]")
INSERT: #log::text("[page][page-after][child][child-after][before-await][after-await][grand-child]")
```

# Update
```html
<div
  id="log"
>
  [page][page-after][child][child-after][before-await][after-await][grand-child][in-await]
</div>
```
## Change
```
REMOVE: #log::text("[page][page-after][child][child-after][before-await][after-await][grand-child]")
INSERT: #log::text("[page][page-after][child][child-after][before-await][after-await][grand-child][in-await]")
```
