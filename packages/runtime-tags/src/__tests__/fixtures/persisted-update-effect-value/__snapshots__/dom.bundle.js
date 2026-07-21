// template.marko.persisted.mjs
const $label = _var_resume("a2", /*@__PURE__*/ _const_persisted(3, _script_shared(($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
})));
const $label_update = _update_signal("a2");
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) $label_update($live, $patch["d"]);
};
const $merge = _resume("a0", $update2);
_update_content("a", $merge);
function $patch2($fail) {
	return patch($merge, $fail);
}

// template.marko
const $label = /*@__PURE__*/ _const_persisted(3, _script_update("a1", ($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
}));
