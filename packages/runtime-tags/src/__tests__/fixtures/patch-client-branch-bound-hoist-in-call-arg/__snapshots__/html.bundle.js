// tags/setter.marko
const $template$1 = "<button>set</button>";
const $setup$1 = [[], ["c0"]];
_shells({ c: "c !c0; ;<button>set</button>" });
var setter_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>set</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { d: input.get }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

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
_shells({
	a2: `a2|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}& D l`)(" b")};${/*@__PURE__*/ ((_w0) => `${_w0}<div> </div>`)($template$1)}`,
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const $card_content__el_getter = _hoist($scope2_id, "a0", 1);
				_set_scope_reason(0);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				setter_default({ get: [$card_content__el_getter] });
				_patch_child_end();
				_html(`<div>${_text_mark($scope2_id, "c", input.label, 1, $scope0_reason, 2)}</div>${_el_mark($scope2_id, "b")}`);
				$cg__input_label && _patch_render($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_label && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), $cg__input_label && "a1");
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 1);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && ($ui__input_show || $ui__input_label) && input.label,
		f: $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "a4", "e");
}, 1);
