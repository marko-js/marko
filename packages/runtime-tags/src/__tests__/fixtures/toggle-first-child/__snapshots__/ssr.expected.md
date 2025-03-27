# Write
```html
  <div><span>Hello<!--M_*2 #text/0--></span><!--M_|1 #text/0 2--><span></span><span></span></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,_.a={value:"Hello","ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},_.b],_.b._=_.a,_.c)]</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <span>
        Hello
        <!--M_*2 #text/0-->
      </span>
      <!--M_|1 #text/0 2-->
      <span />
      <span />
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={value:"Hello","ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={}},_.b],_.b._=_.a,_.c)]
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