// tags/card.marko
const $template = "<button>switch</button><!><!><!>";
const $walks = " b%b%c";
const $setup = [[], ["b1"]];
_shells({
	b0: "b0",
	b: "b !b1; b%b%;<button>switch</button><!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Other = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	let c = input.content;
	_html(`<button>switch</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "b1");
	_patch_write($scope0_id, "wg", Other, 1);
	_scope($scope0_id, { g: Other }) || _client_branch(input.content);
});

// template.marko
_shells({
	a2: "a2|2;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`,
	a1: "a1; b D ;<input><label> </label>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 3), $ui__input_rows = _unfilled_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_rows__OR__input_show__OR__input_label = _write_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 4), $fg__input_show = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $cg__input_rows = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({ content: _content("a2", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					const uid = _id("A");
					_html(`<input${_attr("id", uid, $scope3_id, "a", 0, 0)}>${_el_mark($scope3_id, "a", 0)}<label${_attr("for", uid, $scope3_id, "b", 0, 0)}>${_text_mark($scope3_id, "c", input.label, 1, $scope0_reason, 4)}</label>${_el_mark($scope3_id, "b", 0)}`);
					$cg__input_label && _patch_render($scope3_id, "a0");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, { _: $wi__input_rows__OR__input_show__OR__input_label && _scope_with_id($scope2_id) }), $cg__input_label && "a0");
					return 0;
				}
			}, $scope2_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 3);
			$cg__input_show && _patch_render($scope2_id, "a4");
			$wi__input_rows__OR__input_show__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 3) && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_show && "a4", $wg__input_show);
			$wg__input_show || $wi__input_rows__OR__input_show__OR__input_label && _resume_branch($scope2_id);
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_show__OR__input_label && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, 0, 0, "a3", $scope0_reason, 2);
	$fg__input_show && $cg__input_rows && _patch_subscribers($scope0_id, "a5", "e");
	$fg__input_label && ($cg__input_rows || $cg__input_show) && _patch_subscribers($scope0_id, "a6", "f");
	_scope($scope0_id, {
		e: ($ui__input_rows || $ui__input_show) && input.show,
		f: (_unfilled_if($scope0_reason, 0) || $ui__input_label) && input.label,
		h: _write_if($scope0_reason, 4) && ($ui__input_label || $ui__input_rows || $ui__input_show) && $input_label__closures,
		g: _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_rows) && $input_show__closures
	}) || ($fg__input_show && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
