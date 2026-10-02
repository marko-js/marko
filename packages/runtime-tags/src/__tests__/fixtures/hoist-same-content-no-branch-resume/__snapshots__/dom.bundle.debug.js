// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content2__read_getter = /*@__PURE__*/ _hoist("read");
const $if_content2__read = /*@__PURE__*/ _const("read", ($scope) => _assert_hoist($scope.read));
const $if_content2__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => $if_content2__read($scope, $read($scope)), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe");
const $if_content2__setup__script = _script("__tests__/template.marko_2", ($scope) => _el_read($scope["#span/0"]).textContent = $if_content2__read_getter($scope)());
const $if_content2__setup = ($scope) => {
	$if_content2__input_label($scope);
	$if_content2__setup__script($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#div/0", "<span></span>", " ", $if_content2__setup);
const $if_content__input_inner = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_inner ? 0 : 1));
const $if_content__setup = $if_content__input_inner;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_inner($scope, input.inner);
	$input_label($scope, input.label);
};
const $input_inner = /*@__PURE__*/ _const("input_inner", $if_content__input_inner);
const $input_label__closure = /*@__PURE__*/ _closure($if_content2__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $read = ($scope) => () => $scope._._.input_label;
_resumed["__tests__/template.marko_2/read"] = $read;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
