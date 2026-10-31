// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__log = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_onClick($scope["#childScope/0"], $scope._.log));
const $if_content__setup = $if_content__log;
const $log2 = /*@__PURE__*/ _const("log", $if_content__log);
const $input_step = /*@__PURE__*/ _const("input_step", ($scope) => $log2($scope, $log($scope)));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_step($scope, input.step);
	$input_show($scope, input.show);
};
const $log = ($scope) => () => {
	console.log($scope.input_step);
};
_resumed["__tests__/template.marko_0/log"] = $log;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// components/child.marko
const $template = "<button>go</button>";
const $walks = " b";
const $setup = ($_) => {};
const $input_onClick__script = _script("__tests__/components/child.marko_0_input_onClick#3", ($scope) => _on($scope["#button/0"], "click", $scope.input_onClick));
const $input_onClick = /*@__PURE__*/ _const("input_onClick", $input_onClick__script);
const $input = ($scope, input) => $input_onClick($scope, input.onClick);
var child_default = /*@__PURE__*/ _template("__tests__/components/child.marko", $template, " b", 0, $input);
