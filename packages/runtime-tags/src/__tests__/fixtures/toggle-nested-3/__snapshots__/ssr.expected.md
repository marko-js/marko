# Write
```html
  <div><button id=outer></button><!--M_*1 #button/0--><!--M_[2--><button id=inner></button><!--M_*2 #button/0--><button id=count>0<!--M_*3 #text/1--></button><!--M_*3 #button/0--><!--M_|2 #text/1 3--><!--M_]1 #text/1--> hello</div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()</script>
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
       hello
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={1:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},2:_.b,3:_.c},_.b._=_.a,_.c._=_.b,_.d),3,"__tests__/template.marko_2_count/subscriber",3,"__tests__/template.marko_2_count",2,"__tests__/template.marko_1_inner",1,"__tests__/template.marko_0_outer",0];M._.w()
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
INSERT html/body/div/#text
INSERT html/body/script
INSERT html/body/script/#text
```