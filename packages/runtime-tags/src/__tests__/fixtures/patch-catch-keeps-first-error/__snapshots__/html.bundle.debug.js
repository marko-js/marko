// tags/child.marko
const $template$1 = "<span><!>|<!>|<!></span>";
const $walks$1 = "D%c%c%l";
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;D%c%c%;<span><!>|<!>|<!></span>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.msg, void 0, $scope0_reason, 0)}|${_patch_text($scope0_id, "#text/1", input.count, 2, $scope0_reason, 1)}|${_patch_text($scope0_id, "#text/2", input.label, 2, $scope0_reason, 2)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(e) {
	throw e;
}
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	const $input_fail__closures = new Set();
	const $input_msg__closures = new Set();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.fail ? boom(new Error(input.msg)) : "ok", void 0, $scope0_reason, 0)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "__tests__/template.marko_2_input_fail#0:6/init");
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_msg#0:7/init");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_msg__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_fail__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_fail#0:6/subscribe"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_msg#0:7/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(12 | _mask_group($scope0_reason, 1) << 5);
		const $childScope = _patch_child($scope1_id, "#childScope/0");
		child_default({
			msg: err.message,
			count: n,
			label: input.label
		});
		_subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:4"), "__tests__/template.marko_1_input_label#0:5/subscribe"), "__tests__/template.marko_1_n#0:8/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, "");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_write($scope0_id, "PatchWrite:input_fail", input.fail, 1);
	_patch_write($scope0_id, "PatchWrite:input_msg", input.msg, 1);
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", n, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: input.label,
		input_fail: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && input.fail,
		input_msg: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.msg,
		n,
		"ClosureScopes:input_label/9": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:n/12": $n__closures,
		"ClosureScopes:input_fail/10": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_fail__closures,
		"ClosureScopes:input_msg/11": _write_if($scope0_reason, 3) && (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && $input_msg__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_fail: ["input.fail"],
		input_msg: ["input.msg"],
		n: "2:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label);
}, 1);
