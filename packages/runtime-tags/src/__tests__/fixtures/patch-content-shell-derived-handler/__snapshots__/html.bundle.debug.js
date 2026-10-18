// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/wrapper.marko": "__tests__/tags/wrapper.marko;D%;<div><!></div>" });
var wrapper_default = _template("__tests__/tags/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/wrapper.marko", 0);
});

// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_input_label#0:5/subscribe!__tests__/template.marko_2; ;<button>show</button>",
	"__tests__/template.marko": "__tests__/template.marko;b%bD ;<!><!><p> </p>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let shown = "";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			wrapper_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const label = input.label;
				_html(`<button>show</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:label", label, 1);
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					label,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { label: "4:12" }));
			}, $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "#text/1", shown)}</p>`);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", shown, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && input.label,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
