// tags/tabs.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({ b: "b;b%;<!><!><!>" });
var tabs_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tab = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const active = [...input.tab].find((t) => t.active);
	_dynamic_tag($scope0_id, "a", active?.content, {}, 2, 0, 0, $wg__input_tab, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["a3"]], ["b>", $setup$1]);
_shells({
	a2: "a2 a6;b%;B<!>",
	"~a2": "~a2 a6;b%;B<!>",
	a1: "a1;b%;A<!>",
	"~a1": "~a1;b%;A<!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=s>s</button>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_y__closures = /* @__PURE__ */ new Set();
	const $s__closures = /* @__PURE__ */ new Set();
	let s = 0;
	_html(`<button class=s>s</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	tabs_default({ tab: attrTags(attrTag({
		active: input.x === 1,
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`A${_text_resume($scope1_id, "a", input.y, 2, $scope0_reason, 2)}`);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_y__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
		}, $scope0_id, 1)
	}), {
		active: input.x === 2,
		content: _content("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`B${_text_resume($scope2_id, "a", s, 2)}`);
			_subscribe($s__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id, 1)
	}) });
	_patch_child_end();
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.y,
		g: s,
		h: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_y__closures,
		i: $s__closures,
		b: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.y, !_server_guard($scope0_reason, 2));
}, 1);
