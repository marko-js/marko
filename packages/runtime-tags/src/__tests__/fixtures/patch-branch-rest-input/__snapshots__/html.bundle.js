// template.marko
_shells({ a: "a !a0; D l%;<button> </button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { label, ...rest } = input;
	let on = true;
	_html(`<button>${_text_resume($scope0_id, "b", label, 1, $scope0_reason, 0)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: input.show,
		h: on
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.show, !_server_guard($scope0_reason, 1));
}, 1);
