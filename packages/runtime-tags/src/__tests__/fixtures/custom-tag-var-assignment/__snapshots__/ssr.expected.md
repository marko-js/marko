# Write
```html
  <button class=inc-child>1<!--M_*1 #text/1--></button><!--M_*1 #button/0--><button class=inc-parent>1<!--M_*0 #text/2--></button><!--M_*0 #button/1--><button class=reset>reset</button><!--M_*0 #button/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/tags/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      class="inc-parent"
    >
      1
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*0 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/tags/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/tags/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/button0/#comment
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/button1/#comment
INSERT html/body/#comment1
INSERT html/body/button2
INSERT html/body/button2/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```