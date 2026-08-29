// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = () => {};
const $brand__script = _script("__tests__/template.marko_0_brand#1", ($scope) => document.querySelector("main").dataset.brand = $scope.brand);
const $brand = /*@__PURE__*/ _const("brand", ($scope) => {
	_text($scope["#text/0"], $scope.brand);
	$brand__script($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m");
