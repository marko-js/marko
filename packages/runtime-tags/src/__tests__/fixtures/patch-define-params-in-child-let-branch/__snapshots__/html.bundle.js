// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, { n: 2 });
	_html("</section>");
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", c, 1);
	_scope($scope0_id, {});
});

// template.marko
const $Row_content__walks = "D l%c";
const $Row_content__template = "<em> </em><!><!>";
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a: `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template)}`,
	a1: "a1;D ;<b> </b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content_resume("a2", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", n, 1, $scope1_reason, 0)}</em>`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<b>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 1)}</b>`);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "a0", $cg__input_label);
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0");
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a1"], $scope0_reason, 0);
		$cg__input_show && _patch_render($scope1_id, "a3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_show && "a3");
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
		e: input.show,
		f: input.label,
		i: _write_if($scope0_reason, 1) && $input_label__closures,
		h: _write_if($scope0_reason, 0) && $input_show__closures,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	}) || (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a4", "e"), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "f"));
}, 1);
