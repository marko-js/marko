# Write
```html
  <div><div>Marko<!--M_*2 #text/0-->: <!>HTML Reimagined<!--M_*2 #text/1--></div><!--M_|1 #text/0 2--><button id=add>Add</button><!--M_*1 #button/1--><button id=remove>Remove</button><!--M_*1 #button/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.c=[0,{"LoopScopeMap:#text/0":new Map(_.a=[[0,_.b={}]]),items:[{name:"Marko",description:"HTML Reimagined"}]},_.b]),"__tests__/template.marko_0_items",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M_*2 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M_*2 #text/1-->
      </div>
      <!--M_|1 #text/0 2-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M_*1 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M_*1 #button/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"LoopScopeMap:#text/0":new Map(_.a=[[0,_.b={}]]),items:[{name:"Marko",description:"HTML Reimagined"}]},_.b]),"__tests__/template.marko_0_items",1];M._.w()
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
INSERT html/body/div/div
INSERT html/body/div/div/#text0
INSERT html/body/div/div/#comment0
INSERT html/body/div/div/#text1
INSERT html/body/div/div/#comment1
INSERT html/body/div/div/#text2
INSERT html/body/div/div/#comment2
INSERT html/body/div/#comment0
INSERT html/body/div/button0
INSERT html/body/div/button0/#text
INSERT html/body/div/#comment1
INSERT html/body/div/button1
INSERT html/body/div/button1/#text
INSERT html/body/div/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```