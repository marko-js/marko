// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__sel_id__OR__item = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_sel_id#1:2_item#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope.item === $scope._.sel_id ? "*" : ""));
const $for_content__sel_id = /*@__PURE__*/ _for_closure("#text/0", $for_content__sel_id__OR__item, 6);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__sel($scope._, { id: $scope.item });
}));
const $for_content__setup = ($scope) => {
	$for_content__sel_id._($scope);
	$for_content__setup__script($scope);
};
const $for_content__item = /*@__PURE__*/ _const("item", ($scope) => {
	$for_content__sel_id__OR__item($scope);
	_text($scope["#text/2"], $scope.item);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if_content__sel = _let("sel/1", ($scope) => $if_content__sel_id($scope, $scope.sel?.id));
const $if_content__input_token = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_token#0:4/setup", "#text/0", 0, ($scope) => $if_content__sel($scope, {
	id: 1,
	token: $scope._.input_token
}));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button><!><!></button>", " D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__input_token._($scope);
	$if_content__for($scope, [[1, 2]]);
};
const $if_content__sel_id = /*@__PURE__*/ _const("sel_id", $for_content__sel_id);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_token($scope, input.token);
	$input_show($scope, input.show);
};
const $input_token = /*@__PURE__*/ _const("input_token", $if_content__input_token);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
