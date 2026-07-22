// template.marko.persisted.mjs
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = /*@__PURE__*/ _content("a3", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=note> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, $scope._._.g));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get(8, ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get(9, ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(2, "<section><!></section>", "D%l", $if_content__setup);
const $show = _var_resume("a11", /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.b, $scope.h ? "hide" : "show");
	$if($scope, $scope.h ? 0 : 1);
}));
const $setup__script = _script_shared(($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
const $show_seed = _update_signal("a11");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("h" in $patch) _update_seed($live, $show_seed, $patch["h"]);
	if ("f" in $patch) $live["f"] = $patch["f"];
	if ("g" in $patch) $live["g"] = $patch["g"];
};
const $noop_update = () => {};
_update_content("a3", $noop_update);
const $merge = _resume("a1", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
_enable_catch();
const $await_content__note = ($scope, note) => _text($scope.a, note);
const $await_content__$params = ($scope, $params2) => $await_content__note($scope, $params2[0]);
const $placeholder_content = _content_resume("a3", "loading…", "b");
const $await_content = /*@__PURE__*/ _await_content(0, "<p class=note> </p>", "D l");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $try_content__input_note__OR__input_tick = /*@__PURE__*/ _or(1, ($scope) => {
	if (!updating) $try_content__await_promise($scope, resolveAfter($scope._._.f, $scope._._.g));
});
const $try_content__input_note = /*@__PURE__*/ _closure_get(8, ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $try_content__setup = ($scope) => {
	if (!updating) $try_content__input_note($scope);
	if (!updating) $try_content__input_tick($scope);
	$await_content($scope);
};
const $try_content__input_tick = /*@__PURE__*/ _closure_get(9, ($scope) => {
	if (!updating) $try_content__input_note__OR__input_tick($scope);
}, ($scope) => $scope._._);
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if(2, "<section><!></section>", "D%l", $if_content__setup);
const $show = /*@__PURE__*/ _let_persisted(7, ($scope) => {
	_text($scope.b, $scope.h ? "hide" : "show");
	$if($scope, $scope.h ? 0 : 1);
});
const $setup__script = _script_update("a6", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.h);
}));
