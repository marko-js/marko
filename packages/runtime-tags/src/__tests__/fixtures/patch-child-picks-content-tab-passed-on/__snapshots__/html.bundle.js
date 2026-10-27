// tags/view.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var view_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
});

// tags/tabs.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	view_default({ content: [...input.tab].find((t) => t.active)?.content });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["b>", $setup$1]);
_shells({
	a2: "a2 a6;b%;B<!>",
	a1: "a1;b%;A<!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)($walks)};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
	tabs_default({ tab: attrTags(attrTag({
		active: input.x === 1,
		content: _content_elide("a1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`A${_patch_text($scope1_id, "a", input.y, 2, $scope0_reason, 2)}`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
		}, $scope0_id)
	}), {
		active: input.x === 2,
		content: _content_elide("a2", () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "a", s, 2)}`);
			$scope2_page && _subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id)
	}) });
	_patch_child_end();
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		g: s,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_y__closures,
		i: $s__closures,
		b: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.y, !_server_guard($scope0_reason, 2));
}, 1);
