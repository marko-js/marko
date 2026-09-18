# Comptime in Marko

Comptime runs parts of your template while Marko compiles it. You can prepare
values, choose which tags to include, and repeat markup before the page runs.
The result is an ordinary Marko template with those decisions already made.

This guide describes the implementation in this branch. The full design is in
[comptime.md](./comptime.md).

## Why use it?

Some decisions are known before anyone visits a page. A site might have a fixed
navigation menu, a feature flag, or a page layout from a CMS.

Comptime lets you express those decisions in Marko. It can remove unused sections
and save work during rendering. Normal Marko state and event handlers still work
in the markup that remains.

Use regular Marko expressions for values that change per request or interaction.
Changing a comptime value requires compiling again.

## Prepare a value

Put `comptime` before a JavaScript statement at the top level of your template:

```marko
comptime const title = "hello marko".toUpperCase();

<h1>${title}</h1>
```

Marko runs `toUpperCase()` while compiling. This example produces the same markup
as writing `<h1>HELLO MARKO</h1>` directly. Unlike `static`, `comptime` runs during
compilation instead of when the generated module loads.

Use `comptime import` to load data or helpers for that work:

```marko
comptime import settings from "./settings.json";
comptime const title = settings.siteName.toUpperCase();

<h1>${title}</h1>
```

A regular `import` cannot be read by comptime code.

## Choose markup

`<-if>` checks its condition while compiling:

```marko
comptime const showPreview = false;

<-if=showPreview>
  <aside>Preview version</aside>
</-if>
```

Here, the entire `<aside>` disappears from the compiled template. There is no
condition left to check when the page runs.

There is no `<-else>`. Use another `<-if>` with the opposite condition when needed.
`<-const/name=value/>` creates a local comptime value for use later in the same
body.

## Repeat markup

`<-for>` creates a copy of its body for each item while compiling:

```marko
comptime const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" }
];

<nav>
  <-for|link| of=links>
    <a href=link.href>${link.label}</a>
  </-for>
</nav>
```

This produces the same markup as:

```marko
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
```

Each iteration adds another copy of the body. For a large list with the same
layout for every item, consider a regular `<for>` over comptime data. That keeps
one loop body in the generated code.

## Expand a custom tag

A `-` prefix also works with custom Marko tags. Suppose
`tags/hero/index.marko` contains:

```marko
<section class="hero">
  <h1>${input.title}</h1>
  <${input.content}/>
</section>
```

You can expand it while compiling:

```marko
<-hero title="Welcome">
  <p>${input.message}</p>
</-hero>
```

Marko inserts the hero's template into the caller and fills in its title.
The caller's content goes where `<${input.content}/>` appears. Here,
`input.message` still comes from the page at runtime.

All attributes on `<-hero>` must be available at compile time. Its body can
contain runtime values, interactive tags, and event handlers. You can also call
this hero normally with `<hero title=input.title/>`.

## How it works

Marko evaluates comptime JavaScript, expands comptime tags, and then compiles the
remaining template as usual. A false `<-if>` removes its body. A `<-for>` copies
its body. A custom comptime tag inserts its template.

Values needed by the remaining code become literals, static values, or imports
in the generated program. Work used only during compilation disappears. Normal
Marko code in the result still runs on the server or in the browser as usual.

## Keep in mind

- Comptime cannot read runtime state such as `<let>` values or normal page
  `input`. Inside a custom tag invoked with `-`, that tag's `input` is available.
- Treat comptime values as constants at runtime.
- Evaluation is synchronous. Fetch remote data in your build script before
  compiling. If you supply data through build globals, use a fresh compiler
  cache when that data changes.
- Use the angle-bracket syntax shown here, even in concise templates. The
  concise `-if` line form is not implemented yet.

For reusable local markup, `<-define>` creates a comptime snippet. A custom tag
can provide a comptime result with `<-return>`. Use `<-log=value/>` to inspect a
value in compiler diagnostics.
