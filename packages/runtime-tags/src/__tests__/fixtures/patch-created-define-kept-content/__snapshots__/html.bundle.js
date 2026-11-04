// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks);
const $Tree_content__template = $template;
_shells({
	a1: "a1|3;D ;<span> </span>",
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", _shell_setup([[], []], ["a>", $setup])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Tree_content__walks)};${$Tree_content__template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Tree = { content: _content("a2", ({ label }) => {
		const $scope2_id = _scope_id();
		const $Tree_content__label__closures = /* @__PURE__ */ new Set();
		const $scope2_reason = _scope_reason(), $wi__label = _write_if($scope2_reason, 0), $cg__label = _client_guard($scope2_reason, 0);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		card_default({ content: _content("a1", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<span>${_text_mark($scope3_id, "a", label, 1, $scope2_reason, 0)}</span>`);
			$cg__label && _patch_render($scope3_id, "a0");
			_subscribe(_unfilled_if($scope2_reason, 0) && $Tree_content__label__closures, _scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) }), $cg__label && "a0");
		}, $scope2_id, 3) });
		_patch_child_end();
		_scope($scope2_id, {
			g: $wi__label && $wi__label && (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope0_reason, 0)) && $Tree_content__label__closures,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			Tree.content({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a3");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a4"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1));
}, 1);
