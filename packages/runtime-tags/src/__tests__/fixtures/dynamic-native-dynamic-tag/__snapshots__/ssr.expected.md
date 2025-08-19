# Write
```html
  <span class=A><!--M_[3-->body content<!--M_]2 #span/0--></span><!--M_'1 #text/0 2--><button></button><!--M_*1 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"ConditionalScope:#text/0":_.a={"ConditionalScope:#span/0":_.b={},"ConditionalRenderer:#span/0":"__tests__/template.marko_1_renderer"},"ConditionalRenderer:#text/0":"span",tagName:"span",className:"A"},_.a,_.b]),"__tests__/template.marko_0_tagName",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span
      class="A"
    >
      <!--M_[3-->
      body content
      <!--M_]2 #span/0-->
    </span>
    <!--M_'1 #text/0 2-->
    <button />
    <!--M_*1 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.c = [0,
        {
          "ConditionalScope:#text/0": _.a = {
            "ConditionalScope:#span/0": _.b = {},
            "ConditionalRenderer:#span/0": "__tests__/template.marko_1_renderer"
          },
          "ConditionalRenderer:#text/0": "span",
          tagName: "span",
          className: "A"
        }, _.a, _.b]),
        "__tests__/template.marko_0_tagName",
        1
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
INSERT html/body/span
INSERT html/body/span/#comment0
INSERT html/body/span/#text
INSERT html/body/span/#comment1
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```