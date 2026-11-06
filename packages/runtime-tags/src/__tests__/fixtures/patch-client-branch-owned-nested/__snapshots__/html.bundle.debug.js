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
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content${_shell_marker([[], []], ["#childScope/0>", $setup$1])}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_tag = _write_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 3);
			card_default({ content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const $card_content__outer__closures = new Set();
				const outer = input.label + "!";
				const Inner = { content: _content_resume("__tests__/template.marko_5*content", () => {
					const $scope5_id = _scope_id();
					const $scope5_reason = _scope_reason();
					_html(`<b>${_text_mark($scope5_id, "#text/0", outer, 1, $scope0_reason, 1)}</b>`);
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_outer#2:1/subscribe", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 1) && $card_content__outer__closures, _scope($scope5_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:6"));
				}, $scope2_id) };
				_set_scope_reason(0);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 2);
				card_default({ content: _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _scope_reason();
					const $scope3_id = _scope_id();
					const Inner2 = { content: _content_resume("__tests__/template.marko_4*content", () => {
						const $scope4_id = _scope_id();
						const $scope4_reason = _scope_reason();
						_html(`<i>${_text_mark($scope4_id, "#text/0", input.label, 1, $scope0_reason, 1)}</i>`);
						_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_label#0:4/subscribe", $cg__input_label);
						_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope4_id, {
							_: _scope_with_id($scope3_id),
							"ClosureSignalIndex:input_label/6": $wi__input_label && 1
						}, "__tests__/template.marko", "6:8"));
					}, $scope3_id) };
					_dynamic_tag($scope3_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 2);
					_dynamic_tag($scope3_id, "#text/1", input.tag, { content: Inner2 }, 9, 0, 0, $wg__input_tag, $scope0_reason, 2);
					$cg__input_tag && _patch_write($scope3_id, "PatchWrite:Inner2", Inner2, 1);
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_tag#0:5/subscribe");
					$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:5_Inner#2:2/setup");
					$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:5_Inner2#3/setup");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_tag__closures, _scope($scope3_id, {
						Inner2: _unfilled_if($scope0_reason, 2) && Inner2,
						_: _scope_with_id($scope2_id)
					}, "__tests__/template.marko", "5:6", { Inner2: "6:15" }));
					$wg__input_tag || _resume_branch($scope3_id);
				}, $scope2_id) });
				_patch_child_end();
				_patch_write($scope2_id, "PatchWrite:outer", outer, 1);
				_patch_write($scope2_id, "PatchWrite:Inner", Inner, 1);
				_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe", $cg__input_label);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					outer,
					Inner,
					_: _scope_with_id($scope1_id),
					"ClosureScopes:outer/8": $wi__input_label && $card_content__outer__closures,
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4", {
					outer: "3:12",
					Inner: "4:13"
				}));
				_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	$fg__input_tag && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag");
	_scope($scope0_id, {
		input_label: input.label,
		input_tag: input.tag,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_tag/7": _write_if($scope0_reason, 2) && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)), $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 2)));
}, 1);
