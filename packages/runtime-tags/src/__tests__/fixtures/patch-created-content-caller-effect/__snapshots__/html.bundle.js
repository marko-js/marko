// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({
	c: "c !;b%;<!><!><!>",
	c1: "c1;D%;<div><!></div>"
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "a", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c1"], $scope0_reason, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.body }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "vc2", input.body, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.body));
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	b3: "b3",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_count = _client_guard($scope0_reason, 1), $wi__input_count = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_count__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		body: attrTag({ content: _content_resume("b3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<p>body</p>");
			_script($scope1_id, "b0", 0);
			_filled_guard($scope0_reason, 1) && _patch_effect($scope1_id, $cg__input_count ? "hb0" : "eb0", ">e");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_count ? "b1" : "b2");
			_subscribe($wi__input_count && $input_count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id) })
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: input.count,
		f: $wi__input_count && $input_count__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.count, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1], ["d>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks, $walks)};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "c", 0);
	child_default({
		show: input.show,
		count
	});
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "d", 1);
	child_default({
		show: input.show,
		count: input.count
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		i: count,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
