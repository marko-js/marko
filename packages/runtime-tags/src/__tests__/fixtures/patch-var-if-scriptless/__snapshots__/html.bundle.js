// tags/child.marko
const $template = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var child_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</span>`);
	const $return = input.label + "!";
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a0: /*@__PURE__*/ (() => `a0;${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template)}`)()
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			let x = child_default({ label: input.label });
			_client_guard($scope0_reason, 2) && _var($scope1_id, "b", $childScope, "a1");
			_html(`<p>${_patch_text($scope1_id, "c", x, void 0, $scope0_reason, 2)}</p>`);
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: input.label }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a2", input.label);
}, 1);
