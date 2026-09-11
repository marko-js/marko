// template.marko
_shells({ a: "a !a0; b ;<div></div><button>+</button>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div></div>${_el_resume($scope0_id, "a")}<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_effect($scope0_id, "a1", "e");
	$scope0_reason ? _scope($scope0_id, {
		e: input.label,
		f: count
	}) : _filled_guard($scope0_owned, 0) && _patch_write($scope0_id, "e", input.label);
}, 1, 0);
