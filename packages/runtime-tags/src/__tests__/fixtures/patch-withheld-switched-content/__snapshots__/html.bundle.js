// tags/inner.marko
const $template$1 = "<p><!></p>";
const $setup$2 = [[], []];
_shells({ c: "c;D%;<p><!></p>" });
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</p>");
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>switch</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], ["b1"]], ["b>", $setup$2]);
_shells({
	b0: "b0",
	b: /*@__PURE__*/ (() => `b${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)("D%l")};${((_w0) => `<button>switch</button>${_w0}`)($template$1)}`)()
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Other = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	let c = input.content;
	_html(`<button>switch</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	inner_default({ content: c });
	_patch_child_end();
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "wf", Other, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", c, 1);
	_scope($scope0_id, {
		f: Other,
		b: _existing_scope($childScope)
	}) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;D ;<em> </em>",
	"~a1": "~a1;D ;<em> </em>",
	a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }));
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
