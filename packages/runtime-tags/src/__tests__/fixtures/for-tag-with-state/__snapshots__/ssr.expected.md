# Write
```html
  <div>0: 1</div><div>1: 2</div><div>2: 3</div><div>0<!--M_*5 #text/0-->: <!>1<!--M_*5 #text/1--></div><div>1<!--M_*6 #text/0-->: <!>2<!--M_*6 #text/1--></div><div>2<!--M_*7 #text/0-->: <!>3<!--M_*7 #text/1--></div><!--M_|1 #text/1 7 6 5--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e={1:{"#text/1(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},5:_.b,6:_.c,7:_.d})]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      0: 1
    </div>
    <div>
      1: 2
    </div>
    <div>
      2: 3
    </div>
    <div>
      0
      <!--M_*5 #text/0-->
      : 
      <!---->
      1
      <!--M_*5 #text/1-->
    </div>
    <div>
      1
      <!--M_*6 #text/0-->
      : 
      <!---->
      2
      <!--M_*6 #text/1-->
    </div>
    <div>
      2
      <!--M_*7 #text/0-->
      : 
      <!---->
      3
      <!--M_*7 #text/1-->
    </div>
    <!--M_|1 #text/1 7 6 5-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={1:{"#text/1(":new Map(_.a=[[0,_.b={}],[1,_.c={}],[2,_.d={}]])},5:_.b,6:_.c,7:_.d})]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/div3
INSERT html/body/div3/#text0
INSERT html/body/div3/#comment0
INSERT html/body/div3/#text1
INSERT html/body/div3/#comment1
INSERT html/body/div3/#text2
INSERT html/body/div3/#comment2
INSERT html/body/div4
INSERT html/body/div4/#text0
INSERT html/body/div4/#comment0
INSERT html/body/div4/#text1
INSERT html/body/div4/#comment1
INSERT html/body/div4/#text2
INSERT html/body/div4/#comment2
INSERT html/body/div5
INSERT html/body/div5/#text0
INSERT html/body/div5/#comment0
INSERT html/body/div5/#text1
INSERT html/body/div5/#comment1
INSERT html/body/div5/#text2
INSERT html/body/div5/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```