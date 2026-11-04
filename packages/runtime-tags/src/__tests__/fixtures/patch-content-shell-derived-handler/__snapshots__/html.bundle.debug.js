// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2; ;<button>show</button>",
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 0), $ui__input_label = _unfilled_if($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let shown = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			wrapper_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				const label = input.label;
				_filled_guard($scope0_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !$sg__input_label);
				_html(`<button>show</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
					label,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { label: "4:12" }), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe");
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/1", shown)}</p>`);
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && ($ui__input_show || $ui__input_label) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $wi__input_label && ($ui__input_label || $ui__input_show) && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label) && _client_guard($scope0_reason, 0) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
}, 1);
