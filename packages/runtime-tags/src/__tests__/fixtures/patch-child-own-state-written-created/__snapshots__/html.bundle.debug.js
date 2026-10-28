// tags/gm-badge/index.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/gm-badge/index.marko": "__tests__/tags/gm-badge/index.marko;D ;<p> </p>" });
var gm_badge_default = _template("__tests__/tags/gm-badge/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.value + $global$1.flag, 1, (2 | _mask_group($scope0_reason, 0)) << 1, 0)}</p>`);
	_fill_global_subscribe("__tests__/tags/gm-badge/index.marko_0_input_value#3_$global_flag#5", $scope0_id, $cg__input_value);
	$cg__input_value && _patch_write($scope0_id, "PatchWrite:input_value", input.value, 1);
	_scope($scope0_id, { input_value: _unfilled_if($scope0_reason, 0) && input.value }, "__tests__/tags/gm-badge/index.marko", 0, { input_value: ["input.value"] });
});

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_count#0:5/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			gm_badge_default({ value: count });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
