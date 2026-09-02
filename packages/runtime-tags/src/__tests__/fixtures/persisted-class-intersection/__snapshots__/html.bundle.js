// template.marko
_shells({
	a: "a !a1;D b b%;<main><button>+</button><span>parity</span><!></main>",
	a0: "a0; ;<em>note</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><button${_attr_class([
		"btn",
		input.tone,
		count % 2 && "odd"
	])}>+</button>${_el_resume($scope0_id, "a")}<span class=${count % 2 ? "odd" : "even"}>parity</span>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em${_patch_attr_class($scope1_id, "a", input.tone, $scope0_owned, 1)}>note</em>${_el_resume($scope1_id, "a")}`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_owned, 2);
	_html("</main>");
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		f: input.tone,
		h: count
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.tone);
	_resume_branch($scope0_id);
}, 1, 0);
