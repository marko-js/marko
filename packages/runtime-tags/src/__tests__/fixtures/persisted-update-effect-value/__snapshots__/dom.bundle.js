// template.marko.persisted.mjs
const $template = "<div class=target></div><p class=static>page body</p>";
const $walks = "c";
const $label__script = _script_shared(($scope) => {
	{
		const el = document.querySelector("div.target");
		el.dataset.label = $scope.d;
		el.textContent = `effect saw ${$scope.d}`;
	}
});
const $label = _var_resume("a2", /*@__PURE__*/ _const_persisted(3, $label__script));
_static_shells({
	"a0": [$template, "c"],
	"a": [$template, "c"]
});
const $label_update = _update_signal("a2");
const $construct = ($scope) => {
	_construct_effect($scope, $label__script);
};
const $update2 = ($patch, $live) => {
	_update_pair($patch, $live);
	if ("d" in $patch) $label_update($live, $patch["d"]);
};
_construct("a0", $construct);
const $merge = _resume("a0", $update2);
_update_content("a", $merge, $construct);
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
