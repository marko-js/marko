// tags/card.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "^__tests__/tags/card.marko," });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	const $return = { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "__tests__/tags/card.marko_0/_return", $scope0_id) };
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/card.marko", 0, { input_label: ["input.label"] });
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p><!> <!></p><button>show</button>`)("")}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0, $cg__input_label && 1);
			let r = card_default({ label: input.label });
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:r", r, !$sg__input_label);
			$cg__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_r#5/var");
			_patch_child_end();
			let shown = "-";
			_html(`<p>${_text_resume($scope1_id, "#text/2", r.fn(), void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/3", shown, 2, 0, 0, 1)}</p><button>show</button>${_el_resume($scope1_id, "#button/4")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			$cg__input_label && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				r,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2", { r: "2:9" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !$sg__input_label);
}, 1);
