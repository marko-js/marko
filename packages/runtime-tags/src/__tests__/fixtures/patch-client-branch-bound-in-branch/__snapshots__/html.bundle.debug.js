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
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content|2;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 5), $wg__input_tag = _write_guard($scope0_reason, 6), $cg__input_tag = _client_guard($scope0_reason, 6), $wi__input_show__OR__input_inner__OR__input_label__OR__input_tag = _write_if($scope0_reason, 2), $wg__input_inner = _write_guard($scope0_reason, 4), $ui__input_inner = _unfilled_if($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 3), $cg__input_inner = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 3), $ui__input_tag2 = _unfilled_if($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 3), $wi__input_tag = _write_if($scope0_reason, 6), $wi__input_inner = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	const $input_inner__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_if(() => {
					if (input.inner) {
						const $scope3_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 6);
						const Inner = { content: _content_resume("__tests__/template.marko_4*content", () => {
							const $scope4_id = _scope_id();
							const $scope4_reason = _scope_reason();
							_html(`<b>${_text_mark($scope4_id, "#text/0", input.label, 1, $scope0_reason, 5)}</b>`);
							_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_label#0:5/subscribe", $cg__input_label);
							_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope4_id, { _: $wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _scope_with_id($scope3_id) }, "__tests__/template.marko", "4:8"), $cg__input_label && "__tests__/template.marko_4_input_label#0:5/subscribe");
						}, $scope3_id, ($scope) => $scope2_page ? [
							{ input_label: input.label },
							{ _: $scope($scope0_id) },
							{ _: $scope($scope1_id) },
							{ _: $scope($scope2_id) }
						] : [], 1) };
						_dynamic_tag($scope3_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 6);
						$ui__input_tag && _patch_write($scope3_id, "PatchWrite:Inner", Inner, 1);
						_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_tag#0:6/subscribe");
						$cg__input_tag && _patch_render($scope3_id, "__tests__/template.marko_3_input_tag#0:6_Inner#1/setup");
						$wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _subscribe($ui__input_tag && $input_tag__closures, _scope($scope3_id, {
							Inner: $ui__input_tag && Inner,
							_: _scope_with_id($scope2_id)
						}, "__tests__/template.marko", "3:6", { Inner: "4:15" }), $cg__input_tag && "__tests__/template.marko_3_input_tag#0:6/subscribe", $wg__input_tag);
						$wg__input_tag || $wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _resume_branch($scope3_id);
						return 0;
					}
				}, $scope2_id, "#text/0", 1, $wg__input_inner, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 4);
				$cg__input_inner && _patch_render($scope2_id, "__tests__/template.marko_2_input_inner#0:4/subscribe");
				$wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _subscribe(_unfilled_if($scope0_reason, 4) && $input_inner__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), $cg__input_inner && "__tests__/template.marko_2_input_inner#0:4/subscribe", $wg__input_inner);
				$wg__input_inner || $wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _resume_branch($scope2_id);
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_inner__OR__input_label__OR__input_tag && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_scope($scope0_id, {
		input_inner: _write_if($scope0_reason, 3) && ($ui__input_show || $ui__input_inner) && input.inner,
		input_label: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 5)) && input.label,
		input_tag: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || $ui__input_tag2) && input.tag,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 5) && $input_label__closures,
		"ClosureScopes:input_tag/9": $wi__input_tag && $wi__input_tag && ($ui__input_tag2 || $ui__input_show || $ui__input_inner) && $input_tag__closures,
		"ClosureScopes:input_inner/7": $wi__input_inner && $wi__input_inner && ($ui__input_inner || $ui__input_show) && $input_inner__closures
	}, "__tests__/template.marko", 0, {
		input_inner: ["input.inner"],
		input_label: ["input.label"],
		input_tag: ["input.tag"]
	}) || (_filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "PatchMarkedWrite:input_inner", input.inner, !_server_guard($scope0_reason, 4)) && $cg__input_show && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_inner#4/subscribers", "input_inner"), _filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 5)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label"), _filled_guard($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 6)) && ($cg__input_show || $cg__input_inner) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#6/subscribers", "input_tag"));
}, 1);
