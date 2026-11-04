// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_end = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let start = 0;
	_html("<main>");
	_for_to(input.end, Math.max(0, start), 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_escape(i)}</span>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_end && "e");
	_scope($scope0_id, {
		e: input.end,
		f: start
	}) || $fg__input_end && _patch_write($scope0_id, "xe", input.end, !_server_guard($scope0_reason, 0));
}, 1);
