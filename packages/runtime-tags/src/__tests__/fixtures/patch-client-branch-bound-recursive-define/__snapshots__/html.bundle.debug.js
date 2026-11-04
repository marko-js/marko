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
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content !__tests__/template.marko_5",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$1])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_tag = _filled_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Tree = { content: _content("__tests__/template.marko_2*content", ({ n, label, tag }) => {
		const $scope2_id = _scope_id();
		const $Tree_content__n__closures = new Set();
		const $Tree_content__label__closures = new Set();
		const $Tree_content__tag__closures = new Set();
		const $scope2_reason = _scope_reason(), $wi__n = _write_if($scope2_reason, 1), $cg__label = _client_guard($scope2_reason, 2), $cg__tag = _client_guard($scope2_reason, 3), $wg__n = _write_guard($scope2_reason, 1), $cg__n = _client_guard($scope2_reason, 1), $wi__label = _write_if($scope2_reason, 2), $wg__tag = _write_guard($scope2_reason, 3), $ui__tag = _unfilled_if($scope2_reason, 3), $wi__tag = _write_if($scope2_reason, 3);
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
		card_default({ content: _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_if(() => {
				if (n) {
					const $scope4_id = _scope_id();
					_set_scope_reason(_updates_from($scope2_reason, 0) << 1 | _updates_from($scope2_reason, 1) << 3 | _updates_from($scope2_reason, 2) << 5 | _updates_from($scope2_reason, 3) << 7);
					const $childScope = _peek_scope_id($scope4_id, "#childScope/0", 0);
					Tree.content({
						n: n - 1,
						label,
						tag
					});
					_patch_child_end();
					$cg__label && _patch_render($scope4_id, "__tests__/template.marko_4_label#2:5/subscribe");
					$cg__tag && _patch_render($scope4_id, "__tests__/template.marko_4_tag#2:6/subscribe");
					_subscribe($wi__tag && $Tree_content__tag__closures, _subscribe($wi__label && $Tree_content__label__closures, _subscribe($wi__n && $Tree_content__n__closures, _scope($scope4_id, {
						_: _scope_with_id($scope3_id),
						"#childScope/0": _write_if($scope2_reason, 0) && _existing_scope($childScope),
						"ClosureSignalIndex:n/9": $wi__n && 1
					}, "__tests__/template.marko", "3:6"), $cg__n && "__tests__/template.marko_4_n#2:4/subscribe", 0), $cg__label && "__tests__/template.marko_4_label#2:5/subscribe", 0), $cg__tag && "__tests__/template.marko_4_tag#2:6/subscribe", 0);
					($wg__n || _write_guard($scope2_reason, 2) || $wg__tag) && _resume_branch($scope4_id);
					return 0;
				}
			}, $scope3_id, "#text/0", $wg__n, $wg__n);
			_subscribe($wi__n && $Tree_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "2:4"), $cg__n && "__tests__/template.marko_3_n#2:4/subscribe", $wg__n);
		}, $scope2_id) });
		_patch_child_end();
		const Inner = { content: _content_resume("__tests__/template.marko_5*content", () => {
			const $scope5_id = _scope_id();
			const $scope5_reason = _scope_reason();
			_html(`<b>${_text_mark($scope5_id, "#text/1", n, 1, $scope2_reason, 1)}${_text_mark($scope5_id, "#text/2", label, 2, $scope2_reason, 2)}</b>${_el_mark($scope5_id, "#b/0")}`);
			_script($scope5_id, "__tests__/template.marko_5");
			_unfilled_if($scope2_reason, 1) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_n#2:4/subscribe");
			_unfilled_if($scope2_reason, 2) && _patch_subscribe($scope5_id, "__tests__/template.marko_5_label#2:5/subscribe", $cg__label);
			_subscribe(_unfilled_if($scope2_reason, 2) && $Tree_content__label__closures, _subscribe(_unfilled_if($scope2_reason, 1) && $Tree_content__n__closures, _scope($scope5_id, {
				_: _scope_with_id($scope2_id),
				"ClosureSignalIndex:n/9": $wi__n && 2,
				"ClosureSignalIndex:label/10": $wi__label && 1
			}, "__tests__/template.marko", "5:4"), $cg__n && "__tests__/template.marko_5_n#2:4/subscribe"), $cg__label && "__tests__/template.marko_5_label#2:5/subscribe");
		}, $scope2_id) };
		_dynamic_tag($scope2_id, "#text/1", tag, { content: Inner }, 17, 0, 0, $wg__tag, $scope2_reason, 3);
		$ui__tag && _patch_write($scope2_id, "PatchWrite:Inner", Inner, 1);
		$cg__tag && _patch_render($scope2_id, "__tests__/template.marko_2_tag#6_Inner#7/setup");
		_scope($scope2_id, {
			n,
			label,
			tag,
			Inner: $ui__tag && Inner,
			"ClosureScopes:n/9": $wi__n && $Tree_content__n__closures,
			"ClosureScopes:label/10": $wi__label && $Tree_content__label__closures,
			"ClosureScopes:tag/11": $wi__tag && $Tree_content__tag__closures,
			"#childScope/0": _existing_scope($childScope2)
		}, "__tests__/template.marko", "1:2", {
			n: "1:16",
			label: "1:19",
			tag: "1:26",
			Inner: "5:11"
		}) || (_filled_guard($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:n", n, !_server_guard($scope2_reason, 1)) && _patch_subscribers($scope2_id, "__tests__/template.marko_2_n#4/subscribers", "n"), _filled_guard($scope2_reason, 2) && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 2)) && _patch_subscribers($scope2_id, "__tests__/template.marko_2_label#5/subscribers", "label"), _filled_guard($scope2_reason, 3) && _patch_write($scope2_id, "PatchMarkedWrite:tag", tag, !_server_guard($scope2_reason, 3)) && _patch_subscribers($scope2_id, "__tests__/template.marko_2_tag#6/subscribers", "tag"));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 5 | _updates_from($scope0_reason, 3) << 7);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/0", 3);
			Tree.content({
				n: 1,
				label: input.label,
				tag: input.tag
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_tag#0:5/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope3)
			}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_label && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	$fg__input_tag && $cg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_tag#0:5/setup", "input_tag");
	_scope($scope0_id, {
		input_label: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.label,
		input_tag: $wi__input_show && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || ($fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)), $fg__input_tag && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 3)));
}, 1);
