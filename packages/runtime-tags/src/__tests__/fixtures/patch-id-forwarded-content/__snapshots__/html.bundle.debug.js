// tags/field.marko
const $template$7 = "<label> </label><input>";
const $walks$7 = " D l b";
const $setup$7 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", 0, 0)}>${_text_resume($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "#label/0", 0)}<input${_attr("id", uid, $scope0_id, "#input/2", 0, 0)}>${_el_resume($scope0_id, "#input/2", 0)}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/forward.marko
const $template$6 = "<section><!></section>";
const $walks$6 = "D%l";
const $setup$6 = [[], []];
_shells({ "__tests__/tags/forward.marko": "__tests__/tags/forward.marko;D%;<section><!></section>" });
var forward_default = _template("__tests__/tags/forward.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/forward.marko", 0);
});

// tags/forward-body.marko
const $template$5 = $template$6;
const $walks$5 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$5 = _shell_setup([[], []], ["#childScope/0>", $setup$6]);
_shells({
	"__tests__/tags/forward-body.marko_1*content": "__tests__/tags/forward-body.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/forward-body.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/forward-body.marko${_shell_marker($setup$5)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$6)
});
var forward_body_default = _template("__tests__/tags/forward-body.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	forward_default({ content: _content_elide("__tests__/tags/forward-body.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/forward-body.marko_1_input_content#0:3/init");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-body.marko", "1:2"));
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_content/4": $wi__input_content && _unfilled_if($scope0_reason, 0) && $input_content__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/forward-body.marko", 0);
});

// tags/forward-attr.marko
const $template$4 = $template$6;
const $walks$4 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$4 = _shell_setup([[], []], ["#childScope/0>", $setup$6]);
_shells({ "__tests__/tags/forward-attr.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/forward-attr.marko${_shell_marker($setup$4)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$6) });
var forward_attr_default = _template("__tests__/tags/forward-attr.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	forward_default({ content: input.content });
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/forward-attr.marko", 0);
});

// tags/forward-define.marko
const $Wrap_content2__walks = "b%c";
const $Wrap_content2__template = "<!><!><!>";
const $template$3 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template);
const $walks$3 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Wrap_content2__walks);
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/forward-define.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/forward-define.marko_2*content;${_w0};${_w1}`)($Wrap_content2__walks, $Wrap_content2__template),
	"__tests__/tags/forward-define.marko_1*content": "__tests__/tags/forward-define.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/forward-define.marko": /*@__PURE__*/ (() => `__tests__/tags/forward-define.marko;${((_w0) => `b/${_w0}&b`)($Wrap_content2__walks)};${((_w0) => `<!>${_w0}<!>`)($Wrap_content2__template)}`)()
});
var forward_define_default = _template("__tests__/tags/forward-define.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Wrap = { content: _content_elide("__tests__/tags/forward-define.marko_2*content", ({ content }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__content = _write_guard($scope2_reason, 0);
		_dynamic_tag($scope2_id, "#text/0", content, {}, 2, 0, 0, $wg__content, $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/forward-define.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 2);
	Wrap.content({ content: _content_elide("__tests__/tags/forward-define.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 10, 0, 0, $wg__input_content, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/tags/forward-define.marko_1_input_content#0:3/init");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-define.marko", "2:2"));
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_content/4": $wi__input_content && $input_content__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/forward-define.marko", 0);
});

// tags/forward-inner.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Inner_content__template);
const $walks$2 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Inner_content__walks);
const $setup$2 = [["#childScope/0>"], []];
_shells({
	"__tests__/tags/forward-inner.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/forward-inner.marko_1*content;${_w0};${_w1}`)($Inner_content__walks, $Inner_content__template),
	"__tests__/tags/forward-inner.marko": /*@__PURE__*/ (() => `__tests__/tags/forward-inner.marko #childScope/0>;${((_w0) => `b/${_w0}&b`)($Inner_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Inner_content__template)}`)()
});
var forward_inner_default = _template("__tests__/tags/forward-inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const Inner = { content: _content_elide("__tests__/tags/forward-inner.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_content ? "__tests__/tags/forward-inner.marko_1_input_content#0:3/init" : "__tests__/tags/forward-inner.marko_1_input_content#0:3/subscribe");
		$wi__input_content && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/forward-inner.marko", "1:2"), $cg__input_content && "__tests__/tags/forward-inner.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || $wi__input_content && _resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	Inner.content({});
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_content/4": $wi__input_content && $input_content__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/forward-inner.marko", 0);
});

// tags/named.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const Named = field_default;
const $setup$1 = [[], []];
_shells({ "__tests__/tags/named.marko": "__tests__/tags/named.marko;b%;<!><!><!>" });
var named_default = _template("__tests__/tags/named.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", Named, {
		label: "named",
		content: input.content
	}, 1, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/named.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}<!><!>`)($template$6, $template$6, $template$5, $template$5, $template$4, $template$6, $template$3, $template$3, $template$2, $template$2, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&%c`)("D%l", "D%l", $walks$5, $walks$5, $walks$4, "D%l", $walks$3, $walks$3, $walks$2, $walks$2, "b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$6], ["#childScope/1>", $setup$6], ["#childScope/2>", $setup$5], ["#childScope/3>", $setup$5], ["#childScope/4>", $setup$4], ["#childScope/5>", $setup$6], ["#childScope/6>", $setup$3], ["#childScope/7>", $setup$3], ["#childScope/8>", $setup$2], ["#childScope/9>", $setup$2], ["#childScope/10>", $setup$1]);
_shells({
	"__tests__/template.marko_13*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_13*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$7]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7)};${_w0}`)($template$7),
	"__tests__/template.marko_11*content": "__tests__/template.marko_11*content,<em>none</em>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$7]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$7)};${_w0}`)($template$7),
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `/${_w0}&/${_w1}&/${_w2}&/${_w3}&/${_w4}&/${_w5}&/${_w6}&/${_w7}&/${_w8}&/${_w9}&/${_w10}&%c`)("D%l", "D%l", $walks$5, $walks$5, $walks$4, "D%l", $walks$3, $walks$3, $walks$2, $walks$2, "b%c")};${((_w0, _w1, _w2, _w3, _w4, _w5, _w6, _w7, _w8, _w9, _w10) => `${_w0}${_w1}${_w2}${_w3}${_w4}${_w5}${_w6}${_w7}${_w8}${_w9}${_w10}<!><!>`)($template$6, $template$6, $template$5, $template$5, $template$4, $template$6, $template$3, $template$3, $template$2, $template$2, $template$1)}`)(),
	"__tests__/template.marko_12*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_12*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$5]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$5)};${_w0}`)($template$5)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Labeled = { content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		field_default({ label: "defined" });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope3 = _patch_child($scope0_id, "#childScope/0", 2);
	forward_default({ content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _patch_child($scope2_id, "#childScope/0", 1);
		field_default({ label: "direct" });
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "2:2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope4 = _patch_child($scope0_id, "#childScope/1", 3);
	forward_default({ content: _content("__tests__/template.marko_3*content", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope6 = _patch_child($scope0_id, "#childScope/2", 5);
	forward_body_default({ content: _content("__tests__/template.marko_4*content", () => {
		const $scope4_reason = _scope_reason();
		const $scope4_id = _scope_id();
		_set_scope_reason(0);
		const $childScope5 = _patch_child($scope4_id, "#childScope/0", 4);
		field_default({ label: "body" });
		_patch_child_end();
		_scope($scope4_id, { "#childScope/0": _existing_scope($childScope5) }, "__tests__/template.marko", "4:2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope7 = _patch_child($scope0_id, "#childScope/3", 6);
	forward_body_default({ content: _content("__tests__/template.marko_5*content", () => {
		const $scope5_reason = _scope_reason();
		const $scope5_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope9 = _patch_child($scope0_id, "#childScope/4", 8);
	forward_attr_default({ content: _content("__tests__/template.marko_6*content", () => {
		const $scope6_reason = _scope_reason();
		const $scope6_id = _scope_id();
		_set_scope_reason(0);
		const $childScope8 = _patch_child($scope6_id, "#childScope/0", 7);
		field_default({ label: "attr" });
		_patch_child_end();
		_scope($scope6_id, { "#childScope/0": _existing_scope($childScope8) }, "__tests__/template.marko", "6:2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope10 = _patch_child($scope0_id, "#childScope/5", 9);
	forward_default({ content: Labeled });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope12 = _patch_child($scope0_id, "#childScope/6", 11);
	forward_define_default({ content: _content("__tests__/template.marko_7*content", () => {
		const $scope7_reason = _scope_reason();
		const $scope7_id = _scope_id();
		_set_scope_reason(0);
		const $childScope11 = _patch_child($scope7_id, "#childScope/0", 10);
		field_default({ label: "define" });
		_patch_child_end();
		_scope($scope7_id, { "#childScope/0": _existing_scope($childScope11) }, "__tests__/template.marko", "8:2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope13 = _patch_child($scope0_id, "#childScope/7", 12);
	forward_define_default({ content: _content("__tests__/template.marko_8*content", () => {
		const $scope8_reason = _scope_reason();
		const $scope8_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope15 = _patch_child($scope0_id, "#childScope/8", 14);
	forward_inner_default({ content: _content("__tests__/template.marko_9*content", () => {
		const $scope9_reason = _scope_reason();
		const $scope9_id = _scope_id();
		_set_scope_reason(0);
		const $childScope14 = _patch_child($scope9_id, "#childScope/0", 13);
		field_default({ label: "inner" });
		_patch_child_end();
		_scope($scope9_id, { "#childScope/0": _existing_scope($childScope14) }, "__tests__/template.marko", "10:2");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope16 = _patch_child($scope0_id, "#childScope/9", 15);
	forward_inner_default({ content: _content("__tests__/template.marko_10*content", () => {
		const $scope10_reason = _scope_reason();
		const $scope10_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope17 = _patch_child($scope0_id, "#childScope/10", 16);
	named_default({ content: _content_elide("__tests__/template.marko_11*content", () => {
		const $scope11_reason = _scope_reason();
		const $scope11_id = _scope_id();
		_html("<em>none</em>");
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope12_id = _scope_id();
			_set_scope_reason(0);
			const $childScope19 = _patch_child($scope12_id, "#childScope/0", 18);
			forward_body_default({ content: _content_elide("__tests__/template.marko_13*content", () => {
				const $scope13_reason = _scope_reason();
				const $scope13_id = _scope_id();
				_set_scope_reason(0);
				const $childScope18 = _patch_child($scope13_id, "#childScope/0", 17);
				field_default({ label: "created" });
				_patch_child_end();
				_scope($scope13_id, { "#childScope/0": _existing_scope($childScope18) }, "__tests__/template.marko", "14:4");
			}, $scope12_id) });
			_patch_child_end();
			_scope($scope12_id, { "#childScope/0": _existing_scope($childScope19) }, "__tests__/template.marko", "13:2");
			return 0;
		}
	}, $scope0_id, "#text/11", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_12*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope3),
		"#childScope/1": _existing_scope($childScope4),
		"#childScope/2": _existing_scope($childScope6),
		"#childScope/3": _existing_scope($childScope7),
		"#childScope/4": _existing_scope($childScope9),
		"#childScope/5": _existing_scope($childScope10),
		"#childScope/6": _existing_scope($childScope12),
		"#childScope/7": _existing_scope($childScope13),
		"#childScope/8": _existing_scope($childScope15),
		"#childScope/9": _existing_scope($childScope16),
		"#childScope/10": _existing_scope($childScope17)
	}, "__tests__/template.marko", 0);
}, 1);
