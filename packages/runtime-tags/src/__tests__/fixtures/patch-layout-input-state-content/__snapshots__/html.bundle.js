// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c1: "c1;D%;<div><!></div>"
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c0");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c1"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vc2", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// layout.marko
const $template = /*@__PURE__*/ ((_w0) => `<html><body><main>${_w0}<!></main></body></html>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `F/${_w0}&%n`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	a0: "a0,<b>shown</b>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup$1)};${((_w0) => `F/${_w0}&%n`)("b%c")};${((_w0) => `<html><body><main>${_w0}<!></main></body></html>`)($template$1)}`)()
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	wrap_default({
		show: input.open,
		content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<b>shown</b>");
		}, $scope0_id)
	});
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</main>"), _trailers("</body></html>");
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	layout_default({
		open,
		content: _content("b1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<button>toggle</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		b: open,
		a: _existing_scope($childScope)
	});
}, 1);
