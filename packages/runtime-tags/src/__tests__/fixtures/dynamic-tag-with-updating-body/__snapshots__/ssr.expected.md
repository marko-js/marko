# Write
```html
  <div><button id=count>0<!--M_*3 #text/1--></button><!--M_*3 #button/0--><!--M_$3--></div><!--M_|0 #text/0 1--><button id=changeTag></button><!--M_*0 #button/1--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="count"
      >
        0
        <!--M_*3 #text/1-->
      </button>
      <!--M_*3 #button/0-->
      <!--M_$3-->
    </div>
    <!--M_|0 #text/0 1-->
    <button
      id="changeTag"
    />
    <!--M_*0 #button/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:{tagName:"div","#text/0!":_.a={},"#text/0(":"div"},1:_.a,2:{"#childScope/0":_.b={count:0}},3:_.b}),3,"__tests__/tags/counter.marko_0_count",0,"__tests__/template.marko_0_tagName",0];M._.w()
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
INSERT html/body/div/button
INSERT html/body/div/button/#text
INSERT html/body/div/button/#comment
INSERT html/body/div/#comment0
INSERT html/body/div/#comment1
INSERT html/body/#comment0
INSERT html/body/button
INSERT html/body/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```