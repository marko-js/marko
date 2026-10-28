// tags/card.marko
const $template = "<button>other</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["b1"]];
_shells({
	b0: "b0",
	b: "b !b1; b%;<button>other</button><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	const Other = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	_html(`<button>other</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "wg", Other, 1);
	_scope($scope0_id, { g: Other }) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	"~a1": "~a1;D ;<span> </span>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}`)()
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
		_html(`<span>${_text_resume($scope1_id, "a", input.label, 1, $scope0_reason, 0)}</span>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a0");
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
