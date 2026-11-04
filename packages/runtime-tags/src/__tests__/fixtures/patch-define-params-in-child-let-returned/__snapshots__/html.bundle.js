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
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks);
const $Outer_content__template = $Row_content__template;
const $setup = _shell_setup([[], []], ["c>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&/${_w1}&`)($Outer_content__walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}`)($Outer_content__template, $template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Outer = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const Row = { content: _content_resume("a0", ({ n }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<em>${_text_mark($scope2_id, "a", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope2_id, "b", n, 2, $scope2_reason, 0)}</em>`);
			$cg__input_label && _patch_render($scope2_id, "a1");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a1");
		}, $scope1_id) };
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		Row.content({ n: 1 });
		_patch_child_end();
		const $return = Row;
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
		return $return;
	}, $scope0_id) };
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	let Row = Outer.content({});
	_patch_child_end();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "c", 2);
	card_default({ content: Row });
	_patch_child_end();
	_scope($scope0_id, {
		f: input.label,
		h: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope2),
		c: _existing_scope($childScope3)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a3", "f");
}, 1);
