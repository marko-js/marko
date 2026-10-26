// tags/reader.marko
_shells({ b: "b; ;<output></output>" });
var reader_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ c: "c !;b%;<!><!><!>" });
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_then__OR__input_x = _write_guard($scope0_reason, 0), $cg__input_x = _client_guard($scope0_reason, 2), $cg__input_then = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.then, { x: input.x }, 0, 0, $wg__input_then__OR__input_x, void 0, 1, $scope0_reason, 0, 0, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.then,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.x
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_x && _patch_fill($scope0_id, "vc0", input.then, !_server_guard($scope0_reason, 1)), $cg__input_x && _content_withhold(input.then), _filled_guard($scope0_reason, 2) && $cg__input_then && _patch_fill($scope0_id, "vc1", input.x, !_server_guard($scope0_reason, 2)), $cg__input_then && _content_withhold(input.x));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope2 = _patch_child($scope0_id, "a");
	wrap_default({
		x: input.v,
		then: attrTag({ content: _content_resume("a1", ({ x }) => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "a");
			reader_default({ get: _bind_resume(function() {
				return x;
			}, "a0", $scope1_id) });
			$scope1_page && _scope($scope1_id, {
				d: x,
				a: _existing_scope($childScope)
			});
		}, $scope0_id, void 0, 1) })
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
