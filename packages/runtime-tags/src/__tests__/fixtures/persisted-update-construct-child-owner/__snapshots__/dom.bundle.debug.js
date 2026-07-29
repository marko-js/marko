// template.marko.persisted.mjs
const $Child_content__walks = " D l", $Child_content__template = "<button class=child> </button>", $if_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks), $if_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$Child_content__setup._($scope["#childScope/0"], $scope._);
};
const $Child_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count));
const $Child_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Child_content__count($scope);
	$Child_content__setup__script($scope);
});
const $count__closure = /*@__PURE__*/ _closure($Child_content__count);
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/4", $count__closure));
function $setup($scope) {
	$count($scope, 1);
}
const $if = /*@__PURE__*/ _if("#text/0", $if_content__template, $if_content__walks, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
_static_shells({
	"__tests__/template.marko_2_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_2_content": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_update": [$Child_content__template, $Child_content__walks],
	"__tests__/template.marko_1_content": [$Child_content__template, $Child_content__walks],
	"__tests__/template.marko_0_update": [$template, "b%c"],
	"__tests__/template.marko": [$template, "b%c"]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $if_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/template.marko_1_content", $scope._);
};
const $if_content__update = ($patch, $live) => {
	if ("#childScope/0" in $patch) _update_child($patch["#childScope/0"], $live["#childScope/0"], "__tests__/template.marko_1_content");
};
const $Child_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	_construct_closure($scope, $scope._, $Child_content__count);
	_construct_effect($scope, $Child_content__setup__script);
};
const $update2 = ($patch, $live) => {
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	if ("ConditionalRenderer:#text/0" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [$if_content__update], ["__tests__/template.marko_2_update"]);
};
_construct("__tests__/template.marko_2_update", $if_content__construct);
_construct("__tests__/template.marko_1_update", $Child_content__construct);
_update_content("__tests__/template.marko_2_update", $if_content__update);
_update_content("__tests__/template.marko_1_content", _update_pair, $Child_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Child_content__walks = " D l", $Child_content__template = "<button class=child> </button>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$Child_content__setup._($scope["#childScope/0"], $scope._);
};
const $Child_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/1"], $scope._.count));
const $Child_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Child_content__count($scope);
	$Child_content__setup__script($scope);
});
const $count__closure = /*@__PURE__*/ _closure($Child_content__count);
const $count = /*@__PURE__*/ _let_persisted("count/4", $count__closure);
function $setup($scope) {
	$count($scope, 1);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
