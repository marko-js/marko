// tags/card/index.marko
const $template$1 = "<div id=fixed> </div>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/card/index.marko_0_input_attrs#4"]];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !__tests__/tags/card/index.marko_0_input_attrs#4; D ;<div id=fixed> </div>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div id=fixed${_patch_attrs_partial(input.attrs, { id: 1 }, "#div/0", $scope0_id, "div", void 0, $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.title, void 0, $scope0_reason, 1)}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/card/index.marko_0_input_attrs#4");
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0, { "EventAttributes:#div/0": ["...input.attrs", "1:9"] });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({
				attrs: {
					class: "x",
					"data-a": "1"
				},
				title: input.title
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, { input_title: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !_server_guard($scope0_reason, 1));
}, 1);
