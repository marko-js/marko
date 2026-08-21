---
type: bug
impact: high
effort: low
site: packages/runtime-class/src/node_modules/@internal/components-registry/index-browser.js › initClientRendered
---

# Isolate a throwing `onMount` and name the component that threw

`initClientRendered` runs `for (i = len; i--;) initComponent(componentDef, host)` with no guard, and `initComponent` ends in `component.___emitMount()`, which calls the user's `onMount`. The loop deliberately walks backwards so nested components initialize before their ancestors, so one throwing `onMount` leaves every ancestor uninitialized and `this.emit(...)` from anywhere on the page stops reaching a parent's `on<Event>("method")` binding — while the DOM listeners attached earlier in `initComponent` keep working, so the page looks alive and only the custom-event wiring is dead. The stock way to trip it is `onMount() { this.el = this.getEl("readout") }`: `el` is a getter on `componentProto`, the assignment throws `Cannot set property el of #<Component> which has only a getter`, and that sentence is the entire diagnostic — no component, no template, no frame. Wrap the `initComponent` call so the loop continues and report the failure with `component.___type`, the template path `getComponentClass` already pins on the prototype.

Check: two sibling Class components under a parent listening with `onChange("handler")`/`onAdd("handler")`, one of them assigning `this.el` in `onMount` — today the parent's event log stays empty for both children and the console shows only `Cannot set property el of #<Component> which has only a getter`; expect the sibling's events to still arrive and the error to name the offending template.
