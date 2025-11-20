# Write
```html
  <button id=multiplier>increase multiplier (<!>1<!--M_*1 #text/1-->)</button><!--M_*1 #button/0--><button id=count>increase count</button><!--M_*1 #button/2--><div>0<!--M_*1 #text/3--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{count:0,multiplier:1}]),"__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      id="multiplier"
    >
      increase multiplier (
      <!---->
      1
      <!--M_*1 #text/1-->
      )
    </button>
    <!--M_*1 #button/0-->
    <button
      id="count"
    >
      increase count
    </button>
    <!--M_*1 #button/2-->
    <div>
      0
      <!--M_*1 #text/3-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {
          count: 0,
          multiplier: 1
        }]),
        "__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"
      ];
      M._.w()
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
INSERT html/body/button0/#text0
INSERT html/body/button0/#comment0
INSERT html/body/button0/#text1
INSERT html/body/button0/#comment1
INSERT html/body/button0/#text2
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/div/#comment
INSERT html/body/script
INSERT html/body/script/#text
```