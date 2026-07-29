// tags/info-card.marko.persisted.mjs
const $template$1 = "<h3 class=card-title> </h3><p class=card-note> </p>";
const $walks$1 = "D lD l";
_static_shells({ "b0": [$template$1, $walks$1] });
const $update2$1 = () => {};
const $merge$1 = _resume("b0", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $if_content__walks = /*@__PURE__*/ ((_w0, _w1) => `D b/${_w0}&%b/${_w1}&%l`)($walks$1, $walks$1), $if_content__template = /*@__PURE__*/ ((_w0, _w1) => `<section class=arrived><button class=inner>inner</button>${_w0}<!>${_w1}<!></section>`)($template$1, $template$1);
const $template = "<button class=count>clicked <!></button><!><!>";
const $walks = " Db%l%c";
const $if_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.k + 1);
}));
const $count = _var_resume("a9", /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
_static_shells({
	"a5": [$if_content__template, $if_content__walks],
	"a8": [$if_content__template, $if_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a9");
const $if_content__construct = ($scope) => {
	_construct_effect($scope, $if_content__setup__script);
};
const $if_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("Dc" in $patch) _update_region("c")($patch, $live);
	if ("De" in $patch) _update_region("e")($patch, $live);
};
const $construct = ($scope) => {
	_text($scope.b, $scope.k);
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("k" in $patch) _update_seed($live, $count_seed, $patch["k"]);
	if ("g" in $patch) $live["g"] = $patch["g"];
	if ("h" in $patch) $live["h"] = $patch["h"];
	if ("i" in $patch) $live["i"] = $patch["i"];
	if ("j" in $patch) $live["j"] = $patch["j"];
	if ("Dc" in $patch) _update_if($patch, $live, "Dc", "Ac", [$if_content__update], ["a5"]);
};
_construct("a5", $if_content__construct);
_construct("a1", $construct);
_update_content("a5", $if_content__update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $if_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.k + 1);
}));
const $count = /*@__PURE__*/ _let_persisted(10, ($scope) => _text($scope.b, $scope.k));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.k + 1);
}));
