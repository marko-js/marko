// template.marko
const $if_content__setup = ($scope) => _start_late($scope.a, "\n      { const main = document.querySelector(\"main\");\n      main.dataset.ran = (+main.dataset.ran || 0) + 1;\n      main.dataset.nonce = document.currentScript.nonce;\n      main.dataset.inPlace = document.currentScript.parentNode === main; }\n    ");
const $if = /*@__PURE__*/ _if(1, "<script><\/script>", "! ", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
