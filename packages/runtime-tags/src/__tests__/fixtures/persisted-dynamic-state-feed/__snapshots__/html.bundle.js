// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let active = false;
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_a_default : null, { label: active });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason ? _scope($scope0_id, {
		e: input.on,
		f: active
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.on);
	_resume_branch($scope0_id);
}, 1, 1);
