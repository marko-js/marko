// tags/row-of.marko
const $template$1 = "<!><!><!>";
const $setup$2 = [[], []];
_shells({ c: "c;b%;<!><!><!>" });
var row_of_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, { n: 2 }, 1, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {});
});

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><button>clear</button>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D b/${_w0}&l`)("b%c");
const $setup$1 = _shell_setup([[], ["b0"]], ["b>", $setup$2]);
_shells({ b: `b${_shell_marker($setup$1)};${((_w0) => `D b/${_w0}&l`)("b%c")};${((_w0) => `<section><button>clear</button>${_w0}</section>`)($template$1)}` });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	row_of_default({ content: c });
	_patch_child_end();
	_html("</section>");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content_resume("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope1_id, "b", n, 2, $scope1_reason, 0)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "a1");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ n: 1 });
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	card_default({ content: Row });
	_patch_child_end();
	_scope($scope0_id, {
		e: input.label,
		g: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
