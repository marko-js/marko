// template.marko
_shells({ a: "a !a0; E l ;<main><p> </p><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const uid = _id();
	console.log(input.title);
	_html(`<main${_patch_attr($scope0_id, "a", "data-id", uid, 0, 0)}><p>${_text_resume($scope0_id, "b", count)}</p><button>+</button>${_el_resume($scope0_id, "c")}</main>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_patch_effect($scope0_id, "a1", "f");
	$scope0_reason ? _scope($scope0_id, {
		f: input.value,
		h: count
	}) : _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "f", input.value);
}, 1, 0);
