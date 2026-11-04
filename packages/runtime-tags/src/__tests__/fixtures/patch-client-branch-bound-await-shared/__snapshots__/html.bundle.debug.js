// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;b%b%;<!><!><!>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !__tests__/template.marko_3",
	"__tests__/template.marko_2_#text#1/await": "__tests__/template.marko_2_#text#1/await;b%b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%b%;<!><!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag = _write_guard($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 3), $ui__input_show = _unfilled_if($scope0_reason, 1), $cg__input_p = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_tag2 = _unfilled_if($scope0_reason, 3), $ui__input_p2 = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_p = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	const $input_p__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 2);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 4), $ui__input_tag = _unfilled_if($scope0_reason, 3);
				const Inner = { content: _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_id = _scope_id();
					const $scope3_reason = _scope_reason();
					_html(`<b>${_text_mark($scope3_id, "#text/1", input.label, 1, $scope0_reason, 2)}</b>${_el_mark($scope3_id, "#b/0")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_label#0:4/subscribe", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:4/subscribe");
				}, $scope2_id, void 0, 1) };
				_dynamic_tag($scope2_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
				_await($scope2_id, "#text/1", input.p, (v) => {
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "#text/0", input.tag, { content: Inner }, 9, 0, 0, $wg__input_tag, $scope0_reason, 3);
					_html(_text_mark($scope4_id, "#text/1", v, 2, $scope0_reason, 4));
					!$cg__input_tag && _unfilled_if() && _patch_write($scope2_id, "PatchWrite:Inner", Inner);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_tag#0:5/subscribe");
					$cg__input_tag && _patch_render($scope4_id, "__tests__/template.marko_4_input_tag#0:5_Inner#2:2/setup");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope4_id, { "ClosureSignalIndex:input_tag/8": $wi__input_tag && 1 }, "__tests__/template.marko", "5:6"), $cg__input_tag && "__tests__/template.marko_4_input_tag#0:5/subscribe");
				}, 1, "__tests__/template.marko_4*content", $ui__input_p, 0, 1);
				$ui__input_tag && _patch_write($scope2_id, "PatchWrite:Inner", Inner, 1);
				_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_tag#0:5/subscribe");
				$cg__input_p && _patch_render($scope2_id, "__tests__/template.marko_2_input_p#0:6/subscribe");
				$cg__input_tag && _patch_render($scope2_id, "__tests__/template.marko_2_input_tag#0:5_Inner#2/setup");
				_subscribe($ui__input_p && $input_p__closures, _subscribe($ui__input_tag && $input_tag__closures, _scope($scope2_id, {
					Inner: $ui__input_tag && Inner,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "2:4", { Inner: "3:13" }), $cg__input_tag && "__tests__/template.marko_2_input_tag#0:5/subscribe", $wg__input_tag), $cg__input_p && "__tests__/template.marko_2_input_p#0:6/subscribe", $wg__input_tag);
				$wg__input_tag || _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: input.label,
		input_tag: $wi__input_show && ($ui__input_show || $ui__input_tag2) && input.tag,
		input_p: $wi__input_show && ($ui__input_show || $ui__input_p2) && input.p,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures,
		"ClosureScopes:input_tag/8": $wi__input_tag && $wi__input_tag && ($ui__input_tag2 || $ui__input_show) && $input_tag__closures,
		"ClosureScopes:input_p/9": $wi__input_p && $wi__input_p && ($ui__input_p2 || $ui__input_show) && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"],
		input_p: ["input.p"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label"), _filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#6/subscribers", "input_p"));
}, 1);
