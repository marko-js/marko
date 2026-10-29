// template.marko
const $Card_content2__walks = "D b%l";
const $Card_content2__template = "<section><button>clear</button><!></section>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"~__tests__/template.marko_2*content": "~__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell !>#childScope/0>__tests__/template.marko_3;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content2__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content2__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Card = { content: _content("__tests__/template.marko_3*content", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		let c = input.content;
		_first_value($scope3_id, "c", c, $scope3_reason, 0);
		_html(`<section><button>clear</button>${_el_resume($scope3_id, "#button/0")}`);
		_dynamic_tag($scope3_id, "#text/1", c, {}, 2, 0, 0, 1, $scope3_reason, 0, "c");
		_html("</section>");
		_script($scope3_id, "__tests__/template.marko_3");
		_scope($scope3_id, {}, "__tests__/template.marko", "1:2") || _content_withhold(input.content);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 1);
			Card.content({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4/init");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:17"));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
