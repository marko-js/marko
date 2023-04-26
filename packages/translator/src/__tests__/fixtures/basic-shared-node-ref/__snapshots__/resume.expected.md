# Render {}
```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M#1 #text/0-->
      </li>
      <li>
        2
        <!--M#2 #text/0-->
      </li>
      <li>
        3
        <!--M#3 #text/0-->
      </li>
      <!--M|0 #ul/0 1,2,3-->
    </ul>
    <!--M#0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M#0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M#0 #button/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#toggle").click();

```html
<html>
  <head />
  <body>
    <ul
      hidden=""
    >
      <li>
        1
        <!--M#1 #text/0-->
      </li>
      <li>
        2
        <!--M#2 #text/0-->
      </li>
      <li>
        3
        <!--M#3 #text/0-->
      </li>
      <!--M|0 #ul/0 1,2,3-->
    </ul>
    <!--M#0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M#0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M#0 #button/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0: attr(hidden) null => ""
```


# Render 
container.querySelector("#toggle").click();

```html
<html>
  <head />
  <body>
    <ul>
      <li>
        1
        <!--M#1 #text/0-->
      </li>
      <li>
        2
        <!--M#2 #text/0-->
      </li>
      <li>
        3
        <!--M#3 #text/0-->
      </li>
      <!--M|0 #ul/0 1,2,3-->
    </ul>
    <!--M#0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M#0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M#0 #button/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/ul0: attr(hidden) "" => null
```


# Render 
container.querySelector("#reverse").click();

```html
<html>
  <head />
  <body>
    <ul>
      <li>
        3
        <!--M#3 #text/0-->
      </li>
      <li>
        2
        <!--M#2 #text/0-->
      </li>
      <li>
        1
        <!--M#1 #text/0-->
      </li>
      <!--M|0 #ul/0 1,2,3-->
    </ul>
    <!--M#0 #ul/0-->
    <button
      id="toggle"
    >
      Toggle
    </button>
    <!--M#0 #button/1-->
    <button
      id="reverse"
    >
      Reverse
    </button>
    <!--M#0 #button/2-->
    <script>
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
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