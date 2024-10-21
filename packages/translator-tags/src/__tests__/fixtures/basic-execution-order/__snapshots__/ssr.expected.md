# Write
  <button>hide</button><!--M_*0 #button/0-->hi<!--M_*1 #text/0--><!--M_|0 #text/1 1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:_.a={message:{text:"hi"},"#text/1(":_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"],"#text/1!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0",0];M._.w()</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M_*0 #button/0-->
    hi
    <!--M_*1 #text/0-->
    <!--M_|0 #text/1 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={message:{text:"hi"},"#text/1(":_._["packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_1_renderer"],"#text/1!":_.b={}},1:_.b},_.b._=_.a,_.c),0,"packages/translator-tags/src/__tests__/fixtures/basic-execution-order/template.marko_0",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/button0
inserted #document/html0/body1/button0/#text0
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/#text2
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/#comment4
inserted #document/html0/body1/script5
inserted #document/html0/body1/script5/#text0
```