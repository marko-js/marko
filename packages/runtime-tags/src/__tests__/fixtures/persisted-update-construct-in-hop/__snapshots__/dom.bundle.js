// tags/layout.marko.persisted.mjs
const $template$1 = "<section class=shell><!></section>";
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
const $Widget_content__walks = "b%c", $Widget_content__template = "<!><!><!>", $Home_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Home_content__template = /*@__PURE__*/ ((_w0) => `<p class=home>welcome home</p>${_w0}<!>`)($Widget_content__template), $Dashboard_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Widget_content__walks), $Dashboard_content__template = /*@__PURE__*/ ((_w0) => `<h2 class=dash>Dashboard</h2>${_w0}<!>`)($Widget_content__template);
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
const $count = _var_resume("a11", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a8": [$Dashboard_content__template, $Dashboard_content__walks],
	"a6": [$Dashboard_content__template, $Dashboard_content__walks],
	"a9": [$Home_content__template, $Home_content__walks],
	"a5": [$Home_content__template, $Home_content__walks],
	"a10": [$Widget_content__template, $Widget_content__walks],
	"a4": [$Widget_content__template, $Widget_content__walks],
	"a1": [$template, $walks],
	"a": [$template, $walks]
});
const $count_seed = _update_signal("a11");
const $Dashboard_content__construct = ($scope) => {
	_construct_child($scope, "a", "a4", $scope._);
};
const $Dashboard_content__update = ($patch, $live) => {
	if ("a" in $patch) _update_child($patch["a"], $live["a"], "a4");
};
const $Home_content__construct = ($scope) => {
	_construct_child($scope, "a", "a4", $scope._);
};
const $Home_content__update = ($patch, $live) => {
	if ("a" in $patch) _update_child($patch["a"], $live["a"], "a4");
};
const $Widget_content__update = ($patch, $live) => {
	if ("Da" in $patch || "Aa" in $patch) _update_dynamic($patch, $live, "Da", "Aa");
};
const $construct = ($scope) => {
	_text($scope.b, $scope.e);
	_construct_child($scope, "c", "b1");
	_construct_effect($scope, $setup__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("e" in $patch) _update_seed($live, $count_seed, $patch["e"]);
	if ("c" in $patch) $merge$1($patch["c"], $live["c"]);
};
_construct("a8", $Dashboard_content__construct);
_construct("a9", $Home_content__construct);
_construct("a1", $construct);
_update_content("a6", $Dashboard_content__update, $Dashboard_content__construct);
_update_content("a5", $Home_content__update, $Home_content__construct);
const $noop_update = () => {};
_update_content("a3", $noop_update);
_update_content("a4", $Widget_content__update);
_update_content("a2", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a7", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
