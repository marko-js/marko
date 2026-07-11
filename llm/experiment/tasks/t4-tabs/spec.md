# Task: Tabs component

Build a reusable tabs component with Marko 6 (the tags API). The app is served by @marko/run's dev server; `marko` and `@marko/run` are already installed.

Create the component file at `src/tags/tab-panel.marko`. It is consumed by a page that already exists (shown below) and must work with that page unchanged.

## Existing file (do not write or modify it)

```marko
/* src/routes/+page.marko */
<h1>Docs</h1>
<tab-panel>
  <@tab label="Install">
    <p>Run npm install to get started.</p>
  </@tab>
  <@tab label="Usage">
    <p>Import the package and call run().</p>
  </@tab>
  <@tab label="FAQ">
    <p>Answers to common questions.</p>
  </@tab>
</tab-panel>
```

## Requirements for `<tab-panel>`
- It receives one or more `@tab` sections, each with a `label` attribute and body content.
- It renders one `<button>` per tab, in order, whose text is that tab's label, inside a wrapper element with `role="tablist"`.
- Below the buttons, an element with `id="panel"` shows the body content of the active tab only. Content of inactive tabs must not be visible on the page.
- The first tab is active initially. Clicking a tab's button makes that tab active and swaps the panel content.
- The active tab's button must have the attribute `aria-selected="true"`; inactive buttons must not have `aria-selected="true"`.

## Output
Return every file you create (paths relative to the app root).
