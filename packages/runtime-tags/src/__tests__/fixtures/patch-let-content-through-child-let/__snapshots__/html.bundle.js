// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $setup$1 = _shell_setup([[], ["c0"]], ["b>", $setup$2]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$1)};${((_w0) => `<button>x</button>${_w0}`)($template$1)}`)() });
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "c0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;Db%;<em>static <!></em>",
	"~a1": "~a1;Db%;<em>static <!></em>",
	a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	outer_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_resume($scope1_id, "a", input.label, 2, $scope0_reason, 0)}</em>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }));
	}, $scope0_id, 2) });
	_patch_child_end();
	_scope($scope0_id, {
		e: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
