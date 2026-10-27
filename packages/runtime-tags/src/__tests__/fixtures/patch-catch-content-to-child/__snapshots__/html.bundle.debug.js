// tags/box.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/box.marko": "__tests__/tags/box.marko;D%;<div><!></div>" });
var box_default = _template("__tests__/tags/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/box.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(error) {
	throw error;
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_count#0:7/init",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	const $input_error__closures = new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_patch_text($scope3_id, "#text/0", input.error ? boom(input.error) : "ok", void 0, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_error ? "__tests__/template.marko_3_input_error#0:6/init" : "__tests__/template.marko_3_input_error#0:6/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope3_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"), $cg__input_error && "__tests__/template.marko_3_input_error#0:6/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason(), $wi__err_message = _write_if($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $catch_content__err_message__closures = new Set();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
		box_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "#text/0", err.message)} ${_text_resume($scope2_id, "#text/1", count, 2)} ${_patch_text($scope2_id, "#text/2", input.label, 2, $scope0_reason, 0)}</span>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, _client_guard($scope0_reason, 0) ? "__tests__/template.marko_2_input_label#0:5/init" : "__tests__/template.marko_2_input_label#0:5/subscribe");
			_subscribe(_unfilled_if() && $wi__err_message && $catch_content__err_message__closures, _subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:6"))));
		}, $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:err_message/11": $wi__err_message && _unfilled_if($scope1_reason, 0) && $catch_content__err_message__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "8:4");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_3*content", 1, 1, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:count/10": $count__closures,
		"ClosureScopes:input_error/9": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "4:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
