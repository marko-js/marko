# Write
```html
  <button>0<!--M_*2 #text/1--> <!>0<!--M_*2 #text/2--></button><!--M_*2 #button/0--><button>0<!--M_*3 #text/1--> <!>0<!--M_*3 #text/2--></button><!--M_*3 #button/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.d={clickCount:0,"#childScope/0":_.a={},"#childScope/1":_.b={}},_.a,_.b],_.a.onClick=_._["__tests__/template.marko_0/onClick"](_.d),_.b.onClick=_._["__tests__/template.marko_0/onClick2"](_.d),_.c),"__tests__/tags/my-button.marko_0_onClick 2 3"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      0
      <!--M_*2 #text/1-->
       
      <!---->
      0
      <!--M_*2 #text/2-->
    </button>
    <!--M_*2 #button/0-->
    <button>
      0
      <!--M_*3 #text/1-->
       
      <!---->
      0
      <!--M_*3 #text/2-->
    </button>
    <!--M_*3 #button/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0, _.d = {
          clickCount: 0,
          "#childScope/0": _.a = {},
          "#childScope/1": _.b = {}
        }, _.a, _.b], _.a.onClick = _._[
          "__tests__/template.marko_0/onClick"
          ](_.d), _.b.onClick = _._[
          "__tests__/template.marko_0/onClick2"
          ](_.d), _.c),
        "__tests__/tags/my-button.marko_0_onClick 2 3"
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
INSERT html/body/button0/#comment2
INSERT html/body/#comment0
INSERT html/body/button1
INSERT html/body/button1/#text0
INSERT html/body/button1/#comment0
INSERT html/body/button1/#text1
INSERT html/body/button1/#comment1
INSERT html/body/button1/#text2
INSERT html/body/button1/#comment2
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```