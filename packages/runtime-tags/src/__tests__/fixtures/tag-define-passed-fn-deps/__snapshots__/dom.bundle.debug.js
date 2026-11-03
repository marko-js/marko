// tags/field.marko
const $TextField_content__walks = " b";
const $TextField_content__template = "<input>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($TextField_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&/&b`)($TextField_content__walks);
const $Log_content__log__OR__value__script = _script("__tests__/tags/field.marko_2_log#2_value#3", ($scope) => $scope.log($scope.value));
const $Log_content__log__OR__value = /*@__PURE__*/ _or(4, $Log_content__log__OR__value__script);
const $Log_content__log = /*@__PURE__*/ _const("log", $Log_content__log__OR__value);
const $Log_content__value = /*@__PURE__*/ _const("value", $Log_content__log__OR__value);
const $Log_content__$params = ($scope, $params3) => $Log_content__$temp($scope, $params3[0]);
const $Log_content__$temp = ($scope, $temp) => {
	$Log_content__log($scope, $temp.log);
	$Log_content__value($scope, $temp.value);
};
const $TextField_content__value__OR__valueChange = /*@__PURE__*/ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.value, $scope.valueChange));
const $TextField_content__value = /*@__PURE__*/ _const("value", $TextField_content__value__OR__valueChange);
const $TextField_content__valueChange = /*@__PURE__*/ _const("valueChange", $TextField_content__value__OR__valueChange);
const $TextField_content__setup__script = _script("__tests__/tags/field.marko_1", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $TextField_content__setup = $TextField_content__setup__script;
const $TextField_content__attrs__script = _script("__tests__/tags/field.marko_1_attrs#6", ($scope) => _attrs_script($scope, "#input/0"));
const $TextField_content__attrs = /*@__PURE__*/ _const("attrs", ($scope) => {
	_attrs_partial($scope, "#input/0", $scope.attrs, {
		value: 1,
		valueChange: 1
	});
	$TextField_content__attrs__script($scope);
});
const $TextField_content__$params = ($scope, $params2) => $TextField_content__input($scope, $params2[0]);
const $TextField_content__input = ($scope, input) => {
	$TextField_content__attrs($scope, (({ value, valueChange, ...attrs }) => attrs)(input));
	$TextField_content__value($scope, input.value);
	$TextField_content__valueChange($scope, input.valueChange);
};
function $setup$1($scope) {
	$TextField_content__setup($scope["#childScope/0"]);
	$TextField_content__valueChange($scope["#childScope/0"], $valueChange);
}
const $input_v = ($scope, input_v) => {
	$TextField_content__value($scope["#childScope/0"], input_v);
	$Log_content__value($scope["#childScope/1"], input_v);
};
const $input_hint$1 = /*@__PURE__*/ _const("input_hint", ($scope) => {
	$TextField_content__attrs($scope["#childScope/0"], { placeholder: $scope.input_hint });
	$Log_content__log($scope["#childScope/1"], $log($scope));
});
const $input$1 = ($scope, input) => {
	$input_hint$1($scope, input.hint);
	$input_v($scope, input.v);
};
function $valueChange(next) {
	document.title = next;
}
const $log = ($scope) => function(value) {
	console.log(value, $scope.input_hint);
};
_resumed["__tests__/tags/field.marko_0/valueChange"] = $valueChange;
_resumed["__tests__/tags/field.marko_0/log"] = $log;
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>v</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($walks$1);
const $v = /*@__PURE__*/ _let("v/5", ($scope) => $input_v($scope["#childScope/1"], $scope.v));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$v($scope, $scope.v + "!");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$v($scope, "x");
	$setup__script($scope);
}
const $input_hint = ($scope, input_hint) => $input_hint$1($scope["#childScope/1"], input_hint);
const $input = ($scope, input) => $input_hint($scope, input.hint);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
