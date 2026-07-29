// template.marko.persisted.mjs
const $Child_content__walks = " D%c%l", $Child_content__template = "<button class=child><!> <!></button>", $if_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks), $if_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__setup = ($scope) => {
	$Child_content__setup._($scope["#childScope/0"], $scope._);
	const $tag_input_spread = getProps();
	$Child_content__label($scope["#childScope/0"], $tag_input_spread.label);
};
const $Child_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/2"], $scope._.n));
const $Child_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope._, $scope._.n + 1);
}));
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Child_content__n($scope);
	$Child_content__setup__script($scope);
});
const $Child_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $Child_content__$params = ($scope, $params2) => $Child_content__$temp($scope, $params2?.[0]);
const $Child_content__$temp = ($scope, $temp) => $Child_content__label($scope, $temp.label);
const $n__closure = /*@__PURE__*/ _closure($Child_content__n);
const $n = _var_resume("__tests__/template.marko_0_n/var", /*@__PURE__*/ _let_persisted("n/4", $n__closure));
function $setup($scope) {
	$n($scope, 0);
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
const $Child_content_holes = /*@__PURE__*/ _update_scopes({ "PatchHole:#text/1": /*@__PURE__*/ _update_text("#text/1") });
const $n_seed = _update_signal("__tests__/template.marko_0_n/var");
const $if_content__construct = ($scope) => {
	_construct_child($scope, "#childScope/0", "__tests__/template.marko_1_content", $scope._);
};
const $if_content__update = ($patch, $live) => {
	if ("#childScope/0" in $patch) _update_child($patch["#childScope/0"], $live["#childScope/0"], "__tests__/template.marko_1_content");
};
const $Child_content__construct = ($scope) => {
	_text($scope["#text/2"], $scope._.n);
	_construct_closure($scope, $scope._, $Child_content__n);
	_construct_effect($scope, $Child_content__setup__script);
};
const $Child_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	$Child_content_holes($patch, $live);
};
const $update2 = ($patch, $live) => {
	if ("n" in $patch) _update_seed($live, $n_seed, $patch["n"]);
	if ("ConditionalRenderer:#text/0" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/0", "BranchScopes:#text/0", [$if_content__update], ["__tests__/template.marko_2_update"]);
};
_construct("__tests__/template.marko_2_update", $if_content__construct);
_construct("__tests__/template.marko_1_update", $Child_content__construct);
_update_content("__tests__/template.marko_2_update", $if_content__update);
_update_content("__tests__/template.marko_1_content", $Child_content__update, $Child_content__construct);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Child_content__walks = " D%c%l", $Child_content__template = "<button class=child><!> <!></button>";
const $template = "<!><!><!>";
const $walks = "b%c";
function getProps() {
	if (typeof window !== "undefined") throw new Error("server only");
	return { label: "server" };
}
const $if_content__setup = ($scope) => {
	$Child_content__setup._($scope["#childScope/0"], $scope._);
	const $tag_input_spread = getProps();
	$Child_content__label($scope["#childScope/0"], $tag_input_spread.label);
};
const $Child_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/2"], $scope._.n));
const $Child_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope._, $scope._.n + 1);
}));
const $Child_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Child_content__n($scope);
	$Child_content__setup__script($scope);
});
const $Child_content__label = ($scope, label) => _text($scope["#text/1"], label);
const $Child_content__$params = ($scope, $params2) => $Child_content__$temp($scope, $params2?.[0]);
const $Child_content__$temp = ($scope, $temp) => $Child_content__label($scope, $temp.label);
const $n__closure = /*@__PURE__*/ _closure($Child_content__n);
const $n = /*@__PURE__*/ _let_persisted("n/4", $n__closure);
function $setup($scope) {
	$n($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Child_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Child_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
