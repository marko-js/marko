// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_min = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<main>");
	_if(() => {
		if (count > input.min) {
			const $scope1_id = _scope_id();
			_html("<p>over</p>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_min && "e");
	_scope($scope0_id, {
		e: input.min,
		f: count
	}) || $fg__input_min && _patch_write($scope0_id, "xe", input.min, !_server_guard($scope0_reason, 0));
}, 1);
