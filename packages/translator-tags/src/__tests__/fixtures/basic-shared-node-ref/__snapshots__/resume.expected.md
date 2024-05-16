# Render {}
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

```


# Render 
container.querySelector("#toggle").click()

```html
<html>
  <head />
  <body>
    <ul
      hidden=""
    >
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
#document/html0/body1/ul0: attr(hidden) null => ""
```


# Render 
container.querySelector("#toggle").click()

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
#document/html0/body1/ul0: attr(hidden) "" => null
```


# Render 
container.querySelector("#reverse").click()

```html
<html>
  <head />
  <body>
    <ul>
      <li>
        3
        <!--M*3 #text/0-->
      </li>
      <li>
        2
        <!--M*2 #text/0-->
      </li>
      <li>
        1
        <!--M*1 #text/0-->
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
removed #document/html0/body1/ul0/li1 after #document/html0/body1/ul0/li2
inserted #document/html0/body1/ul0/li1
removed #document/html0/body1/ul0/li0 after #document/html0/body1/ul0/li2
inserted #document/html0/body1/ul0/li0
```