// template.marko.persisted.mjs
const $if_content__walks = " Db%l", $if_content__template = "<button class=detail>detail <!></button>";
const $template = "";
const $walks = "";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content__setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 2);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text_content($scope["#title/0"], `Frame ${_to_text($scope.$global.search?.[0]?.q ?? "")}`);
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", $if_content__template, $if_content__walks, $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", "", "", $setup, $input);
_static_shells({
	"__tests__/template.marko_1_update": [$if_content__template, $if_content__walks],
	"__tests__/template.marko_1_content": [$if_content__template, $if_content__walks]
});
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({ "PatchAttr:textContent:#title/0": /*@__PURE__*/ _update_attr("#title/0", _text_content) });
const $if_content__construct = ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	_construct_effect($scope, $if_content__setup__script);
};
const $construct = ($scope) => {
	_text($scope["#text/2"], $scope.count);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
	if ("ConditionalRenderer:#text/3" in $patch) _update_if($patch, $live, "ConditionalRenderer:#text/3", "BranchScopes:#text/3", [_update_pair], ["__tests__/template.marko_1_update"]);
};
_construct("__tests__/template.marko_1_update", $if_content__construct);
_construct("__tests__/template.marko_0_update", $construct);
_update_content("__tests__/template.marko_1_update", _update_pair);
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<!><html lang=en><head><title></title></head><body><header class=site>Store</header><button class=count>clicked <!></button><!></body></html>";
const $walks = "bE lDb Db%l%m";
const $if_content__count = /*@__PURE__*/ _if_closure("#text/3", 0, ($scope) => _text($scope["#text/1"], $scope._.count));
const $if_content__setup__script = _script_update("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 2);
}));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	$if_content__setup__script($scope);
};
const $count = /*@__PURE__*/ _let_persisted("count/7", ($scope) => {
	_text($scope["#text/2"], $scope.count);
	$if_content__count($scope);
});
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text_content($scope["#title/0"], `Frame ${_to_text($scope.$global.search?.[0]?.q ?? "")}`);
	$count($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/3", "<button class=detail>detail <!></button>", " Db%", $if_content__setup);
const $input_show = ($scope, input_show) => {
	if (!updating) $if($scope, input_show ? 0 : 1);
};
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
