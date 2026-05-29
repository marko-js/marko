// total: 6819 (min) 2767 (brotli)
// template.marko: 349 (min) 164 (brotli)
const $MyButton_content2 = _content_resume("a5", "Click Me", "b");
const $MyButton_content__input_onClick = /* @__PURE__ */ _const(3, _script("a4", ($scope) => _on($scope.a, "click", function() {
	document.getElementById("el").textContent += "[onClick(child)]";
	$scope.d();
})));
const $MyButton_content__input__script = _script("a3", ($scope) => _attrs_script($scope, "a"));
function $onClick() {
	document.getElementById("el").textContent += "[onClick(parent)]";
}
function $onclick() {
	throw new Error("Should never be called.");
}
_resume("a1", $onClick);
_resume("a0", $onclick);
