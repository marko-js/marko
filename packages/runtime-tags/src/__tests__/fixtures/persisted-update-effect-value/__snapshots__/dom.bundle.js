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
const $update = (patch, live) => {
	_update_pair(patch, live);
	if ("d" in patch) $label_update(live, patch["d"]);
};
var template_marko_update_default = _resume("a2", $update);
