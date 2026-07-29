// tags/static-bit.marko.persisted.mjs
const $template$1 = "<span class=static>static</span>";
const $walks$1 = "b";
_static_shells({ "b0": [$template$1, "b"] });
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $if_content__walks = /*@__PURE__*/ ((_w0) => `Db%l/${_w0}&%b`)("b"), $if_content__template = /*@__PURE__*/ ((_w0) => `<p class=detail>detail <!></p>${_w0}<!>`)($template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g));
const $count = _var_resume("a7", /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
_static_shells({
	"a3": [$if_content__template, $if_content__walks],
	"a6": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a7");
const $if_content__construct = ($scope) => {
	_text($scope.a, $scope._.g);
};
const $if_content__update = ($patch, $live) => {
	if ("Dc" in $patch) _update_region("c")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.g);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("g" in $patch) _update_seed($live, $count_seed, $patch["g"]);
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a3"]);
};
_construct("a3", $if_content__construct);
_construct("a1", $construct);
_update_content("a3", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__count = /*@__PURE__*/ _if_closure(2, 0, ($scope) => _text($scope.a, $scope._.g));
const $count = /*@__PURE__*/ _let_persisted(6, ($scope) => {
	_text($scope.b, $scope.g);
	$if_content__count($scope);
});
const $setup__script = _script_update("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));
