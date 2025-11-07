# Write
```html
  <span class=A><!--M_[-->body content<!--M_]2 #span/0 3--></span><!--M_'1 #text/0 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.c={"ConditionalRenderer:#text/0":"span",tagName:"span"},{"EventAttributes:#span/0":_.a={},"ConditionalRenderer:#span/0":"__tests__/template.marko_1_content","#Renderer":"span"}],_.a.click=_._["__tests__/template.marko_0/onClick"](_.c),_.b),"_dynamicTagScript",2];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      <!--M_[-->
      body content
      <!--M_]2 #span/0 3-->
    </span>
    <!--M_'1 #text/0 2-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.c = {
        "ConditionalRenderer:#text/0": "span",
        tagName: "span"
      },
      {
        "EventAttributes:#span/0": _.a = {},
        "ConditionalRenderer:#span/0": "__tests__/template.marko_1_content",
        "#Renderer": "span"
      }], _.a.click = _._[
        "__tests__/template.marko_0/onClick"
        ](_.c), _.b), "_dynamicTagScript", 2];
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
INSERT html/body/span
INSERT html/body/span/#comment0
INSERT html/body/span/#text
INSERT html/body/span/#comment1
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```