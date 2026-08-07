// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $elseif_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => _text($scope["#text/0"], $scope._.input_title)));
const $elseif_content__setup = $elseif_content__input_title;
const $if = /*@__PURE__*/ _if("#text/0", "<b>one</b>", 0, 0, "<i> </i>", "D ", $elseif_content__setup, "<s>none</s>");
const $mode = /*@__PURE__*/ _let("mode/5", ($scope) => $if($scope, $scope.mode === 1 ? 0 : $scope.mode === 2 ? 1 : 2));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$mode($scope, ($scope.mode + 1) % 3);
}));
function $setup($scope) {
	$mode($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", $elseif_content__input_title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
