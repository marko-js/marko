# Write
```html
  <div><span>Hello<!--M_*1 #text/0--></span><!--M_|0 #text/0 1--><span></span><span></span></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:_.a={value:"Hello","#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.b={}},1:_.b},_.b._=_.a,_.c),0]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
        <!--M_*1 #text/0-->
      </span>
      <!--M_|0 #text/0 1-->
      <span />
      <span />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={value:"Hello","#text/0(":_._["__tests__/template.marko_1_renderer"],"#text/0!":_.b={}},1:_.b},_.b._=_.a,_.c),0]
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
INSERT html/body/div/span0
INSERT html/body/div/span0/#text
INSERT html/body/div/span0/#comment
INSERT html/body/div/#comment
INSERT html/body/div/span1
INSERT html/body/div/span2
INSERT html/body/script
INSERT html/body/script/#text
```