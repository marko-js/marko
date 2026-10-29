// template.marko
const $Counter_content__walks = "E%c%l l";
const $Counter_content__template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
_shells({
	a: "a !; ;<main></main>",
	a5: /*@__PURE__*/ (() => `a5 !>a>a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Counter_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Counter_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Counter = { content: _content("a0", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let n = input.start;
		_html(`<div class=counter><span>${_text_resume($scope2_id, "a", input.label, 1, $scope2_reason, 1)}: ${_text_resume($scope2_id, "b", n, 2)}</span><button class=inc>+</button>${_el_resume($scope2_id, "c")}</div>`);
		_script($scope2_id, "a1");
		_filled_guard($scope2_reason, 0) && _patch_fill($scope2_id, "va2", n, 1);
		_scope($scope2_id, { h: n });
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0, 0, $scope0_id);
			Counter.content({
				label: input.title,
				start: input.start
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a3");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a4");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.title,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.start
	}) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va6", input.title, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va7", input.start, !_server_guard($scope0_reason, 3)));
}, 1);
