// tags/static-bit.marko.persisted.mjs
const $template$1 = "<span class=static>static</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var static_bit_marko_persisted_default = /*@__PURE__*/ _template("__tests__/tags/static-bit.marko", $template$1, "b", $setup$1);
_static_shells({ "__tests__/tags/static-bit.marko_0_update": [$template$1, "b"] });
const $update2$1 = () => {};
const $merge$1 = _resume("__tests__/tags/static-bit.marko_0_update", $update2$1);
_update_content("__tests__/tags/static-bit.marko", $merge$1);
function $patch2$1($fail) {
	return patch($merge$1, $fail);
}

// template.marko.persisted.mjs
const $if_content__walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&%b`)("b"), $if_content__template = /*@__PURE__*/ ((_w0) => `<p class=detail>detail <!></p>${_w0}<!>`)($template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", $if_content__template, $if_content__walks, $if_content__setup);
const $input_detail = ($scope, input_detail) => {
	if (!updating) $if($scope, input_detail ? 0 : 1);
};
const $input = ($scope, input) => $input_detail($scope, input.detail);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_0_update": [$template, $walks],
	"__tests__/template.marko": [$template, $walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__construct = ($scope) => {
	_text($scope["#text/0"], $scope._.count);
};
const $if_content__update = ($patch, $live) => {
	if ("ConditionalRenderer:#text/2" in $patch) _update_region("#text/2")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope["#text/1"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/2" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/2", "BranchScopes:#text/2", [$if_content__update], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", $if_content__update);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/static-bit.marko
const $template$1 = "<span class=static>static</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var static_bit_default = /*@__PURE__*/ _template("__tests__/tags/static-bit.marko", $template$1, "b", $setup$1);

// template.marko
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/2", /*@__PURE__*/ ((_w0) => `<p class=detail>detail <!></p>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&%b`)("b"), $if_content__setup);
const $input_detail = ($scope, input_detail) => {
	if (!updating) $if($scope, input_detail ? 0 : 1);
};
const $input = ($scope, input) => $input_detail($scope, input.detail);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
