# Write
```html
  <div></div><!--M_*3 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,2,{input_option:_.a={content:_.c={},*[Symbol.iterator](){yield this}}}],_.a.content=_._["__tests__/template.marko_1_content"](_.c),_.b),"__tests__/tags/child.marko_0_input_option 3"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div />
    <!--M_*3 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, 2,
        {
          input_option: _.a = {
            content: _.c = {},
            *[Symbol.iterator]()
            {
              yield this
            }
          }
        }], _.a.content = _._[
          "__tests__/template.marko_1_content"
          ](_.c), _.b),
        "__tests__/tags/child.marko_0_input_option 3"
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
INSERT html/body/div
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```