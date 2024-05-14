# Write
  <ul><li>1<!M*1 #text/0></li><li>2<!M*2 #text/0></li><li>3<!M*3 #text/0></li><!M|0 #ul/0 1,2,3></ul><!M*0 #ul/0><button id=toggle>Toggle</button><!M*0 #button/1><button id=reverse>Reverse</button><!M*0 #button/2><script>(M$h=[]).push(_=>(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={"#scope":1}],[2,_.c={"#scope":2}],[3,_.d={"#scope":3}]]),"#scope":0},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])</script>


# Render "End"
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M*1 #text/0-->
      </li>
      <li>
        2
        <!--M*2 #text/0-->
      </li>
      <li>
        3
        <!--M*3 #text/0-->
      </li>
      <!--M|0 #ul/0 1,2,3-->
    </ul>
    <!--M*0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M*0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M*0 #button/2-->
    <script>
      (M$h=[]).push(_=&gt;(_.e={0:{open:!0,list:[1,2,3],"#ul/0(":new Map(_.a=[[1,_.b={"#scope":1}],[2,_.c={"#scope":2}],[3,_.d={"#scope":3}]]),"#scope":0},1:_.b,2:_.c,3:_.d}),[0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0
inserted #document/html0/head0
inserted #document/html0/body1
inserted #document/html0/body1/ul0
inserted #document/html0/body1/ul0/li0
inserted #document/html0/body1/ul0/li0/#text0
inserted #document/html0/body1/ul0/li0/#comment1
inserted #document/html0/body1/ul0/li1
inserted #document/html0/body1/ul0/li1/#text0
inserted #document/html0/body1/ul0/li1/#comment1
inserted #document/html0/body1/ul0/li2
inserted #document/html0/body1/ul0/li2/#text0
inserted #document/html0/body1/ul0/li2/#comment1
inserted #document/html0/body1/ul0/#comment3
inserted #document/html0/body1/#comment1
inserted #document/html0/body1/button2
inserted #document/html0/body1/button2/#text0
inserted #document/html0/body1/#comment3
inserted #document/html0/body1/button4
inserted #document/html0/body1/button4/#text0
inserted #document/html0/body1/#comment5
inserted #document/html0/body1/script6
inserted #document/html0/body1/script6/#text0
```