// tags/inner.marko
const $template$1 = "<span>inner</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/inner.marko": "__tests__/tags/inner.marko !__tests__/tags/inner.marko_0,<span>inner</span>" });
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>inner</span>");
	_script($scope0_id, "__tests__/tags/inner.marko_0", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(msg) {
	throw new Error(msg);
}
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_patch_text($scope1_id, "#text/0", input.fail ? boom(input.msg) : input.msg, void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_fail#0:3/subscribe");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_msg#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_fail#0:3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_msg#0:4/subscribe");
	}, void 0, (err) => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_patch_write($scope2_id, "PatchWrite:err_message", err?.message);
		const $childScope = _patch_child($scope2_id, "#childScope/0");
		inner_default({});
		_script($scope2_id, "__tests__/template.marko_2_err_message#3", 1, 1);
		_patch_effect($scope2_id, "PatchEffect:__tests__/template.marko_2_err_message#3", "err_message");
		_scope($scope2_id, {
			err_message: err?.message,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4", { err_message: ["err.message", "6:11"] });
	}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_1*content", 1, 2);
	_patch_write($scope0_id, "PatchWrite:input_fail", input.fail, 1);
	_patch_write($scope0_id, "PatchWrite:input_msg", input.msg, 1);
	$scope0_page && _scope($scope0_id, {
		input_fail: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.fail,
		input_msg: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.msg,
		"ClosureScopes:input_fail/5": _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		"ClosureScopes:input_msg/6": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_fail: ["input.fail"],
		input_msg: ["input.msg"]
	});
}, 1);
