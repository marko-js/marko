// tags/widget/index.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: "b0,<em>open</em>"
});
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_open = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_html("<em>open</em>");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["b0"], $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_o = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			widget_default({ open: input.o });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_o && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.o,
		f: show
	}) || $fg__input_o && _patch_write($scope0_id, "xe", input.o, !_server_guard($scope0_reason, 0));
}, 1);
