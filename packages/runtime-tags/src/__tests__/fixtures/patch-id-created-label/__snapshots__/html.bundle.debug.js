// tags/card.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button>clear</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = "<!><!><!><!><!><!>";
const $walks = "b%b%b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content; b D ;<input><label> </label>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko": "__tests__/template.marko !;b%b%b%b%;<!><!><!><!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; b%;<input><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; D ;<label> </label>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell; ;<label>field</label>",
	"__tests__/template.marko_5*shell": /*@__PURE__*/ (() => `__tests__/template.marko_5*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_show = _client_guard($scope0_reason, 3), $wg__input_show__OR__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		_html(`<input${_attr("id", uid, $scope1_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope1_id, "#input/0", 0)}`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<label${_attr("for", uid, $scope2_id, "PatchAttr:#label/0 for", 0, 0)}>${_text_resume($scope2_id, "#text/1", item.key, 1, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "#label/0", 0)}`);
				_scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 3);
		$cg__input_show && _patch_write($scope1_id, "PatchWrite:uid", uid, 1);
		$cg__input_show && _patch_init($scope1_id, "__tests__/template.marko_1_input_show#0:7/init");
		_scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 3) && item?.key,
			uid: _unfilled_if($scope0_reason, 3) && uid,
			_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", {
			"#LoopKey": ["item.key", "1:6"],
			uid: "2:7"
		});
	}, "key", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	const Field = { content: _content_resume("__tests__/template.marko_3*content", ({ show }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		const uid = _id("uid~1");
		_html(`<input${_attr("id", uid, $scope3_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope3_id, "#input/0", 0)}`);
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<label${_attr("for", uid, $scope4_id, "PatchAttr:#label/0 for", 0, 0)}>field</label>${_el_resume($scope4_id, "#label/0", 0)}`);
				_scope($scope4_id, {}, "__tests__/template.marko", "9:4");
				return 0;
			}
		}, $scope3_id, "#text/1", 1, _write_guard($scope3_reason, 0), 1, 0, 0, ["__tests__/template.marko_4*shell"]);
		_patch_write($scope3_id, "PatchWrite:uid", uid, 1);
		_scope($scope3_id, { uid: _unfilled_if($scope3_reason, 0) && uid }, "__tests__/template.marko", "6:2", { uid: "7:7" });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/1", input.on ? Field : null, { show: input.show }, 1, 0, 0, $wg__input_show__OR__input_on, $scope0_reason, 1);
	_dynamic_tag($scope0_id, "#text/2", input.on ? Field : null, { show: input.show }, 9, 0, 0, $wg__input_show__OR__input_on, $scope0_reason, 1);
	_for_of(input.rows, (row) => {
		const $scope5_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope5_id, "#childScope/0", 2);
		card_default({ content: _content("__tests__/template.marko_6*content", () => {
			const $scope6_reason = _scope_reason();
			const $scope6_id = _scope_id();
			const uid = _id("uid~2");
			_html(`<input${_attr("id", uid, $scope6_id, "PatchAttr:#input/0 id", 0, 0)}>${_el_resume($scope6_id, "#input/0", 0)}<label${_attr("for", uid, $scope6_id, "PatchAttr:#label/1 for", 0, 0)}>${_text_resume($scope6_id, "#text/2", row.id, 1, $scope0_reason, 5)}</label>${_el_resume($scope6_id, "#label/1", 0)}`);
			_scope($scope6_id, { _: _write_if($scope0_reason, 5) && _scope_with_id($scope5_id) }, "__tests__/template.marko", "14:4");
		}, $scope5_id, 2) });
		_patch_child_end();
		_scope($scope5_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "13:2");
	}, "id", $scope0_id, "#text/3", 1, 1, 1, 0, 0, "__tests__/template.marko_5*shell", $scope0_reason, 5);
	_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_on", input.on);
	_patch_join_init($scope0_id, "__tests__/template.marko_0_input_show#7_input_on#8_Field#10/init", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && "input_show", _filled_guard($scope0_reason, 4) && "input_on");
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.show,
		input_on: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		Field: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Field
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_on: ["input.on"],
		Field: "6:9"
	}) || (_filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 2) || $cg__input_on) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 3)), $cg__input_on && _content_withhold(input.show));
}, 1);
