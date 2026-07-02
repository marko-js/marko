// template.marko
const $template = "<div><div class=by-string></div><div class=by-function></div><div class=by-unknown-string></div><div class=by-unknown-function></div><div class=by-unknown-missing></div><button>Rotate</button></div>";
const $walks = "D b b b b b l";
function getStringBy() {
	return "id";
}
function getFunctionBy() {
	return (item) => item.id;
}
function getMissingBy() {
	return undefined;
}
const $for_content5__text = ($scope, text) => _text($scope["#text/0"], text);
const $for_content5__$params = ($scope, $params6) => $for_content5__text($scope, ($params6?.[0]).text);
const $for_content4__text = ($scope, text) => _text($scope["#text/0"], text);
const $for_content4__$params = ($scope, $params5) => $for_content4__text($scope, ($params5?.[0]).text);
const $for_content3__text = ($scope, text) => _text($scope["#text/0"], text);
const $for_content3__$params = ($scope, $params4) => $for_content3__text($scope, ($params4?.[0]).text);
const $for_content2__text = ($scope, text) => _text($scope["#text/0"], text);
const $for_content2__$params = ($scope, $params3) => $for_content2__text($scope, ($params3?.[0]).text);
const $for_content__text = ($scope, text) => _text($scope["#text/0"], text);
const $for_content__$params = ($scope, $params2) => $for_content__text($scope, ($params2?.[0]).text);
const $for = /* @__PURE__ */ _for_of("#div/0", " ", " b", 0, $for_content__$params);
const $for2 = /* @__PURE__ */ _for_of("#div/1", " ", " b", 0, $for_content2__$params);
const $for3 = /* @__PURE__ */ _for_of("#div/2", " ", " b", 0, $for_content3__$params);
const $for4 = /* @__PURE__ */ _for_of("#div/3", " ", " b", 0, $for_content4__$params);
const $for5 = /* @__PURE__ */ _for_of("#div/4", " ", " b", 0, $for_content5__$params);
const $items = /* @__PURE__ */ _let("items/6", ($scope) => {
	$for($scope, [$scope.items, "id"]);
	$for2($scope, [$scope.items, (item) => item.id]);
	$for3($scope, [$scope.items, getStringBy()]);
	$for4($scope, [$scope.items, getFunctionBy()]);
	$for5($scope, [$scope.items, getMissingBy()]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$items($scope, [...$scope.items.slice(1), $scope.items?.[0]]);
}));
function $setup($scope) {
	$items($scope, [
		{
			id: 0,
			text: "first"
		},
		{
			id: 1,
			text: "second"
		},
		{
			id: 2,
			text: "third"
		}
	]);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
