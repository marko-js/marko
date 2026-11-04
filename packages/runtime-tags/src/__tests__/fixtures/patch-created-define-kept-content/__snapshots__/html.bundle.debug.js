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
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $Tree_content__template = $template$1;
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content|3;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", _shell_setup([[], []], ["#childScope/0>", $setup$1])])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($Tree_content__walks)};${$Tree_content__template}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Tree = { content: _content("__tests__/template.marko_2*content", ({ label }) => {
		const $scope2_id = _scope_id();
		const $Tree_content__label__closures = new Set();
		const $scope2_reason = _scope_reason(), $wi__label = _write_if($scope2_reason, 0), $cg__label = _client_guard($scope2_reason, 0);
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		card_default({ content: _content("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<span>${_text_mark($scope3_id, "#text/0", label, 1, $scope2_reason, 0)}</span>`);
			$cg__label && _patch_render($scope3_id, "__tests__/template.marko_3_label#2:3/subscribe");
			_subscribe(_unfilled_if($scope2_reason, 0) && $Tree_content__label__closures, _scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "2:4"), $cg__label && "__tests__/template.marko_3_label#2:3/subscribe");
		}, $scope2_id, 3) });
		_patch_child_end();
		_scope($scope2_id, {
			"ClosureScopes:label/6": $wi__label && $wi__label && (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope0_reason, 0)) && $Tree_content__label__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			Tree.content({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
