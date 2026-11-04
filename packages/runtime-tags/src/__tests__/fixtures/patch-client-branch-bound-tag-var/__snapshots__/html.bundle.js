// tags/getter.marko
const $setup$1 = [[], []];
_shells({ c: "c," });
var getter_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.label, !_server_guard($scope0_reason, 0));
	const $return = _bind_resume(() => console.log("get", input.label), "c0", $scope0_id, 1);
	_scope($scope0_id, { c: input.label });
	return $return;
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
	a1: "a1",
	a5: `a5|2${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `0${_w0}&b%c`)("")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)("")}`,
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_tag = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 5), $cg__input_label = _client_guard($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_tag = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_label2 = _unfilled_if($scope0_reason, 4), $ui__input_label__OR__input_tag = _unfilled_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_label = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 2);
			card_default({ content: _content("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 4), $ui__input_tag = _unfilled_if($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 4);
				_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
				const $childScope = _peek_scope_id($scope2_id, "a", 0, $ui__input_label && 1);
				let get = getter_default({ label: input.label });
				$fg__input_label && $ui__input_tag && _patch_write($scope2_id, "xd", get, !$sg__input_label);
				$ui__input_label && _var($scope2_id, "b", $childScope, "a0");
				_patch_child_end();
				_dynamic_tag($scope2_id, "c", input.tag, { onClick: get }, 9, _content_resume("a1", () => {
					_scope_id();
					_scope_reason();
					_html("x");
				}, $scope2_id), 0, $wg__input_label__OR__input_tag, $scope0_reason, 1, 0, 5);
				$cg__input_label && _patch_render($scope2_id, "a2");
				_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "a3");
				_patch_render($scope2_id, "a4", ((_filled_guard($scope0_reason, 5) ? " >>f" : "") + ($fg__input_label ? " d" : "")).slice(1), $scope0_reason, 1);
				_subscribe($ui__input_tag && $input_tag__closures, _subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					d: $wi__input_tag && _unfilled_if($scope0_reason, 1) && get,
					_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				}), $cg__input_label && "a2", $wg__input_label__OR__input_tag), _client_guard($scope0_reason, 5) && "a3", $wg__input_label__OR__input_tag);
				$wg__input_label__OR__input_tag || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 3);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_label2) && input.label,
		f: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || $ui__input_label__OR__input_tag) && input.tag,
		g: $wi__input_label && $wi__input_label && ($ui__input_label2 || $ui__input_show) && $input_label__closures,
		h: $wi__input_tag && $wi__input_tag && ($ui__input_label__OR__input_tag || $ui__input_show) && $input_tag__closures
	}) || (_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xe", input.label, !$sg__input_label) && $cg__input_show && _patch_subscribers($scope0_id, "a7", "e"), _filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 5)) && $cg__input_show && _patch_subscribers($scope0_id, "a8", "f"));
}, 1);
