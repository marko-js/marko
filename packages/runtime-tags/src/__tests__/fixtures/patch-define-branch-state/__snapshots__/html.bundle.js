// template.marko
const $Counter_content__walks = "E%c%l l";
const $Counter_content__template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
_shells({
	a0: "a0 !a2;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>",
	a: "a !; ;<main></main>",
	a1: /*@__PURE__*/ (() => `a1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Counter_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Counter_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Counter = { content: _content_elide("a0", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let n = input.start;
		_html(`<div class=counter><span>${_patch_text($scope2_id, "a", input.label, void 0, $scope2_reason, 0)}: ${_text_resume($scope2_id, "b", n, 2)}</span><button class=inc>+</button>${_el_resume($scope2_id, "c")}</div>`);
		_script($scope2_id, "a2");
		_patch_value($scope2_id, "va3", n, 1);
		_scope($scope2_id, { h: n });
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			Counter.content({
				label: input.title,
				start: input.start
			});
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		e: _unfilled_if($scope0_reason, 1) && input.title,
		f: _unfilled_if($scope0_reason, 1) && input.start
	}) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va4", input.title), _filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "va5", input.start));
}, 1);
