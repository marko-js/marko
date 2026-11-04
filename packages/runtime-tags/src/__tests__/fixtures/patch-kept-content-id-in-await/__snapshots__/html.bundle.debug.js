// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "#text/2", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content; b D%b%;<input><label><!><!></label>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await; b D%b%;<input><label><!><!></label>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 2), $cg__input_p = _client_guard($scope0_reason, 3), $wi__input_show__OR__input_p__OR__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_p2 = _unfilled_if($scope0_reason, 3), $ui__input_label = _unfilled_if($scope0_reason, 4), $wi__input_show = _write_if($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 4), $wi__input_p = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_p__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id(), $ui__input_p = _unfilled_if($scope0_reason, 3);
				_await($scope2_id, "#text/0", input.p, (v) => {
					const $scope3_id = _scope_id();
					const uid = _id("uid");
					_html(`<input${_attr("id", uid, $scope3_id, "#input/0", 0, 0)}>${_el_mark($scope3_id, "#input/0", 0)}<label${_attr("for", uid, $scope3_id, "#label/1", 0, 0)}>${_text_mark($scope3_id, "#text/2", v, 1, $scope0_reason, 3)}${_text_mark($scope3_id, "#text/3", input.label, 2, $scope0_reason, 4)}</label>${_el_mark($scope3_id, "#label/1", 0)}`);
					$cg__input_label && _patch_render($scope3_id, "__tests__/template.marko_3_input_label#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, {}, "__tests__/template.marko", "3:6"), $cg__input_label && "__tests__/template.marko_3_input_label#0:5/subscribe");
				}, 1, "__tests__/template.marko_3*content", $ui__input_p);
				$cg__input_p && _patch_render($scope2_id, "__tests__/template.marko_2_input_p#0:4/subscribe");
				$wi__input_show__OR__input_p__OR__input_label && _subscribe($ui__input_p && $input_p__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_p && "__tests__/template.marko_2_input_p#0:4/subscribe", 0);
				$wi__input_show__OR__input_p__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_p__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_scope($scope0_id, {
		input_p: $wi__input_show && ($ui__input_show || $ui__input_p2) && input.p,
		input_label: $wi__input_show && ($ui__input_show || $ui__input_label) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures,
		"ClosureScopes:input_p/6": $wi__input_p && $wi__input_p && ($ui__input_p2 || $ui__input_show) && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 3)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#4/subscribers", "input_p"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label"));
}, 1);
