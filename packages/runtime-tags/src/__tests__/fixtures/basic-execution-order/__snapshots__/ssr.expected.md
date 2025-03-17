# Write
```html
  <button>hide</button><!--M_*1 #button/0-->hi<!--M_*2 #text/0--><!--M_|1 #text/1 2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={1:_.a={message_text:"hi","#text/1(":0,"#text/1!":_.b={}},2:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_0"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <button>
      hide
    </button>
    <!--M_*1 #button/0-->
    hi
    <!--M_*2 #text/0-->
    <!--M_|1 #text/1 2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={1:_.a={message_text:"hi","#text/1(":0,"#text/1!":_.b={}},2:_.b},_.b._=_.a,_.c),1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment0
INSERT html/body/#text
INSERT html/body/#comment1
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```