// tags/layout.marko.persisted.mjs
const $template$2 = "<aside class=rail>rail</aside><main class=page><!></main>";
const $walks$2 = "bD%l";
_static_shells({
	"c1": [$template$2, $walks$2],
	"c": [$template$2, $walks$2]
});
const $update2$2 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$2 = _resume("c1", $update2$2);
_update_content("c", $merge$2);

// tags/frame.marko.persisted.mjs
const $template$1 = "<section class=frame><!></section>";
const $walks$1 = "D%l";
_static_shells({
	"b1": [$template$1, "D%l"],
	"b": [$template$1, "D%l"]
});
const $update2$1 = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $merge$1 = _resume("b1", $update2$1);
_update_content("b", $merge$1);

// template.marko.persisted.mjs
const $frame_content__walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)($walks$2), $frame_content__template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$2), $Dashboard_content__walks = " Db%lDb%l", $Dashboard_content__template = "<button class=bump>tally <!></button><p class=greeting>hello <!></p>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b`)("D%l");
const $Dashboard_content__tally = _var_resume("a8", /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d)));
const $Dashboard_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = _var_resume("a9", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $frame_content__setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.e + 1);
}));
_static_shells({
	"a6": [$Dashboard_content__template, $Dashboard_content__walks],
	"a2": [$Dashboard_content__template, $Dashboard_content__walks],
	"a7": [$frame_content__template, $frame_content__walks],
	"a5": [$frame_content__template, $frame_content__walks],
	"a0": [$template, $walks],
	"a": [$template, $walks]
});
const $tally_seed = _update_signal("a8");
const $Dashboard_content_holes = /*@__PURE__*/ _update_scopes({ "Qc": /*@__PURE__*/ _update_text("c") });
const $count_seed = _update_signal("a9");
const $Dashboard_content__construct = ($scope) => {
	_text($scope.b, $scope.d);
	_construct_effect($scope, $Dashboard_content__setup__script);
};
const $Dashboard_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) _update_seed($live, $tally_seed, $patch["d"]);
	$Dashboard_content_holes($patch, $live);
};
const $frame_content__construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_child($scope, "c", "c1");
	_construct_effect($scope, $frame_content__setup__script);
};
const $frame_content__update = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("c" in $patch) $merge$2($patch["c"], $live["c"]);
};
const $construct = ($scope) => {
	_construct_child($scope, "a", "b1");
};
const $update2 = ($patch, $live) => {
	if ("a" in $patch) $merge$1($patch["a"], $live["a"]);
};
_construct("a6", $Dashboard_content__construct);
_construct("a7", $frame_content__construct);
_construct("a0", $construct);
_update_content("a2", $Dashboard_content__update, $Dashboard_content__construct);
_update_content("a5", $frame_content__update, $frame_content__construct);
const $noop_update = () => {};
_update_content("a1", $noop_update);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $Dashboard_content__tally = /*@__PURE__*/ _let_persisted(3, ($scope) => _text($scope.b, $scope.d));
const $Dashboard_content__setup__script = _script_update("a3", ($scope) => _on($scope.a, "click", function() {
	$Dashboard_content__tally($scope, $scope.d + 1);
}));
const $frame_content__count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $frame_content__setup__script = _script_update("a4", ($scope) => _on($scope.a, "click", function() {
	$frame_content__count($scope, $scope.e + 1);
}));
