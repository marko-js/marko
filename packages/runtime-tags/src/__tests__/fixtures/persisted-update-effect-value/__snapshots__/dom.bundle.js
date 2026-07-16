// template.marko
const $label = /*@__PURE__*/ _const_persisted(3, _script_update("a1", ($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
}));

// template.marko.persisted.mjs
const $label = _var_resume("a2", /*@__PURE__*/ _const_persisted(3, _script_shared(($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
})));
const $label_update = _update_signal("a2");
const $update2 = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) $label_update(_live, _patch["d"]);
};
const _merge = _resume("a0", $update2);
_update_content("a", _merge);
function _patch2(_fail) {
	return patch(_merge, _fail);
}
