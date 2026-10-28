// tags/card.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card.marko_1*content": "__tests__/tags/card.marko_1*content !__tests__/tags/card.marko_1; b%;<button>clear</button><!><!>",
	"__tests__/tags/card.marko_0_#text#0/await": "__tests__/tags/card.marko_0_#text#0/await !__tests__/tags/card.marko_1; b%;<button>clear</button><!><!>",
	"__tests__/tags/card.marko": "__tests__/tags/card.marko;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	_await($scope0_id, "#text/0", resolveAfter("v", 1), (v) => {
		const $scope1_id = _scope_id();
		let c = input.content;
		_html(`<button>clear</button>${_el_resume($scope1_id, "#button/0")}`);
		_dynamic_tag($scope1_id, "#text/1", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
		_script($scope1_id, "__tests__/tags/card.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_content ? "__tests__/tags/card.marko_1_input_content#0:3/init" : "__tests__/tags/card.marko_1_input_content#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2"), $cg__input_content && "__tests__/tags/card.marko_1_input_content#0:3/subscribe");
	}, 1, "__tests__/tags/card.marko_1*content", 1);
	_scope($scope0_id, { "ClosureScopes:input_content/4": _write_if($scope0_reason, 0) && _unfilled_if($scope0_reason, 0) && $input_content__closures }, "__tests__/tags/card.marko", 0) || _content_withhold(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;Db%;<em>static <!></em>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "#text/0", input.label, 2, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4/init");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:17"));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
