// tags/panel.marko
const $template$1 = "<div class=panel></div>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/panel.marko": "__tests__/tags/panel.marko !; ;<div class=panel></div>",
	"__tests__/tags/panel.marko_1*shell": "__tests__/tags/panel.marko_1*shell;b%;<!><!><!>"
});
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $cg__input_open = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<div class=panel>");
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/panel.marko_1_input_content#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/panel.marko", "1:21");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, $wg__input_open, void 0, void 0, void 0, ["__tests__/tags/panel.marko_1*shell"], $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0", $wg__input_open)}`);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/panel.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_open && _patch_fill($scope0_id, "PatchFill:__tests__/tags/panel.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_open && _content_withhold(input.content));
});

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_open#0:5/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(input.panels, (p) => {
		const $scope1_id = _scope_id();
		const $for_content__p_text__closures = new Set();
		_set_scope_reason(10);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		panel_default({
			open,
			content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", p.text, 1, $scope0_reason, 0)}</p>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_2_p_text#1:3/init" : "__tests__/template.marko_2_p_text#1:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__p_text__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
			}, $scope1_id)
		});
		_patch_child_end();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", p?.text);
		_scope($scope1_id, {
			p_text: p?.text,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:p_text/7": _write_if($scope0_reason, 0) && $for_content__p_text__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { p_text: ["p.text", "3:6"] });
	}, "id", $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
