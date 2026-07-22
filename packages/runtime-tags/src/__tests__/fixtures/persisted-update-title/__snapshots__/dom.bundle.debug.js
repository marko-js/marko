// template.marko.persisted.mjs
const $template = "<button> </button><title></title><meta name=description><link rel=canonical><p> </p><output></output>";
const $walks = " D l b b bD lb";
const $count = _var_resume("__tests__/template.marko_0_count/var", /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count)));
const $setup__script = _script_shared(($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text_content($scope["#title/2"], `App — ${_to_text($scope.$global.docTitle)}`);
	_attr($scope["#meta/3"], "content", `${$scope.$global.docTitle} overview`);
	_attr($scope["#link/4"], "href", `https://example.test${$scope.$global.docPath}`);
	_text($scope["#text/5"], $scope.$global.docTitle);
	$count($scope, 0);
	$setup__script($scope);
}
var template_marko_persisted_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
const $count_seed = _update_signal("__tests__/template.marko_0_count/var");
const $_holes = /*@__PURE__*/ _update_scopes({
	"PatchAttr:textContent:#title/2": /*@__PURE__*/ _update_attr("#title/2", _text_content),
	"PatchAttr:content:#meta/3": /*@__PURE__*/ _update_named_attr("#meta/3", "content"),
	"PatchAttr:href:#link/4": /*@__PURE__*/ _update_named_attr("#link/4", "href"),
	"PatchHole:#text/5": /*@__PURE__*/ _update_text("#text/5")
});
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("count" in $patch) _update_seed($live, $count_seed, $patch["count"]);
	$_holes($patch, $live);
};
const $merge = _resume("__tests__/template.marko_0_update", $update2);
_update_content("__tests__/template.marko", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $template = "<button> </button><title></title><meta name=description><link rel=canonical><p> </p><output></output>";
const $walks = " D l b b bD lb";
const $count = /*@__PURE__*/ _let_persisted("count/6", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script_update("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	_text_content($scope["#title/2"], `App — ${_to_text($scope.$global.docTitle)}`);
	_attr($scope["#meta/3"], "content", `${$scope.$global.docTitle} overview`);
	_attr($scope["#link/4"], "href", `https://example.test${$scope.$global.docPath}`);
	_text($scope["#text/5"], $scope.$global.docTitle);
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
