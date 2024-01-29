# Write
  <ul><li>1<!M*1 #text/0></li><li>2<!M*2 #text/0></li><li>3<!M*3 #text/0></li><!M|0 #ul/0 1,2,3></ul><!M*0 #ul/0><button id=toggle>Toggle</button><!M*0 #button/1><button id=reverse>Reverse</button><!M*0 #button/2><script>(M$h=[]).push((b,s,h,j,k,m,o)=>(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])</script>


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
      (M$h=[]).push((b,s,h,j,k,m,o)=&gt;(o={0:h={open:!0,list:[1,2,3],"#ul/0(":new Map([[1,j={}],[2,k={}],[3,m={}]])},1:j,2:k,3:m},j._=k._=m._=h,o),[0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_list",0,"packages/translator-tags/src/__tests__/fixtures/basic-shared-node-ref/template.marko_0_open",])
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