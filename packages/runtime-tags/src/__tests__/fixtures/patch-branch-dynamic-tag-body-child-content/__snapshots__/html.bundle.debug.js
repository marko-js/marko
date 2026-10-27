// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, { input_content: input.content }, "__tests__/tags/card.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_el = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.el || "div", {}, 10, _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_set_scope_reason(0);
				const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
				card_default({ content: _content_resume("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>static ${_patch_text($scope3_id, "#text/0", input.label, 2, $scope0_reason, 2)}</em>`);
					_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, _client_guard($scope0_reason, 2) ? "__tests__/template.marko_3_input_label#0:5/init" : "__tests__/template.marko_3_input_label#0:5/subscribe");
					_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"));
				}, $scope2_id) });
				_patch_child_end();
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:6");
			}, $scope1_id), 0, $wg__input_el, $scope0_reason, 1);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_el#0:4/init");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_el: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.el,
		input_label: input.label,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_el: ["input.el"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.el, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.el), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)));
}, 1);
