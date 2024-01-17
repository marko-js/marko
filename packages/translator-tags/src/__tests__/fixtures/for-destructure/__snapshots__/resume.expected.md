# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M*1 #text/1-->
      </div>
      <!--M|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M*0 #button/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map([[0,j={}]])},1:j},j._=h,k),[0,"packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#add").click()

```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M*1 #text/1-->
      </div>
      <div>
        JavaScript: Java, but scriptier
      </div>
      <!--M|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M*0 #button/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map([[0,j={}]])},1:j},j._=h,k),[0,"packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/div1
```


# Render 
container.querySelector("#remove").click()

```html
<html>
  <head />
  <body>
    <div>
      <div>
        Marko
        <!--M*1 #text/0-->
        : 
        <!---->
        HTML Reimagined
        <!--M*1 #text/1-->
      </div>
      <!--M|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M*0 #button/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map([[0,j={}]])},1:j},j._=h,k),[0,"packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
removed div after #document/html0/body1/div0/div0
```


# Render 
container.querySelector("#remove").click()

```html
<html>
  <head />
  <body>
    <div>
      <!--M|0 #text/0 1-->
      <button
        id="add"
      >
        Add
      </button>
      <!--M*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M*0 #button/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map([[0,j={}]])},1:j},j._=h,k),[0,"packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#comment0 after div
inserted #document/html0/body1/div0/#comment0
removed div before #document/html0/body1/div0/#comment0
```


# Render 
container.querySelector("#add").click()

```html
<html>
  <head />
  <body>
    <div>
      <div>
        JavaScript: Java, but scriptier
      </div>
      <button
        id="add"
      >
        Add
      </button>
      <!--M*0 #button/1-->
      <button
        id="remove"
      >
        Remove
      </button>
      <!--M*0 #button/2-->
    </div>
    <script>
      (M$h=[]).push((b,s,h,j,k)=&gt;(k={0:h={items:[{name:"Marko",description:"HTML Reimagined"}],"#text/0(":new Map([[0,j={}]])},1:j},j._=h,k),[0,"packages/translator-tags/src/__tests__/fixtures/for-destructure/template.marko_0_items",])
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/div0
removed #comment before #document/html0/body1/div0/div0
```