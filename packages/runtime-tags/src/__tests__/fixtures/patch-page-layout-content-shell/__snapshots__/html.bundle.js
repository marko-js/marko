// tags/layout.marko
const $template = "<main><!></main>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<main><!></main>" });
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `E/${_w0}&m`)("D%l")};${((_w0) => `<html><body>${_w0}</body></html>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_html(`<html>${_flush_head()}<body>`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	layout_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<p>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "b", n, 2)}</p><button>+</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a0");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}), _client_guard($scope0_reason, 0) && "a1");
	}, $scope0_id) });
	_patch_child_end();
	_trailers("</body></html>");
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
