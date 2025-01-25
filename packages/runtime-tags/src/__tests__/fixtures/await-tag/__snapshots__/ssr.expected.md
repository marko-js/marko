# Write
```html
  <div>Got: a <!>0<!--M_*1 #text/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b={0:_.a={count:0},1:{_:_.a}}),1,"__tests__/template.marko_1_count/subscriber"];M._.w()</script>
```

# Write
```html
  <script>M._.r.push(_=>(_.c={2:{_:_.a}}))</script>
```

# Write
```html
  Got: b <!>0<!--M_*3 #text/1-->Got: c <!>0<!--M_*2 #text/1--><button>Inc</button><!--M_*0 #button/0--></div><script>M._.r.push(_=>(_.d={3:{_:_.a}}),3,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_3_count/subscriber",0,"__tests__/template.marko_0_count",0);M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      Got: a 
      <!---->
      0
      <!--M_*1 #text/1-->
      <script>
        WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.b={0:_.a={count:0},1:{_:_.a}}),1,"__tests__/template.marko_1_count/subscriber"];M._.w()
      </script>
      <script>
        M._.r.push(_=&gt;(_.c={2:{_:_.a}}))
      </script>
      Got: b 
      <!---->
      0
      <!--M_*3 #text/1-->
      Got: c 
      <!---->
      0
      <!--M_*2 #text/1-->
      <button>
        Inc
      </button>
      <!--M_*0 #button/0-->
    </div>
    <script>
      M._.r.push(_=&gt;(_.d={3:{_:_.a}}),3,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_3_count/subscriber",0,"__tests__/template.marko_0_count",0);M._.w()
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
INSERT html/body/div/#text0
INSERT html/body/div/#comment0
INSERT html/body/div/#text1
INSERT html/body/div/#comment1
INSERT html/body/div/script0
INSERT html/body/div/script0/#text
INSERT html/body/div/script1
INSERT html/body/div/script1/#text
INSERT html/body/div/#text2
INSERT html/body/div/#comment2
INSERT html/body/div/#text3
INSERT html/body/div/#comment3
INSERT html/body/div/#text4
INSERT html/body/div/#comment4
INSERT html/body/div/#text5
INSERT html/body/div/#comment5
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/#comment6
INSERT html/body/script
INSERT html/body/script/#text
```