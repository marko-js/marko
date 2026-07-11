## t1-counter.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:5:29
      3 | \u003c/script>
      4 |
    > 5 | \u003cbutton id="like" on:click={() => likes++}>
        |                             ^ Unexpected token
      6 |   Likes: ${ likes }
      7 | \u003c/button>
      8 |
    
    at src/routes/+page.marko:5:29
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t1-counter.C0.r1/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:5:29
      3 | </script>
      4 |
    > 5 | <button id="like" on:click={() => likes++}>
        |                  
(passed 0/0 checks)

``` src/routes/+page.marko
<script>
  let likes = 0;
</script>

<button id="like" on:click={() => likes++}>
  Likes: ${ likes }
</button>
```

## t1-counter.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:9:19
       7 | \u003c/script>
       8 |
    >  9 | \u003cbutton id="like" on:click={handleClick}>
         |                   ^^^^^^^^ `on:click` is not a valid attribute, did you mean `onClick`?
      10 |   Likes: ${likes}
      11 | \u003c/button>
      12 |
    
    at src/routes/+page.marko:9:19
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t1-counter.C0.r2/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:9:19
       7 | </script>
       8 |
    >  9 | <button id="like" on:cli
(passed 0/0 checks)

``` src/routes/+page.marko
<script>
let likes = 0;

function handleClick() {
  likes++;
}
</script>

<button id="like" on:click={handleClick}>
  Likes: ${likes}
</button>
```

## t2-temperature.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:1:5
    > 1 | let celsius = 20;
        |     ^^^^^^^^^^^^ The [`\u003clet>` tag](https://markojs.com/docs/reference/core-tag#let) only supports the [`value=` attribute](https://markojs.com/docs/reference/language#shorthand-value) and its change handler.
      2 |
      3 | \u003cinput
      4 |   id="celsius"
    
    at src/routes/+page.marko:1:5
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t2-temperature.C0.r1/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:1:5
    > 1 | let cels
(passed 0/0 checks)

``` src/routes/+page.marko
let celsius = 20;

<input
  id="celsius"
  type="number"
  value=celsius
  on-input=(e) => {
    celsius = Number(e.target.value) || 0;
  }
/>

<div id="fahrenheit">
  ${celsius * 9 / 5 + 32}
</div>

<button id="warmer" on-click=() => {
  celsius++;
}>
  Warmer
</button>
```

## t2-temperature.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:21:19
      19 |       \u003cbutton
      20 |         id="warmer"
    > 21 |         on-click={() => { celsius++ }}
         |                   ^ Unexpected token
      22 |       >
      23 |         Warmer
      24 |       \u003c/button>
    at src/routes/+page.marko:25:5
      23 |         Warmer
      24 |       \u003c/button>
    > 25 |     \u003c/let>
         |     ^^^^^^ The closing "let" tag does not match the corresponding opening "body" tag
      26 |   \u003c/body>
      27 | \u003c/html>
      28 |
    
    at src/routes/+page.marko:21:19
    at src/routes/+page.marko:25:5
---server log---
Error:   
(passed 0/0 checks)

``` src/routes/+page.marko
<!DOCTYPE html>
<html>
  <head>
    <title>Temperature Converter</title>
  </head>
  <body>
    <let celsius = 20>
      <input
        id="celsius"
        type="number"
        value=celsius
        on-input=(e) => { celsius = Number(e.target.value) }
      />

      <div id="fahrenheit">
        ${celsius * 9 / 5 + 32}
      </div>

      <button
        id="warmer"
        on-click={() => { celsius++ }}
      >
        Warmer
      </button>
    </let>
  </body>
</html>
```

## t3-todos.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:27:20
      25 | >Add\u003c/button>
      26 |
    > 27 | {#if todos.length === 0}
         |                    ^ Mismatched group. A closing "}" character was found but it is not matched with a corresponding opening character.
      28 |   \u003cdiv id="empty">No todos yet\u003c/div>
      29 | {/if}
      30 |
    
    at src/routes/+page.marko:27:20
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t3-todos.C0.r1/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:27:20
      25 | >Add</
(passed 0/0 checks)

``` src/routes/+page.marko
<script>
let todos = [];
let newTodoText = '';

function addTodo() {
  const text = newTodoText.trim();
  if (text) {
    todos = [...todos, { text, done: false }];
    newTodoText = '';
  }
}
</script>

<input 
  id="new-todo" 
  type="text" 
  value=newTodoText
  on-input(e => {
    newTodoText = e.target.value;
  })
/>
<button 
  id="add"
  on-click(addTodo)
>Add</button>

{#if todos.length === 0}
  <div id="empty">No todos yet</div>
{/if}

{#if todos.length > 0}
  <ul id="list">
    {#each todos as todo, index}
      <li>
        <input 
          type="checkbox" 
          checked={todo.done}
          on-change(e => {
            todos[index].done = e.target.checked;
            todos = [...todos];
          })
        />
        {todo.text}
      </li>
    {/each}
  </ul>
{/if}

<div id="remaining">{todos.filter(t => !t.done).length} left</div>
```

## t3-todos.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:33:18
      31 |   \u003celse>
      32 |     \u003cul id="list">
    > 33 |       \u003cfor (todo of todos) key=todo.id>
         |                  ^ Unexpected token, expected ","
      34 |         \u003cli>
      35 |           \u003cinput
      36 |             type="checkbox"
    at src/routes/+page.marko:1:1
    > 1 | \u003cstate {
        | ^ Missing ending "state" tag
      2 |   todos: [],
      3 |   nextId: 0
      4 | }>
    
    at src/routes/+page.marko:33:18
    at src/routes/+page.marko:1:1
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1
(passed 0/0 checks)

``` src/routes/+page.marko
<state {
  todos: [],
  nextId: 0
}>

<div>
  <div>
    <input id="new-todo" type="text" />
    <button
      id="add"
      on-click=() => {
        const input = document.getElementById('new-todo')
        const text = input.value.trim()
        if (text) {
          todos.push({
            id: nextId++,
            text: text,
            done: false
          })
          input.value = ''
        }
      }
    >
      Add
    </button>
  </div>

  <if (todos.length === 0)>
    <div id="empty">No todos yet</div>
  </if>
  <else>
    <ul id="list">
      <for (todo of todos) key=todo.id>
        <li>
          <input
            type="checkbox"
            checked=todo.done
            on-change=() => {
              todo.done = !todo.done
            }
          />
          ${todo.text}
        </li>
      </for>
    </ul>
  </else>

  <div id="remaining">
    ${todos.filter(t => !t.done).length} left
  </div>
</div>
```

## t4-tabs.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/tags/tab-panel.marko:24:2
      22 | \u003c/div>
      23 |
    > 24 | \u003c@slot name="tab" label />
         |  ^^^^^ @tags must be nested within another element.
      25 |
    
    at src/tags/tab-panel.marko:24:2
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t4-tabs.C0.r1/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/tags/tab-panel.marko:24:2
      22 | </div>
      23 |
    > 24 | <@slot name="tab" label />
         |  ^^^^^ @tags must be nested within another element.
      25 |
  22 | </div>
  23 |
> 24 | <@sl
(passed 0/0 checks)

``` src/tags/tab-panel.marko
$ {
  let activeIndex = 0;
}

<div>
  <div role="tablist">
    <for|tab, i| of=input.tab>
      <button
        aria-selected=(i === activeIndex ? "true" : undefined)
        on-click() {
          activeIndex = i;
        }
      >
        ${tab.label}
      </button>
    </for>
  </div>
  
  <div id="panel">
    ${input.tab[activeIndex]?.renderBody()}
  </div>
</div>

<@slot name="tab" label />
```

## t4-tabs.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/tags/tab-panel.marko:6:17
      4 |       type="button"
      5 |       aria-selected=index === state.activeTab ? "true" : undefined
    > 6 |       on-click={() => {
        |                 ^ Unexpected token
      7 |         state.activeTab = index;
      8 |       }}
      9 |     >
    
    at src/tags/tab-panel.marko:6:17
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t4-tabs.C0.r2/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/tags/tab-panel.marko:6:17
      4 |       type="button"
      5 |       aria-selected=
(passed 0/0 checks)

``` src/tags/tab-panel.marko
<div role="tablist">
  <for|tab, index| of=input.tabs>
    <button
      type="button"
      aria-selected=index === state.activeTab ? "true" : undefined
      on-click={() => {
        state.activeTab = index;
      }}
    >
      ${tab.label}
    </button>
  </for>
</div>

<div id="panel">
  <for|tab, index| of=input.tabs>
    <if(index === state.activeTab)>
      <tab />
    </if>
  </for>
</div>

<script>
export default {
  onCreate() {
    this.state = {
      activeTab: 0
    };
  }
};
</script>
```

## t4-tabs.C1.r1
FAILED CHECKS: ssr: first tab content present | browser: first content visible | browser: second content visible after click
(passed 7/10 checks)

``` src/tags/tab-panel.marko
<let/activeIndex=0>
<const/tabs=input.tab || []>

<div role="tablist">
  <for|tab, i| of=tabs>
    <button
      aria-selected=(i === activeIndex && "true")
      onClick() { activeIndex = i }
    >
      ${tab.label}
    </button>
  </for>
</div>

<div id="panel">
  <if=tabs.length>
    <${tabs[activeIndex].content}/>
  </if>
</div>
```

## t5-await.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:4:13
      2 |
      3 | \u003ch1>Profile\u003c/h1>
    > 4 | \u003cawait(user from getUser())>
        |             ^ Unexpected token, expected ","
      5 |   Loading profile
      6 | \u003celse>
      7 |   \u003ch2 id="user-name">${user.name}\u003c/h2>
    
    at src/routes/+page.marko:4:13
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t5-await.C0.r1/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:4:13
      2 |
      3 | <h1>Profile</h1>
    > 4 | <await(user from getUser())
(passed 0/0 checks)

``` src/routes/+page.marko
import { getUser } from '../data.js'

<h1>Profile</h1>
<await(user from getUser())>
  Loading profile
<else>
  <h2 id="user-name">${user.name}</h2>
  <p id="user-role">${user.role}</p>
</else>
</await>
```

## t5-await.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+page.marko:5:8
      3 | \u003ch1>Profile\u003c/h1>
      4 |
    > 5 | \u003cawait(user) getUser()>
        |        ^^^^ Tag does not support arguments.
      6 |   \u003c@pending>
      7 |     \u003cdiv>Loading profile\u003c/div>
      8 |   \u003c/@pending>
    
    at src/routes/+page.marko:5:8
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t5-await.C0.r2/src/routes/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/+page.marko:5:8
      3 | <h1>Profile</h1>
      4 |
    > 5 | <await(user) getUser()>
        |    
(passed 0/0 checks)

``` src/routes/+page.marko
import { getUser } from "../data.js"

<h1>Profile</h1>

<await(user) getUser()>
  <@pending>
    <div>Loading profile</div>
  </@pending>
  <@fulfilled>
    <h2 id="user-name">${user.name}</h2>
    <p id="user-role">${user.role}</p>
  </@fulfilled>
</await>
```

## t6-layout.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+layout.marko:16:8
      14 |     \u003c/header>
      15 |     \u003cmain>
    > 16 |       \u003cslot />
         |        ^^^^ Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) `\u003cslot>`. Did you mean `\u003cset>`?
      17 |     \u003c/main>
      18 |     \u003cfooter id="site-footer">
      19 |       built with marko
    
    at src/routes/+layout.marko:16:8
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t6-layout.C0.r1/src/routes/+layout.marko
/home/user/experiment/runs/round1/apps/t6-lay
(passed 0/0 checks)

``` src/routes/+layout.marko
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Marko Site</title>
  </head>
  <body>
    <header id="site-header">
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer id="site-footer">
      built with marko
    </footer>
  </body>
</html>
```

``` src/routes/+page.marko
<h1>Home</h1>
<p>Welcome to this Marko site built with @marko/run file-based routing.</p>
```

``` src/routes/about/+page.marko
<h1>About</h1>
<p>This is a two-page site demonstrating shared layouts in Marko 6. Both pages use the same layout component to avoid duplication.</p>
```

## t6-layout.C0.r2
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/+layout.marko:8:4
       6 | \u003c/header>
       7 | \u003cmain>
    >  8 |   \u003cslot/>
         |    ^^^^ Unable to find entry point for [custom tag](https://markojs.com/docs/reference/custom-tag#relative-custom-tags) `\u003cslot>`. Did you mean `\u003cset>`?
       9 | \u003c/main>
      10 | \u003cfooter id="site-footer">built with marko\u003c/footer>
    
    at src/routes/+layout.marko:8:4
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t6-layout.C0.r2/src/routes/+layout.marko
/home/user/experiment/runs/round1/apps/t6-layout.C0.r2/src/routes/+page.mark
(passed 0/0 checks)

``` src/routes/+layout.marko
<header id="site-header">
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <slot/>
</main>
<footer id="site-footer">built with marko</footer>
```

``` src/routes/+page.marko
<h1>Home</h1>
<p>Welcome to our site built with Marko 6!</p>
```

``` src/routes/about/+page.marko
<h1>About</h1>
<p>This site demonstrates Marko 6 and @marko/run file-based routing with a shared layout component.</p>
```

## t7-products.C0.r1
FAILED CHECKS: page: product name {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /prod} | page: price format | page: not found text {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /prod} | api: 200 {404} | api: json content-type {text/html; charset=utf-8} | api: body matches product {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/} | api: 404 body {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/}
(passed 1/8 checks)

``` src/routes/products/[id].marko
import { getProduct } from "../../catalog.js";

export const params = {
  id: String,
};

export async function getData({ params }) {
  return {
    product: getProduct(params.id),
  };
}

<h1 id="product-name">
  ${data.product?.name ?? "Product not found"}
</h1>

<if(data.product)>
  <p id="product-price">${`$${data.product.price}`}</p>
</if>
```

``` src/routes/api/products/[id].js
import { getProduct } from "../../../catalog.js";

export const GET = async (req, res) => {
  const { id } = req.params;
  const product = getProduct(id);

  if (!product) {
    res.statusCode = 404;
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ error: "not found" }));
    return;
  }

  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(product));
};
```

## t7-products.C0.r2
FAILED CHECKS: page: product name {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /prod} | page: price format | page: not found text {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /prod} | api: 200 {404} | api: json content-type {text/html; charset=utf-8} | api: body matches product {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/} | api: 404 body {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /api/}
(passed 1/8 checks)

``` src/routes/products/[id].marko
import { getProduct } from "../../catalog.js";

const product = getProduct(id);

if (product) {
  <h1 id="product-name">${product.name}</h1>
  <p id="product-price">${"$" + product.price}</p>
} else {
  <h1 id="product-name">Product not found</h1>
}
```

``` src/routes/api/products/[id].js
import { getProduct } from "../../../catalog.js";

export async function get({ params }) {
  const product = getProduct(params.id);

  if (!product) {
    return new Response(JSON.stringify({ error: "not found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }

  return new Response(JSON.stringify(product), {
    headers: { "content-type": "application/json" },
  });
}
```

## t7-products.C1.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
Failed to load url ../../../catalog.js (resolved id: ../../../catalog.js) in /home/user/experiment/runs/round1/apps/t7-products.C1.r1/src/routes/api/products/$id/+handler.js. Does the file exist?
    
    at loadAndTransform (file:///home/user/experiment/node_modules/vite/dist/node/chunks/node.js:20087:31)
---server log---
error: Failed to load url ../../../catalog.js (resolved id: ../../../catalog.js) in /home/user/experiment/runs/round1/apps/t7-products.C1.r1/src/routes/api/products/$id/+handler.js. Does the file exist?[0m
      at loadAndTransform (file:///home/user/experiment/node_modules/vite/dist/node/chunks/node.js:20087:31)
7[1A[2K
(passed 0/0 checks)

``` src/routes/products/$id/+page.marko
import { getProduct } from "../../../catalog.js";

<const/product=getProduct($global.params.id)>

<if=product>
  <h1 id="product-name">${product.name}</h1>
  <p id="product-price">$${product.price}</p>
</if>
<else>
  <h1 id="product-name">Product not found</h1>
</else>
```

``` src/routes/api/products/$id/+handler.js
import { getProduct } from "../../../catalog.js";

export function GET(context) {
  const product = getProduct(context.params.id);

  if (product) {
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "content-type": "application/json" }
    });
  }

  return new Response(JSON.stringify({ error: "not found" }), {
    status: 404,
    headers: { "content-type": "application/json" }
  });
}
```

## t8-guestbook.C0.r1
FATAL(compile-or-runtime): Error
    
  
  
    
Internal Server Error
    
    at src/routes/guestbook/+page.marko:4:7
      2 |
      3 | \u003cul id="entries">
    > 4 |   \u003cif(entries.length === 0)>
        |       ^^^^^^^^^^^^^^^^^^^^ Tag does not support arguments.
      5 |     \u003cli>Be the first to sign!\u003c/li>
      6 |   \u003c/if>
      7 |   \u003cfor|entry| of=entries>
    
    at src/routes/guestbook/+page.marko:4:7
---server log---
Error:   Failed to scan for dependencies from entries:
  /home/user/experiment/runs/round1/apps/t8-guestbook.C0.r1/src/routes/guestbook/+page.marko

  Build failed with 1 error:

[plugin marko]
CompileError: 
    at src/routes/guestbook/+page.marko:4:7
      2 |
   
(passed 0/0 checks)

``` src/routes/guestbook/+page.marko
import { entries } from "../../store.js";

<ul id="entries">
  <if(entries.length === 0)>
    <li>Be the first to sign!</li>
  </if>
  <for|entry| of=entries>
    <li class="entry">${entry.message}</li>
  </for>
</ul>

<form method="post">
  <input type="text" name="message" />
  <button type="submit">Sign</button>
</form>
```

``` src/routes/guestbook/+server.js
import { addEntry } from "../../store.js";

export async function post(req) {
  const formData = await req.formData();
  const message = formData.get("message");
  
  if (message && message.trim()) {
    addEntry(message.trim());
  }
  
  return new Response(null, {
    status: 303,
    headers: {
      "Location": "/guestbook"
    }
  });
}
```

## t8-guestbook.C0.r2
FAILED CHECKS: get: empty prompt {<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /gues} | post: redirect status {404} | post: location back to guestbook | get: entry rendered { Error Cannot GET /guestbook } | get: entry li present | post: whitespace redirects {404} | get: whitespace not added {entries=0}
(passed 1/8 checks)

``` src/routes/guestbook.marko
import { entries } from "../store.js"

<form method="post" action="/guestbook">
  <input name="message" type="text" />
  <button type="submit">Sign</button>
</form>

<if(entries.length > 0)>
  <ul id="entries">
    <for|entry| of=entries>
      <li class="entry">${entry.message}</li>
    </for>
  </ul>
</if>
<else>
  Be the first to sign!
</else>
```

``` src/routes/guestbook.js
import { addEntry } from "../store.js";

export async function POST(req, res) {
  const formData = await req.formData();
  const message = formData.get("message");
  
  if (message && message.trim()) {
    addEntry(message);
  }
  
  res.writeHead(302, { 'Location': '/guestbook' });
  res.end();
}
```
