// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content2__add = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_add#1:3/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.add(10)));
const $if_content2__setup = $if_content2__add;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<b> </b>", "D ", $if_content2__setup);
const $if_content__on = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.on ? 0 : 1));
const $if_content__add = /*@__PURE__*/ _const("add", $if_content2__add);
const $if_content__n = /*@__PURE__*/ _fill_let("__tests__/template.marko_1_n#2/fill", "n/2", ($scope) => $if_content__add($scope, (v) => v + $scope.n));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__n($scope, 5);
}));
const $if_content__setup = ($scope) => {
	$if_content__on._($scope);
	$if_content__setup__script($scope);
	$if_content__n($scope, 1);
};
const $on = /*@__PURE__*/ _const("on");
function $setup($scope) {
	$on($scope, true);
}
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><button>set</button>", "b%b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
