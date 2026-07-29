// tags/mounter.marko.persisted.mjs
const $template$2 = "";
const $walks$2 = "";
const $input_onReady__script = _script_shared(($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));
const $input_onReady = _var_resume("c2", /*@__PURE__*/ _const_persisted(2, $input_onReady__script));
_static_shells({
	"c0": ["", ""],
	"c": ["", ""]
});
const $input_onReady_update = _update_signal("c2");
const $construct$1 = ($scope) => {
	_construct_effect($scope, $input_onReady__script);
};
const $update2$2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("c" in $patch) $input_onReady_update($live, $patch["c"]);
};
_construct("c0", $construct$1);
const $merge$2 = _resume("c0", $update2$2);
_update_content("c", $merge$2, $construct$1);

// tags/layout.marko.persisted.mjs
const $template$1 = "<section><!></section>";
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
const $Reports_content__walks = "b%c", $Reports_content__template = "<!><!><!>", $try_content__walks = "b%c", $try_content__template = "<!><!><!>", $await_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%bD%c%l`)(""), $await_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><p class=status><!> of <!></p>`)("");
const $template = /*@__PURE__*/ ((_w0) => `<button class=count>clicked <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%b`)("D%l");
_enable_catch();
const $await_content__ready = _var_resume("a12", /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "ready" : "waiting")));
const $count = _var_resume("a13", /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e)));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
_static_shells({
	"a4": [$await_content__template, $await_content__walks],
	"a10": [$await_content__template, $await_content__walks],
	"a7": [$try_content__template, $try_content__walks],
	"a6": [$try_content__template, $try_content__walks],
	"a11": [$Reports_content__template, $Reports_content__walks],
	"a8": [$Reports_content__template, $Reports_content__walks],
	"a2": [$template, $walks],
	"a": [$template, $walks]
});
const $ready_seed = _update_signal("a12");
const $await_content_holes = /*@__PURE__*/ _update_scopes({
	"Qc": /*@__PURE__*/ _update_construct(/*@__PURE__*/ _update_text("c")),
	"Qd": /*@__PURE__*/ _update_text("d")
});
const $count_seed = _update_signal("a13");
const $await_content__construct = ($scope) => {
	_construct_child($scope, "a", "c0");
};
const $await_content__update = ($patch, $live) => {
	if ("h" in $patch) _update_seed($live, $ready_seed, $patch["h"]);
	$await_content_holes($patch, $live);
	if ("a" in $patch) $merge$2($patch["a"], $live["a"]);
};
const $try_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $await_content__update, "a4");
};
const $Reports_content__update = ($patch, $live) => {
	if ("Aa" in $patch) _update_branch($patch, $live, "a", $try_content__update, "a7", "a5");
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
_construct("a4", $await_content__construct);
_construct("a2", $construct);
_update_content("a4", $await_content__update);
const $noop_update = () => {};
_update_content("a5", $noop_update);
_update_content("a7", $try_content__update);
_update_content("a8", $Reports_content__update);
_update_content("a3", $noop_update);
const $merge = _resume("a2", $update2);
_update_content("a", $merge, $construct);
function $patch2($fail) {
	return patch($merge, $fail);
}

// tags/mounter.marko
const $input_onReady__script = _script_update("c1", ($scope) => _lifecycle($scope, { onMount: function() {
	$scope.c();
} }));

// template.marko
_enable_catch();
const $await_content__ready = /*@__PURE__*/ _let_persisted(7, ($scope) => _text($scope.c, $scope.h ? "ready" : "waiting"));
const $placeholder_content = _content_resume("a5", "<p class=loading>loading…</p>");
const $count = /*@__PURE__*/ _let_persisted(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script_update("a9", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.e + 1);
}));
function $onReady($scope) {
	return function() {
		$await_content__ready($scope, true);
	};
}
_resume("a0", $onReady);
