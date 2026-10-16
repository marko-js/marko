// template.marko
const $template = "<main><button>add</button><!></main>";
const $walks = "D b%l";
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__setup = ($scope) => _start_late($scope["#script/1"], "\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (main.dataset.ran || \"\") + document.currentScript.previousElementSibling.textContent; }\n    ");
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<p> </p><script><\/script>", "D l! ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let("items/2", ($scope) => $for($scope, [$scope.items]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$items($scope, [...$scope.items, String.fromCharCode(97 + $scope.items.length)]);
}));
function $setup($scope) {
	$items($scope, ["a"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
