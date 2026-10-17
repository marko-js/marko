// template.marko
const $row_content__walks = "D%c%l";
const $row_content__template = "<li><!>: <!></li>";
_shells({
	a: "a !; ;<ul></ul>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)($row_content__walks, $row_content__walks)};${/*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($row_content__template, $row_content__template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	const row = { content: _content("a1", (label) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<li>${_patch_text($scope1_id, "a", label, void 0, $scope1_reason, 0)}: ${_patch_text($scope1_id, "b", input.suffix, 2, $scope0_reason, 1)}</li>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_suffix__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "a2");
	}, $scope0_id) };
	_html("<ul>");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope2_id, "a", $scope0_id);
			row.content("a");
			_set_scope_reason(0);
			const $childScope2 = _patch_child($scope2_id, "b", $scope0_id);
			row.content("b");
			_scope($scope2_id, {
				a: _existing_scope($childScope),
				b: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 2);
	_html(`</ul>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.suffix,
		f: _write_if($scope0_reason, 1) && $input_suffix__closures
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "va3", input.suffix, !_server_guard($scope0_reason, 1));
}, 1);
