// tags/child.marko.persisted.mjs
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_class = ($scope, input_class) => _attr_class($scope["#div/0"], input_class);
const $input_data_request = ($scope, input_data_request) => _attr($scope["#div/0"], "data-request", input_data_request);
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_data_request($scope, input["data-request"]);
};
var child_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input$1);
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:class:#div/0": /*@__PURE__*/ _update_attr("#div/0", _attr_class),
	"PatchAttr:data-request:#div/0": /*@__PURE__*/ _update_named_attr("#div/0", "data-request")
});
const _merge$1 = _resume("__tests__/tags/child.marko_0_update", $_holes);
_update_content("__tests__/tags/child.marko", _merge$1);
function _patch2$1(_fail) {
	return patch(_merge$1, _fail);
}

// template.marko.persisted.mjs
const $template = /*@__PURE__*/ ((_w0) => `<button>clicked <!></button><input><div>dynamic</div>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l b b/${_w0}&`)(" b");
const $input_title__OR__attrs__script = _script_shared(($scope) => {
	_attrs_script($scope, "#input/2");
	_attrs_script($scope, "#div/3");
});
const $input_title__OR__attrs = /*@__PURE__*/ _or(9, ($scope) => {
	_attrs($scope, "#input/2", {
		"data-request": $scope.input_title,
		...$scope.attrs
	});
	_attrs($scope, "#div/3", {
		"data-request": $scope.input_title,
		...$scope.attrs
	});
	const $child_input_spread = {
		"data-request": $scope.input_title,
		...$scope.attrs
	};
	$input_class($scope["#childScope/4"], $child_input_spread.class);
	$input_data_request($scope["#childScope/4"], $child_input_spread["data-request"]);
	$input_title__OR__attrs__script($scope);
});
const $attrs = _var_resume("__tests__/template.marko_0_attrs/var", /*@__PURE__*/ _let_persisted("attrs/8", $input_title__OR__attrs));
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$attrs($scope, {
		title: "client title",
		class: "client"
	});
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = _var_resume("__tests__/template.marko_0_input_title/var", /*@__PURE__*/ _const_persisted("input_title", $input_title__OR__attrs));
const $input = ($scope, input) => $input_title($scope, input.title);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
const $attrs_seed = _update_signal("__tests__/template.marko_0_attrs/var");
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $input_title_update = _update_signal("__tests__/template.marko_0_input_title/var");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("attrs" in _patch) _update_seed(_live, $attrs_seed, _patch["attrs"]);
	if ("count" in _patch) _update_seed(_live, $count_seed, _patch["count"]);
	if ("input_title" in _patch) $input_title_update(_live, _patch["input_title"]);
	if ("#childScope/4" in _patch) _merge$1(_patch["#childScope/4"], _live["#childScope/4"]);
};
const _merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}

// tags/child.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_class = ($scope, input_class) => _attr_class($scope["#div/0"], input_class);
const $input_data_request = ($scope, input_data_request) => _attr($scope["#div/0"], "data-request", input_data_request);
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_data_request($scope, input["data-request"]);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>clicked <!></button><input><div>dynamic</div>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l b b/${_w0}&`)(" b");
const $input_title__OR__attrs__script = _script_update("__tests__/template.marko_0_input_title_attrs", ($scope) => {
	_attrs_script($scope, "#input/2");
	_attrs_script($scope, "#div/3");
});
const $input_title__OR__attrs = /*@__PURE__*/ _or(9, ($scope) => {
	_attrs($scope, "#input/2", {
		"data-request": $scope.input_title,
		...$scope.attrs
	});
	_attrs($scope, "#div/3", {
		"data-request": $scope.input_title,
		...$scope.attrs
	});
	const $child_input_spread = {
		"data-request": $scope.input_title,
		...$scope.attrs
	};
	$input_class($scope["#childScope/4"], $child_input_spread.class);
	$input_data_request($scope["#childScope/4"], $child_input_spread["data-request"]);
	$input_title__OR__attrs__script($scope);
});
const $attrs = /*@__PURE__*/ _let_persisted("attrs/8", $input_title__OR__attrs);
const $count = /*@__PURE__*/ _let_persisted("count/10", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$attrs($scope, {
		title: "client title",
		class: "client"
	});
	$count($scope, 0);
	$setup__script($scope);
}
const $input_title = /*@__PURE__*/ _const_persisted("input_title", $input_title__OR__attrs);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
