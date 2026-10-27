// tags/box.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/box.marko": "__tests__/tags/box.marko;D%;<div><!></div>" });
var box_default = _template("__tests__/tags/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/box.marko", 0);
});

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
function boom(error) {
	throw error;
}
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_3*content": "__tests__/tags/child.marko_3*content;D ;<p> </p>",
	"__tests__/tags/child.marko_2*content": "__tests__/tags/child.marko_2*content",
	"__tests__/tags/child.marko_1*content": /*@__PURE__*/ (() => `__tests__/tags/child.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))}`)(),
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "__tests__/tags/child.marko_3_input_error#0:4/init" : "__tests__/tags/child.marko_3_input_error#0:4/subscribe");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "4:2"), $cg__input_error && "__tests__/tags/child.marko_3_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wi__err_message = _write_if($scope1_reason, 0), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		const $catch_content__err_message__closures = new Set();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		box_default({ content: _content_elide("__tests__/tags/child.marko_2*content", () => {
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", err.message)} ${_patch_text($scope2_id, "#text/1", input.label, 2, $scope0_reason, 0)}</span>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/tags/child.marko_2_input_label#0:3/init" : "__tests__/tags/child.marko_2_input_label#0:3/subscribe");
			$scope2_page && _subscribe(_unfilled_if() && $wi__err_message && $catch_content__err_message__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/child.marko", "7:6")));
		}, $scope1_id) });
		_patch_child_end();
		$scope1_page && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:err_message/7": $wi__err_message && _unfilled_if($scope1_reason, 0) && $catch_content__err_message__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/child.marko", "6:4");
	}, void 0, "__tests__/tags/child.marko_1*content", "__tests__/tags/child.marko_3*content", 1, 1, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/tags/child.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			child_default({
				label: input.label,
				error: input.error
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "__tests__/template.marko_1_input_error#0:5/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		input_error: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.error
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_error: ["input.error"]
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.error, !_server_guard($scope0_reason, 3)));
}, 1);
