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
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%b%;<b><!><!></b>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D%b%;<b><!><!></b>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": `__tests__/template.marko_3*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wi__input_p__OR__input_label__OR__input_show = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 5), $fg__input_p = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_p__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", input.p, (v) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_mark($scope2_id, "#text/0", v, 1, $scope0_reason, 3)}${_text_mark($scope2_id, "#text/1", input.label, 2, $scope0_reason, 4)}</b>`);
			_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, {}, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe");
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 3));
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_p#0:3/subscribe", 1);
		$wi__input_p__OR__input_label__OR__input_show && _subscribe(_unfilled_if($scope0_reason, 3) && $input_p__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_1_input_p#0:3/subscribe", 0);
		$wi__input_p__OR__input_label__OR__input_show && _resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope3_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 0);
			card_default({ content: Body.content });
			_patch_child_end();
			!_client_guard($scope0_reason, 5) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Body_content", Body?.content);
			_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 5);
	$fg__input_p && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_p#3/subscribers", "input_p");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	_scope($scope0_id, {
		input_p: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3)) && input.p,
		input_label: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 4)) && input.label,
		Body_content: _unfilled_if($scope0_reason, 5) && Body?.content,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 4) && $input_label__closures,
		"ClosureScopes:input_p/8": _write_if($scope0_reason, 3) && $input_p__closures
	}, "__tests__/template.marko", 0, {
		input_p: ["input.p"],
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"]
	}) || ($fg__input_p && _patch_write($scope0_id, "PatchMarkedWrite:input_p", input.p, !_server_guard($scope0_reason, 3)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
