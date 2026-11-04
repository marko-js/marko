// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_n = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, { n: input.n });
	_html("</section>");
	_script($scope0_id, "b0");
	_patch_render($scope0_id, "b1", $fg__input_n && "f");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", c, 1);
	_scope($scope0_id, {
		f: input.n,
		g: _write_if($scope0_reason, 1) && c
	}) || $fg__input_n && _patch_write($scope0_id, "xf", input.n, !_server_guard($scope0_reason, 1));
});

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $setup = _shell_setup([[], []], ["b>", $setup$1], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&`)($Row_content__walks, $walks, $walks)};${((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}`)($Row_content__template, $template, $template)}` });
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
	card_default({
		content: Row,
		n: 2
	});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "c", 2);
	card_default({
		content: Row,
		n: 3
	});
	_patch_child_end();
	_scope($scope0_id, {
		f: input.label,
		h: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "f");
}, 1);
