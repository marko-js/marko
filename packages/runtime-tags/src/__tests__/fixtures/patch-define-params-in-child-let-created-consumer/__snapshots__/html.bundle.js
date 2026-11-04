// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
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
_shells({
	a0: "a0",
	a: `a;${((_w0) => `/${_w0}&%c`)($Row_content__walks)};${((_w0) => `${_w0}<!><!>`)($Row_content__template)}`,
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content_resume("a0", ({ n }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0)} ${_text_mark($scope1_id, "b", n, 2, $scope1_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a1", $cg__input_label);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "a1");
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Row.content({ n: 1 });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			card_default({ content: Row });
			_patch_child_end();
			!_client_guard($scope0_reason, 1) && _unfilled_if() && _patch_write($scope0_id, "wg", Row);
			_scope($scope2_id, { a: _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b", 1, $wg__input_show, 1, 0, 0, ["a2"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: input.label,
		g: _unfilled_if($scope0_reason, 1) && Row,
		h: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
