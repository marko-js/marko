// tags/field.marko
const $template$6 = "<label> </label><input>";
const $walks$4 = " D l b";
const $setup$7 = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", 0, 0)}>${_text_resume($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "c", 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	_scope($scope0_id, {});
});

// tags/forward.marko
const $template$5 = "<section><!></section>";
const $setup$6 = [[], []];
_shells({ g: "g;D%;<section><!></section>" });
var forward_default = _template("g", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/forward-body.marko
const $template$4 = $template$5;
const $walks$3 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$5 = _shell_setup([[], []], ["a>", $setup$6]);
_shells({
	d1: "d1;b%;<!><!><!>",
	d: /*@__PURE__*/ ((_w0) => `d${_shell_marker($setup$5)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$5)
});
var forward_body_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	forward_default({ content: _content("d1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "d0");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_content && _unfilled_if($scope0_reason, 0) && $input_content__closures,
		a: _existing_scope($childScope)
	});
});

// tags/forward-attr.marko
const $template$3 = $template$5;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$4 = _shell_setup([[], []], ["a>", $setup$6]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$4)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$5) });
var forward_attr_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	forward_default({ content: input.content });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// tags/forward-define.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks);
const $setup$3 = [[], []];
_shells({
	e0: /*@__PURE__*/ ((_w0, _w1) => `e0;${_w0};${_w1}`)($Wrap_content2__walks, $Wrap_content2__template),
	e2: "e2;b%;<!><!><!>",
	e: /*@__PURE__*/ (() => `e;${((_w0) => `b/${_w0}&b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template)}`)()
});
var forward_define_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Wrap = { content: _content("e0", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "a", content, {}, 2, 0, 0, $wg__content, $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id, 1) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 2);
	Wrap.content({ content: _content("e2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "e1");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id, 1) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_content && $input_content__closures,
		a: _existing_scope($childScope)
	});
});

// tags/forward-inner.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $setup$2 = [["a>"], []];
_shells({
	f0: /*@__PURE__*/ ((_w0, _w1) => `f0;${_w0};${_w1}`)($Inner_content__walks, $Inner_content__template),
	f: /*@__PURE__*/ (() => `f a>;${((_w0) => `b/${_w0}&b`)($Inner_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Inner_content__template)}`)()
});
var forward_inner_default = _template("f", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const Inner = { content: _content("f0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_content ? "f1" : "f2");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_content && "f2", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "a", 1);
	Inner.content({});
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_content && $input_content__closures,
		a: _existing_scope($childScope)
	});
});

// tags/named.marko
const $template = "<!><!><!>";
const Named = field_default;
const $setup$1 = [[], []];
_shells({ h: "h;b%;<!><!><!>" });
var named_default = _template("h", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", Named, {
		label: "named",
		content: input.content
	}, 1, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$6], ["b>", $setup$6], ["c>", $setup$5], ["d>", $setup$5], ["e>", $setup$4], ["f>", $setup$6], ["g>", $setup$3], ["h>", $setup$3], ["i>", $setup$2], ["j>", $setup$2], ["k>", $setup$1]);
_shells({
	a11: /*@__PURE__*/ ((_w0) => `a11${_shell_marker(_shell_setup([[], []], ["a>", $setup$7]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$4)};${_w0}`)($template$6),
	a10: "a10,<em>none</em>",
	a0: /*@__PURE__*/ ((_w0) => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup$7]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$4)};${_w0}`)($template$6),
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&%c`)("D%l", "D%l", $walks$3, $walks$3, $walks$2, "D%l", $walks$1, $walks$1, $walks, $walks, "b%c")};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}<!><!>`)($template$5, $template$5, $template$4, $template$4, $template$3, $template$5, $template$2, $template$2, $template$1, $template$1, $template)}`)(),
	a12: /*@__PURE__*/ ((_w0) => `a12${_shell_marker(_shell_setup([[], []], ["a>", $setup$5]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3)};${_w0}`)($template$4)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Labeled = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		field_default({ label: "defined" });
		_patch_child_end();
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, $scope0_id, 1) };
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "a", 2);
	forward_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
		field_default({ label: "direct" });
		_patch_child_end();
		_scope($scope2_id, { a: _existing_scope($childScope2) });
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope4 = _peek_scope_id($scope0_id, "b", 3);
	forward_default({ content: _content("a2", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope6 = _peek_scope_id($scope0_id, "c", 5);
	forward_body_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_set_scope_reason(0);
		const $childScope5 = _peek_scope_id($scope4_id, "a", 4);
		field_default({ label: "body" });
		_patch_child_end();
		_scope($scope4_id, { a: _existing_scope($childScope5) });
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope7 = _peek_scope_id($scope0_id, "d", 6);
	forward_body_default({ content: _content("a4", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope9 = _peek_scope_id($scope0_id, "e", 8);
	forward_attr_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope6_id = _scope_id();
		_set_scope_reason(0);
		const $childScope8 = _peek_scope_id($scope6_id, "a", 7);
		field_default({ label: "attr" });
		_patch_child_end();
		_scope($scope6_id, { a: _existing_scope($childScope8) });
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope10 = _peek_scope_id($scope0_id, "f", 9);
	forward_default({ content: Labeled });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope12 = _peek_scope_id($scope0_id, "g", 11);
	forward_define_default({ content: _content("a6", () => {
		_scope_reason();
		const $scope7_id = _scope_id();
		_set_scope_reason(0);
		const $childScope11 = _peek_scope_id($scope7_id, "a", 10);
		field_default({ label: "define" });
		_patch_child_end();
		_scope($scope7_id, { a: _existing_scope($childScope11) });
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope13 = _peek_scope_id($scope0_id, "h", 12);
	forward_define_default({ content: _content("a7", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope15 = _peek_scope_id($scope0_id, "i", 14);
	forward_inner_default({ content: _content("a8", () => {
		_scope_reason();
		const $scope9_id = _scope_id();
		_set_scope_reason(0);
		const $childScope14 = _peek_scope_id($scope9_id, "a", 13);
		field_default({ label: "inner" });
		_patch_child_end();
		_scope($scope9_id, { a: _existing_scope($childScope14) });
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope16 = _peek_scope_id($scope0_id, "j", 15);
	forward_inner_default({ content: _content("a9", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope17 = _peek_scope_id($scope0_id, "k", 16);
	named_default({ content: _content("a10", () => {
		_scope_reason();
		_scope_id();
		_html("<em>none</em>");
	}, $scope0_id, 1) });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			_set_scope_reason(0);
			const $childScope19 = _peek_scope_id($scope12_id, "a", 18);
			forward_body_default({ content: _content("a11", () => {
				_scope_reason();
				const $scope13_id = _scope_id();
				_set_scope_reason(0);
				const $childScope18 = _peek_scope_id($scope13_id, "a", 17);
				field_default({ label: "created" });
				_patch_child_end();
				_scope($scope13_id, { a: _existing_scope($childScope18) });
			}, $scope12_id, 1) });
			_patch_child_end();
			_scope($scope12_id, { a: _existing_scope($childScope19) });
			return 0;
		}
	}, $scope0_id, "l", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a12"], $scope0_reason, 0);
	_scope($scope0_id, {
		a: _existing_scope($childScope3),
		b: _existing_scope($childScope4),
		c: _existing_scope($childScope6),
		d: _existing_scope($childScope7),
		e: _existing_scope($childScope9),
		f: _existing_scope($childScope10),
		g: _existing_scope($childScope12),
		h: _existing_scope($childScope13),
		i: _existing_scope($childScope15),
		j: _existing_scope($childScope16),
		k: _existing_scope($childScope17)
	});
}, 1);
