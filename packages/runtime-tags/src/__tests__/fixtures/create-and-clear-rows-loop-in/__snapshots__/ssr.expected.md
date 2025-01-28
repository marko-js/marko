# Write
```html
  <div><p>1<!--M_*2 #text/0-->: <!>a<!--M_*2 #text/1--></p><p>2<!--M_*3 #text/0-->: <!>b<!--M_*3 #text/1--></p><p>3<!--M_*4 #text/0-->: <!>c<!--M_*4 #text/1--></p><!--M_|1 #text/0 4 3 2--><p>1<!--M_*5 #text/0--></p><p>2<!--M_*6 #text/0--></p><p>3<!--M_*7 #text/0--></p><!--M_|1 #text/1 7 6 5--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.i={1:{"#text/0(":new Map(_.a=[["1",_.c={}],["2",_.d={}],["3",_.e={}]]),"#text/1(":new Map(_.b=[["1",_.f={}],["2",_.g={}],["3",_.h={}]])},2:_.c,3:_.d,4:_.e,5:_.f,6:_.g,7:_.h}),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <p>
        1
        <!--M_*2 #text/0-->
        : 
        <!---->
        a
        <!--M_*2 #text/1-->
      </p>
      <p>
        2
        <!--M_*3 #text/0-->
        : 
        <!---->
        b
        <!--M_*3 #text/1-->
      </p>
      <p>
        3
        <!--M_*4 #text/0-->
        : 
        <!---->
        c
        <!--M_*4 #text/1-->
      </p>
      <!--M_|1 #text/0 4 3 2-->
      <p>
        1
        <!--M_*5 #text/0-->
      </p>
      <p>
        2
        <!--M_*6 #text/0-->
      </p>
      <p>
        3
        <!--M_*7 #text/0-->
      </p>
      <!--M_|1 #text/1 7 6 5-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.i={1:{"#text/0(":new Map(_.a=[["1",_.c={}],["2",_.d={}],["3",_.e={}]]),"#text/1(":new Map(_.b=[["1",_.f={}],["2",_.g={}],["3",_.h={}]])},2:_.c,3:_.d,4:_.e,5:_.f,6:_.g,7:_.h}),0]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div
INSERT html/body/div/p0
INSERT html/body/div/p0/#text0
INSERT html/body/div/p0/#comment0
INSERT html/body/div/p0/#text1
INSERT html/body/div/p0/#comment1
INSERT html/body/div/p0/#text2
INSERT html/body/div/p0/#comment2
INSERT html/body/div/p1
INSERT html/body/div/p1/#text0
INSERT html/body/div/p1/#comment0
INSERT html/body/div/p1/#text1
INSERT html/body/div/p1/#comment1
INSERT html/body/div/p1/#text2
INSERT html/body/div/p1/#comment2
INSERT html/body/div/p2
INSERT html/body/div/p2/#text0
INSERT html/body/div/p2/#comment0
INSERT html/body/div/p2/#text1
INSERT html/body/div/p2/#comment1
INSERT html/body/div/p2/#text2
INSERT html/body/div/p2/#comment2
INSERT html/body/div/#comment0
INSERT html/body/div/p3
INSERT html/body/div/p3/#text
INSERT html/body/div/p3/#comment
INSERT html/body/div/p4
INSERT html/body/div/p4/#text
INSERT html/body/div/p4/#comment
INSERT html/body/div/p5
INSERT html/body/div/p5/#text
INSERT html/body/div/p5/#comment
INSERT html/body/div/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```