// template.marko
const $template = "<main><button>toggle</button><!></main>";
const $walks = "D b%l";
const $if_content__setup = ($scope) => _start_late($scope["#script/0"], "\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.nonce;\n      main.dataset.inPlace = document.currentScript.parentNode === main; }\n    ");
const $if = /*@__PURE__*/ _if("#text/1", "<script><\/script>", "! ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
