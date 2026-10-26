// layout.marko
const $template = "<html><body><main><!><!></main></body></html>";
const $walks = "F%b%n";
const $setup$1 = [[], []];
_shells({
	a: "a !;F%b%;<html><body><main><!><!></main></body></html>",
	a1: "a1;D ;<p> </p>"
});
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 4), $wg__input_content = _write_guard($scope0_reason, 7), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_html(`<html>${_flush_head()}<body><main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a1"], $scope0_reason, 4);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 7);
	_html("</main>"), _trailers("</body></html>");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.a,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.b
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_show ? _patch_fill($scope0_id, "va3", input.a) : _client_guard($scope0_reason, 6) && _patch_fill($scope0_id, "va2", input.a, !_server_guard($scope0_reason, 5))), _filled_guard($scope0_reason, 6) && ($cg__input_show ? _patch_fill($scope0_id, "va5", input.b) : _client_guard($scope0_reason, 5) && _patch_fill($scope0_id, "va4", input.b, !_server_guard($scope0_reason, 6))));
}, 1);

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let a = 1;
	_set_scope_reason(2534 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 13));
	const $childScope = _patch_child($scope0_id, "a");
	layout_default({
		a,
		b: input.b,
		show: input.show,
		content: _content("b1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<button>inc</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		f: a,
		a: _existing_scope($childScope)
	});
}, 1);
