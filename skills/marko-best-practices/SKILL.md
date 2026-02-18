---
name: marko-best-practices
description: Apply Marko syntax and best practices when editing `.marko` files and building Marko components.
---

# Marko Best Practices

Marko is a modern UI framework for building web applications. It features a declarative component-based syntax, fine-grained reactivity, and a highly optimized compiler. Marko is designed for both server-rendered and interactive client-side experiences with a focus on streaming, partial hydration, and shipping the smallest possible amount of JavaScript to each page.

## Marko Documentation

The Marko documentation is the source of truth for all Marko-related information. Always refer to the official docs for information about syntax and behavior. Marko changes over time, so prefer fetching current docs over relying on training data.

The [docs index](https://markojs.com/llms.txt) lists every available page with its URL and a short description.

All Marko docs pages can be fetched as markdown by appending `.md` to the URL (<https://markojs.com/docs/introduction/getting-started.md>)

## Marko 6 Syntax

Documentation and this skill target **Marko 6**. Do not use Marko 5 syntax.

## Checklist for New or Edited .marko Files

- [ ] Uses Marko 6 syntax only (no scriptlets, old event syntax, or Marko 5 blocks).
- [ ] `<script>` is never used when state (`<let>` or `<const>`) could accomplish the same behavior.
- [ ] Event handlers use function form: `onClick() { ... }` or a reference, not string names.
- [ ] Component stays small and readable; consider splitting large templates.
- [ ] No unnecessary client-side JS; prefer built-in browser APIs and HTML/CSS features over scripts.
