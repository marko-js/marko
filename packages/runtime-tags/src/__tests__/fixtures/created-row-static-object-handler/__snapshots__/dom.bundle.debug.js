// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + $scope.item_n);
}));
const $for_content__setup = $for_content__setup__script;
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for_content__item_n = /*@__PURE__*/ _const("item_n");
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button class=r>x</button>", " ", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => $if_content__for($scope, [[{ n: 1 }, { n: 2 }]]);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => _text($scope["#text/1"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
