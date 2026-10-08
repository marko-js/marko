// tags/loader.marko
const $template = "<div class=ld><!></div>";
_shells({
	b0: "b0; ; ",
	b1: "b1; ; ",
	b: "b;D%;<div class=ld><!></div>"
});
var loader_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(_patch_text($scope1_id, "a", v, void 0, $scope0_reason, 0));
		_scope($scope1_id, {});
	}, 1, "b0", 1);
	_html("</div>");
});

// template.marko
_shells({
	a: "a !; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template),
	a1: "a1,<em>closed</em>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			loader_default({ promise: input.promise });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_page && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a0", "a1"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	$scope0_page ? _scope($scope0_id, { e: input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a2", input.promise);
}, 1);
