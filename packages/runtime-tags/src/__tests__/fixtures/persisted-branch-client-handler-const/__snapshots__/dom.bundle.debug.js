// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__title = /*@__PURE__*/ _const("title");
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__title($scope, $scope._.input_title)));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	document.querySelector("main").dataset.title = $scope.title;
}));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<button>read</button>", " ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
