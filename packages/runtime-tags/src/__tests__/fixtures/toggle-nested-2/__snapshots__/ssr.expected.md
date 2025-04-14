# Write
```html
  <div><button id=outer></button><!--M_*1 #button/0--><!--M_[2--><button id=inner></button><!--M_*2 #button/0--><button id=count>0<!--M_*3 #text/1--></button><!--M_*3 #button/0--><!--M_|2 #text/1 3--><!--M_]1 #text/1--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*1 #button/0-->
      <!--M_[2-->
      <button
        id="inner"
      />
      <!--M_*2 #button/0-->
      <button
        id="count"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_|2 #text/1 3-->
      <!--M_]1 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.c={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.a={"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:count":0}},outer:!0,inner:!0,count:0,"ClosureScopes:count":_.e=new Set},_.a,_.b],_.b._=_.a,_.a._=_.c,(_.e).add(_.b),_.d),"__tests__/template.marko_2_count",3,"__tests__/template.marko_1_inner",2,"__tests__/template.marko_0_outer",1];M._.w()
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
INSERT html/body/div/button0
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/div/button1
INSERT html/body/div/#comment2
INSERT html/body/div/button2
INSERT html/body/div/button2/#text
INSERT html/body/div/button2/#comment
INSERT html/body/div/#comment3
INSERT html/body/div/#comment4
INSERT html/body/div/#comment5
INSERT html/body/script
INSERT html/body/script/#text
```