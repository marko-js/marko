# Render
```html
<pre
  id="root"
>
  9; 0,0
	
</pre>
<pre
  id="outer"
>
  3; 0,0
	3; 1,0
	3; 2,0
	
</pre>
<pre
  id="inner"
>
  1; 0,0
	1; 0,1
	1; 0,2
	1; 1,0
	1; 1,1
	1; 1,2
	1; 2,0
	1; 2,1
	1; 2,2
	
</pre>
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT pre0, pre1, pre2, #comment0, #text0, #text1, #text2, #comment1, #comment2, #text3, #text4, #text5, #comment3, #comment4, #text6, #text7, #text8, #comment5, #comment6
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