// template.marko
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $global_mode_key = /*@__PURE__*/ _global_key(2, "mode");
const $global_mode__script = _script("a0", ($scope) => {
	$global_mode.r($scope);
	_on($scope.a, "click", handlers[$scope.$.mode]);
});
const $global_mode = /*@__PURE__*/ _global_closure("a2", $global_mode_key, $global_mode__script);
