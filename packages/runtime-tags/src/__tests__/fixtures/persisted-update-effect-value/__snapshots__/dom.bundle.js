// template.marko
const $label = /*@__PURE__*/ _const_persisted(3, _script_update("a0", ($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
}));
enableBranchesPersisted();

// template.marko.update.mjs
const $label_update = _update_signal("a1");
const $update = (_patch, _live) => {
	_update_pair(_patch, _live);
	if ("d" in _patch) $label_update(_live, _patch["d"]);
};
const _merge = _resume("a2", $update);
_update_content("a", _merge);
function _createPatch() {
	return createPatch(_merge);
}
