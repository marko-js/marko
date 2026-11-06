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
	"__tests__/template.marko_6*content": "__tests__/template.marko_6*content !__tests__/template.marko_6",
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content|5;b%;<!><!><!>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content !__tests__/template.marko_4",
	"__tests__/template.marko_3*content": `__tests__/template.marko_3*content|3${_shell_marker([[], []], ["#childScope/2>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}`)($template$1)}`,
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content|2${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $sg__input_label = _server_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_tag = _write_guard($scope0_reason, 3), $wi__input_show__OR__input_tag = _write_if($scope0_reason, 0), $cg__input_tag = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_tag__closures = new Set();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/0", 5);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const $card_content__outer__closures = new Set();
				const outer = input.label + "!";
				_filled_guard($scope0_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:outer", outer, !$sg__input_label);
				const A = { content: _content_resume("__tests__/template.marko_6*content", () => {
					const $scope6_id = _scope_id();
					const $scope6_reason = _scope_reason();
					_html(`<b>${_text_mark($scope6_id, "#text/1", outer, 1, $scope0_reason, 2)}</b>${_el_mark($scope6_id, "#b/0")}`);
					_script($scope6_id, "__tests__/template.marko_6");
					_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope6_id, "__tests__/template.marko_6_outer#2:1/subscribe", $cg__input_label);
					_subscribe($wi__input_label && $card_content__outer__closures, _scope($scope6_id, {
						_: _scope_with_id($scope2_id),
						"ClosureSignalIndex:outer/8": $wi__input_label && 1
					}, "__tests__/template.marko", "4:6"));
				}, $scope2_id) };
				_set_scope_reason(0);
				const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 4);
				card_default({ content: _content("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _scope_reason();
					const $scope3_id = _scope_id();
					const $card_content2__inner__closures = new Set();
					const inner = outer + "?";
					_filled_guard($scope0_reason, 2) && _patch_write($scope3_id, "PatchMarkedWrite:inner", inner, !$sg__input_label);
					const B = { content: _content_resume("__tests__/template.marko_4*content", () => {
						const $scope4_id = _scope_id();
						const $scope4_reason = _scope_reason();
						_html(`<i>${_text_mark($scope4_id, "#text/1", inner, 1, $scope0_reason, 2)}</i>${_el_mark($scope4_id, "#i/0")}`);
						_script($scope4_id, "__tests__/template.marko_4");
						_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_inner#3:4/subscribe", $cg__input_label);
						_subscribe($wi__input_label && $card_content2__inner__closures, _scope($scope4_id, { _: _scope_with_id($scope3_id) }, "__tests__/template.marko", "7:8"));
					}, $scope3_id) };
					_dynamic_tag($scope3_id, "#text/0", input.tag, { content: A }, 1, 0, 0, $wg__input_tag, $scope0_reason, 3);
					_dynamic_tag($scope3_id, "#text/1", input.tag, { content: B }, 9, 0, 0, $wg__input_tag, $scope0_reason, 3);
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope3_id, "#childScope/2", 3);
					card_default({ content: _content("__tests__/template.marko_5*content", () => {
						const $scope5_reason = _scope_reason();
						const $scope5_id = _scope_id();
						_dynamic_tag($scope5_id, "#text/0", input.tag, { content: A }, 17, 0, 0, $wg__input_tag, $scope0_reason, 3);
						_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_input_tag#0:5/subscribe");
						$cg__input_tag && _patch_render($scope5_id, "__tests__/template.marko_5_input_tag#0:5_A#2:2/setup");
						$wi__input_show__OR__input_tag && _subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope5_id, {
							_: _scope_with_id($scope3_id),
							"ClosureSignalIndex:input_tag/7": $wi__input_tag && 1
						}, "__tests__/template.marko", "10:8"));
						$wg__input_tag || $wi__input_show__OR__input_tag && _resume_branch($scope5_id);
					}, $scope3_id, 5) });
					_patch_child_end();
					$cg__input_tag && _patch_write($scope3_id, "PatchWrite:B", B, 1);
					_filled_guard($scope0_reason, 2) && _patch_subscribers($scope3_id, "__tests__/template.marko_3_inner#4/subscribers", "inner");
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_tag#0:5/subscribe");
					$cg__input_label && _patch_render($scope3_id, "__tests__/template.marko_3_outer#2:1/subscribe");
					$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:5_A#2:2/setup");
					$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:5_B#5/setup");
					_subscribe($wi__input_label && $card_content__outer__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_tag__closures, _scope($scope3_id, {
						inner,
						B: _unfilled_if($scope0_reason, 3) && B,
						_: _scope_with_id($scope2_id),
						"ClosureScopes:inner/10": $wi__input_label && $card_content2__inner__closures,
						"#childScope/2": _existing_scope($childScope)
					}, "__tests__/template.marko", "5:6", {
						inner: "6:14",
						B: "7:15"
					})));
					$wg__input_tag || _resume_branch($scope3_id);
				}, $scope2_id, 3) });
				_patch_child_end();
				$cg__input_tag && _patch_write($scope2_id, "PatchWrite:A", A, 1);
				_filled_guard($scope0_reason, 2) && _patch_subscribers($scope2_id, "__tests__/template.marko_2_outer#1/subscribers", "outer");
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					outer,
					A: _unfilled_if($scope0_reason, 3) && A,
					_: _scope_with_id($scope1_id),
					"ClosureScopes:outer/8": $wi__input_label && $card_content__outer__closures,
					"#childScope/0": _existing_scope($childScope2)
				}, "__tests__/template.marko", "2:4", {
					outer: "3:12",
					A: "4:13"
				}));
				_write_guard($scope0_reason, 2) && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_label && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	$fg__input_tag && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#5/subscribers", "input_tag");
	_scope($scope0_id, {
		input_label: input.label,
		input_tag: _unfilled_if($scope0_reason, 1) && input.tag,
		"ClosureScopes:input_tag/7": $wi__input_tag && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && $input_tag__closures,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label), $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
