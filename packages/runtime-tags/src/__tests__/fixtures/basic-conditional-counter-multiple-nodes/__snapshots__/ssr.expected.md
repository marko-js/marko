# Write
```html
  <button class=inc></button><!--M_*1 #button/0--><button class=toggle></button><!--M_*1 #button/1--><!--M_[-->The count is <!>0<!--M_*2 #text/0--><!--M_]1 #text/2 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={show:!0,count:0},{_:_.a}]),"__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    />
    <!--M_*1 #button/0-->
    <button
      class="toggle"
    />
    <!--M_*1 #button/1-->
    <!--M_[-->
    The count is 
    <!---->
    0
    <!--M_*2 #text/0-->
    <!--M_]1 #text/2 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          show: !0,
          count: 0
        },
        {
          _: _.a
        }]),
        "__tests__/template.marko_0_show 1 __tests__/template.marko_0_count 1"
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
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/#text0
INSERT html/body/#comment3
INSERT html/body/#text1
INSERT html/body/#comment4
INSERT html/body/#comment5
INSERT html/body/script
INSERT html/body/script/#text
```