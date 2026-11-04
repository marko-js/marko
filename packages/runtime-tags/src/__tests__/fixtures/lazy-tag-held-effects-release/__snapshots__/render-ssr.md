# Render
```html
<div
  id="log"
/>
```

# Update
```html
<div
  id="log"
>
  [page][page-after][grand-child][child][child-after][before-await][in-await][after-await]
</div>
```
## Change
```
INSERT: #log::text("[page]")
REMOVE: #log::text("[page]")
INSERT: #log::text("[page][page-after]")
REMOVE: #log::text("[page][page-after]")
INSERT: #log::text("[page][page-after][grand-child]")
REMOVE: #log::text("[page][page-after][grand-child]")
INSERT: #log::text("[page][page-after][grand-child][child]")
REMOVE: #log::text("[page][page-after][grand-child][child]")
INSERT: #log::text("[page][page-after][grand-child][child][child-after]")
REMOVE: #log::text("[page][page-after][grand-child][child][child-after]")
INSERT: #log::text("[page][page-after][grand-child][child][child-after][before-await]")
REMOVE: #log::text("[page][page-after][grand-child][child][child-after][before-await]")
INSERT: #log::text("[page][page-after][grand-child][child][child-after][before-await][in-await]")
REMOVE: #log::text("[page][page-after][grand-child][child][child-after][before-await][in-await]")
INSERT: #log::text("[page][page-after][grand-child][child][child-after][before-await][in-await][after-await]")
```
