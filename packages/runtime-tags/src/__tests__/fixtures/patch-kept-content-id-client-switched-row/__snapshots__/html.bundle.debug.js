// tags/card.marko
const $template$1 = "<button>switch</button><!><!><!>";
const $walks$1 = " b%b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%b%;<button>switch</button><!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Other = { content: _content_resume("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	let c = input.content;
	_html(`<button>switch</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	_scope($scope0_id, { Other }, "__tests__/tags/card.marko", 0, { Other: "1:9" }) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; b D ;<input><label> </label>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 3), $ui__input_rows = _unfilled_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_rows__OR__input_show__OR__input_label = _write_if($scope0_reason, 1), $ui__input_label = _unfilled_if($scope0_reason, 4), $fg__input_show = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4), $cg__input_rows = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		card_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					const uid = _id("uid");
					_html(`<input${_attr("id", uid, $scope3_id, "#input/0", 0, 0)}>${_el_mark($scope3_id, "#input/0", 0)}<label${_attr("for", uid, $scope3_id, "#label/1", 0, 0)}>${_text_mark($scope3_id, "#text/2", input.label, 1, $scope0_reason, 4)}</label>${_el_mark($scope3_id, "#label/1", 0)}`);
					$cg__input_label && _patch_render($scope3_id, "__tests__/template.marko_3_input_label#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, { _: $wi__input_rows__OR__input_show__OR__input_label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:5/subscribe");
					return 0;
				}
			}, $scope2_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 3);
			$cg__input_show && _patch_render($scope2_id, "__tests__/template.marko_2_input_show#0:4/subscribe");
			$wi__input_rows__OR__input_show__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 3) && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_show && "__tests__/template.marko_2_input_show#0:4/subscribe", $wg__input_show);
			$wg__input_show || $wi__input_rows__OR__input_show__OR__input_label && _resume_branch($scope2_id);
		}, $scope1_id, 2) });
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_show__OR__input_label && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 2);
	$fg__input_show && $cg__input_rows && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_show#4/subscribers", "input_show");
	$fg__input_label && ($cg__input_rows || $cg__input_show) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_show: ($ui__input_rows || $ui__input_show) && input.show,
		input_label: (_unfilled_if($scope0_reason, 0) || $ui__input_label) && input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 4) && ($ui__input_label || $ui__input_rows || $ui__input_show) && $input_label__closures,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_rows) && $input_show__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"]
	}) || ($fg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
