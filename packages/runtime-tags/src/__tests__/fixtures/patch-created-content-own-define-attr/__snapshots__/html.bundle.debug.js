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
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": `__tests__/template.marko_3*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag = _write_guard($scope0_reason, 4), $wi__input_label__OR__input_tag__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $fg__input_label = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_tag__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const Inner = { content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			_html(`<b>${_text_mark($scope2_id, "#text/0", input.label, 1, $scope0_reason, 3)}</b>`);
			_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:3/subscribe", _client_guard($scope0_reason, 3));
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_label__closures, _scope($scope2_id, { _: $wi__input_label__OR__input_tag__OR__input_show && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"));
		}, $scope1_id, ($scope) => $scope1_page ? [{ input_label: input.label }, { _: $scope($scope0_id) }] : []) };
		_dynamic_tag($scope1_id, "#text/0", input.tag, { content: Inner }, 1, 0, 0, $wg__input_tag, $scope0_reason, 4);
		_unfilled_if($scope0_reason, 4) && _patch_write($scope1_id, "PatchWrite:Inner", Inner, 1);
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_tag#0:4/subscribe");
		_client_guard($scope0_reason, 4) && _patch_render($scope1_id, "__tests__/template.marko_1_input_tag#0:4_Inner#1/setup");
		$wi__input_label__OR__input_tag__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 4) && $input_tag__closures, _scope($scope1_id, {
			Inner: _unfilled_if($scope0_reason, 4) && Inner,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { Inner: "2:11" }));
		$wg__input_tag || $wi__input_label__OR__input_tag__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 1);
			card_default({ content: Body.content });
			_patch_child_end();
			_unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "PatchWrite:Body_content", Body?.content);
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 5);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	$fg__input_tag && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_tag#4/subscribers", "input_tag");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.label,
		input_tag: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 4)) && input.tag,
		Body_content: _unfilled_if($scope0_reason, 5) && Body?.content,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 3) && $input_label__closures,
		"ClosureScopes:input_tag/9": _write_if($scope0_reason, 4) && $input_tag__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_tag: ["input.tag"],
		Body_content: ["Body.content", "1:9"]
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 3)), $fg__input_tag && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 4)));
}, 1);
