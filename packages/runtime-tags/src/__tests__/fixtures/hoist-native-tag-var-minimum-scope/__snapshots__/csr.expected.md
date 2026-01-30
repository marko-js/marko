# Render
```html
<pre
  id="root"
>
  9; 0, 0
	
</pre>
<pre
  id="outer"
>
  3; 0, 0
	3; 1, 0
	3; 2, 0
	
</pre>
<pre
  id="inner"
>
  1; 0, 0
	1; 0, 1
	1; 0, 2
	1; 1, 0
	1; 1, 1
	1; 1, 2
	1; 2, 0
	1; 2, 1
	1; 2, 2
	
</pre>
<!---->
<div
  class="0, 0"
/>
<div
  class="0, 1"
/>
<div
  class="0, 2"
/>
<!---->
<!---->
<div
  class="1, 0"
/>
<div
  class="1, 1"
/>
<div
  class="1, 2"
/>
<!---->
<!---->
<div
  class="2, 0"
/>
<div
  class="2, 1"
/>
<div
  class="2, 2"
/>
<!---->
<!---->
```

# Mutations
```
INSERT pre0, pre1, pre2, #comment0, div0, div1, div2, #comment1, #comment2, div3, div4, div5, #comment3, #comment4, div6, div7, div8, #comment5, #comment6
INSERT pre0/#text
INSERT #text
REMOVE #text in pre1
INSERT #text
REMOVE #text in pre1
INSERT pre1/#text
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT #text
REMOVE #text in pre2
INSERT pre2/#text
```