// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content__input_title = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.input_title));
const $if_content__setup = $if_content__input_title;
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => $if($scope, $scope.count > 1 ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	;
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _const("input_title", $if_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
