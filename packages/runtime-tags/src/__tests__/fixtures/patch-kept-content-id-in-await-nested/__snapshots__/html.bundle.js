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
	a1: "a1; b D%b%;<input><label><!><!></label>",
	a2: "a2; b D%b%;<input><label><!><!></label>",
	a3: "a3|3;b%;<!><!><!>",
	a4: `a4|2${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`,
	a: "a;b%;<!><!><!>",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_p = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_p__OR__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_p2 = _unfilled_if($scope0_reason, 3), $ui__input_label = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_p = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_p__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(0);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				card_default({ content: _content("a3", () => {
					_scope_reason();
					const $scope3_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 3);
					_await($scope3_id, "a", input.p, (v) => {
						const $scope4_id = _scope_id();
						const uid = _id("A");
						_html(`<input${_attr("id", uid, $scope4_id, "a", 0, 0)}>${_el_mark($scope4_id, "a", 0)}<label${_attr("for", uid, $scope4_id, "b", 0, 0)}>${_text_mark($scope4_id, "c", v, 1, $scope0_reason, 3)}${_text_mark($scope4_id, "d", input.label, 2, $scope0_reason, 4)}</label>${_el_mark($scope4_id, "b", 0)}`);
						$cg__input_label && _patch_render($scope4_id, "a0");
						_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope4_id, {}), $cg__input_label && "a0");
					}, 1, "a1", $ui__input_p);
					$cg__input_p && _patch_render($scope3_id, "a6");
					$wi__input_show__OR__input_p__OR__input_label && _subscribe($ui__input_p && $input_p__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_p && "a6", 0);
					$wi__input_show__OR__input_p__OR__input_label && _resume_branch($scope3_id);
				}, $scope2_id, 3) });
				_patch_child_end();
				_scope($scope2_id, {
					_: $wi__input_show__OR__input_p__OR__input_label && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_p__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a5"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: $wi__input_show && ($ui__input_show || $ui__input_p2) && input.p,
		f: $wi__input_show && ($ui__input_show || $ui__input_label) && input.label,
		h: $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		g: $wi__input_p && $wi__input_p && ($ui__input_p2 || $ui__input_show) && $input_p__closures
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.p, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "a7", "e"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "a8", "f"));
}, 1);
