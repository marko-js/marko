# Write
```html
  <ul><li>1<!--M_*1 #text/0--></li><li>2<!--M_*2 #text/0--></li><li>3<!--M_*3 #text/0--></li><!--M_|0 #ul/0 3 2 1--></ul><!--M_*0 #ul/0--><button id=toggle>Toggle</button><!--M_*0 #button/1--><button id=reverse>Reverse</button><!--M_*0 #button/2--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M_*1 #text/0-->
      </li>
      <li>
        2
        <!--M_*2 #text/0-->
      </li>
      <li>
        3
        <!--M_*3 #text/0-->
      </li>
      <!--M_|0 #ul/0 3 2 1-->
    </ul>
    <!--M_*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M_*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M_*0 #button/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={}],[2,_.c={}],[3,_.d={}]])},1:_.b,2:_.c,3:_.d}),0,"__tests__/template.marko_0_list",0,"__tests__/template.marko_0_open",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/ul
INSERT html/body/ul/li0
INSERT html/body/ul/li0/#text
INSERT html/body/ul/li0/#comment
INSERT html/body/ul/li1
INSERT html/body/ul/li1/#text
INSERT html/body/ul/li1/#comment
INSERT html/body/ul/li2
INSERT html/body/ul/li2/#text
INSERT html/body/ul/li2/#comment
INSERT html/body/ul/#comment
INSERT html/body/#comment0
INSERT html/body/button0
INSERT html/body/button0/#text
INSERT html/body/#comment1
INSERT html/body/button1
INSERT html/body/button1/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```