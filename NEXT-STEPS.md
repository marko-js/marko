The current @proposal.md is implemented in the previous commit, although much can be improved. It is your job to fully understand the proposal and investigate the following improvements.

The final result should integrate the optimization cohesively into the existing read/reference analyze system and avoid translator phase / tree-walking where possible. It should be robust, and efficient in terms of render performance and bundle size.

Here are some specific areas to revisit:

- Check that direct runs of the selector fn work when a selected or unselected scope was destroyed
- Try to populate map while running renders (potentially investigate refactoring the for loop logic to build up the map and store that instead of the array)
- Try to move the (key === selected) pattern into analyze so that these are seen as special "reads" and get replaced through the existing replaceNode machinery and integrate better with the whole system.
- Investigate storing the `lastActiveScope` instead of just last key.
- Explore any further simplifications or optimizations.

API change:
Investigate changing the output from

```js
const $for_content__selected = /* @__PURE__ */ _for_selector(
  "#tbody/0",
  "selected",
  ($scope) =>
    _attr_class(
      $scope["#tr/0"],
      $scope._.selected === $scope["#LoopKey"] && "danger",
    ),
);
```

to something like

````js
const $for_content__selected = /* @__PURE__ */ _for_selector("#tbody/0", "selected", ($scope, $active) => _attr_class($scope["#tr/0"], $active && "danger"));
x```
````

Basically moving the active calculation into the runtime and reducing the amount of code in the user generated output.
