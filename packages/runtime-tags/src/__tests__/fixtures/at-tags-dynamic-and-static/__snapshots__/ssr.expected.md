# Write
```html
  a<!--M_*4 #text/0-->:<!>1<!--M_*4 #text/1-->b<!--M_*6 #text/0-->:<!>2<!--M_*6 #text/1-->other<script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0])]</script>
```

# Render End
```html
a
<!--M_*4 #text/0-->
:
<!---->
1
<!--M_*4 #text/1-->
b
<!--M_*6 #text/0-->
:
<!---->
2
<!--M_*6 #text/1-->
other
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0])]
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT #text0
INSERT #comment0
INSERT #text1
INSERT #comment1
INSERT #text2
INSERT #comment2
INSERT #text3
INSERT #comment3
INSERT #text4
INSERT #comment4
INSERT #text5
INSERT #comment5
INSERT #text6
INSERT script
INSERT script/#text
```