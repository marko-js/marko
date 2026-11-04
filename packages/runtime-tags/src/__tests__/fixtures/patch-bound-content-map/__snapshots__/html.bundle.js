// tags/card.marko
const $template$1 = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>copy</button>${_w0}<small> </small>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D l`)("D%l");
const $setup = _shell_setup([[], ["c0"]], ["b>", $setup$1]);
_shells({ c: `c${_shell_marker($setup)};${((_w0) => ` b/${_w0}&D l`)("D%l")};${((_w0) => `<button>copy</button>${_w0}<small> </small>`)($template$1)}` });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>copy</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: value.get("value") });
	_patch_child_end();
	_html(`<small>${_text_mark($scope0_id, "c", value.has(value.get("value")))}</small>`);
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", value, 1);
	_scope($scope0_id, {
		g: value,
		b: _existing_scope($childScope)
	}) || _client_branch(input.data);
});

// template.marko
_shells({
	a0: "a0",
	a: "a;b%;<!><!><!>",
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Body = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 0));
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			outer_default({ data: /* @__PURE__ */ new Map([["value", Body.content], [Body.content, "key"]]) });
			_patch_child_end();
			_scope($scope2_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "a3", "d");
	_scope($scope0_id, {
		d: input.label,
		g: _unfilled_if($scope0_reason, 1) && Body?.content,
		h: _write_if($scope0_reason, 0) && $input_label__closures
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
}, 1);
