// tags/child.marko
const $template = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;D l ;<p> </p><div></div>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const c = input.b + "!";
			_filled_guard($scope0_reason, 3) && _patch_write($scope1_id, "wc", c, !_server_guard($scope0_reason, 3));
			_html(`<p>${_patch_text($scope1_id, "a", input.a + c, void 0, $scope0_reason, 1)}</p><div></div>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b1", 1, _client_guard($scope0_reason, 3));
			_server_guard($scope0_reason, 3) && _patch_effect($scope1_id, "eb1", "c");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b2");
			_patch_join_init($scope1_id, "b3", $scope0_reason, 1);
			_scope($scope1_id, {
				c,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 2);
	_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb5", input.a) : _patch_write($scope0_id, "wf", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3)));
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	}) : _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 3));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 3) << 7 | _mask_group($scope0_reason, 2) << 9);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.y,
		b: input.x,
		show: input.show
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
