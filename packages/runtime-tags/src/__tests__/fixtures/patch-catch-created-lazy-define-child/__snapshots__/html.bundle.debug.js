// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_fill0", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $Lazy_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Lazy_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], []], [">#childScope/1>", [[""], []]], [">#childScope/1>", _shell_setup([["__tests__/template.marko_1_input_label#0:3/subscribe"], []], ["#childScope/1>", $setup$1])]))};${/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($Lazy_content__walks)};${/*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($Lazy_content__template)}`)(),
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_error = _client_guard($scope0_reason, 1), $wi__input_error = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_error__closures = new Set();
	const Lazy = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
		$Child_withLoadAssets({ label: input.label });
		_patch_child_end();
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:3/init");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope)
		}, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_input_label#0:3/subscribe");
	}, $scope0_id) };
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.error ? boom(input.error) : "ok", 1, $scope0_reason, 1)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_error ? "__tests__/template.marko_2_input_error#0:4/init" : "__tests__/template.marko_2_input_error#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_error__closures, _scope($scope2_id, { _: $wi__input_error && _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), $cg__input_error && "__tests__/template.marko_2_input_error#0:4/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, 1, 4, 0)}</b>`);
		const $childScope2 = _peek_scope_id($scope3_id, "#childScope/1", 1, 0, $scope0_id);
		Lazy.content({});
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _existing_scope($childScope2)
		}, "__tests__/template.marko", "10:4");
	}, void 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content", 1, 1, 1);
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:input_error/6": $wi__input_error && _unfilled_if($scope0_reason, 1) && $input_error__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
