// template.marko
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	Promise.reject(/* @__PURE__ */ new Error("click rejected"));
}));
