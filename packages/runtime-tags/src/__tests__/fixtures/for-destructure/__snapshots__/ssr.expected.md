# Write
```html
  <div><div>Marko<!--M_*2 #text/0-->: <!>HTML Reimagined<!--M_*2 #text/1--></div><!--M_|1 #text/0 2--><button id=add>Add</button><!--M_*1 #button/1--><button id=remove>Remove</button><!--M_*1 #button/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{items:[{name:"Marko",description:"HTML Reimagined"}]}]),"__tests__/template.marko_0_items 1"];M._.w()</script>
```

# Render End
```html
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
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      items: [
      {
        name: "Marko",
        description: "HTML Reimagined"
      }]
    }]),
    "__tests__/template.marko_0_items 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT #document/html
INSERT #document/html/head
INSERT #document/html/body
INSERT div
INSERT div/div
INSERT div/div/#text0
INSERT div/div/#comment0
INSERT div/div/#text1
INSERT div/div/#comment1
INSERT div/div/#text2
INSERT div/div/#comment2
INSERT div/#comment0
INSERT div/button0
INSERT div/button0/#text
INSERT div/#comment1
INSERT div/button1
INSERT div/button1/#text
INSERT div/#comment2
INSERT script
INSERT script/#text
```