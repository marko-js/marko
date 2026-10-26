// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
function read(reads) {
	reads.count++;
}
const $setup$1 = [[], []];
_shells({ "__tests__/tags/counter-box/index.marko": "^__tests__/tags/counter-box/index.marko !;Db%;<span>box <!></span>" });
_stateful_return("__tests__/tags/counter-box/index.marko");
var counter_box_default = _template("__tests__/tags/counter-box/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = input.start;
	_html(`<span>box ${_text_resume($scope0_id, "#text/0", count, 2)}</span>`);
	const $return = count;
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", read(input.reads) || _resume(function(v) {
		count = v;
	}, "__tests__/tags/counter-box/index.marko_0/valueChange", $scope0_id) || void 0, $scope0_reason, 1);
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter-box/index.marko_fill0", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_reads: input.reads,
		"#TagVariableChange": $valueChange2
	}, "__tests__/tags/counter-box/index.marko", 0, { input_reads: ["input.reads"] }) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_reads", input.reads, !_server_guard($scope0_reason, 1));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&D l l`)($walks$1)};${((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const reads = { count: 0 };
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 1);
	let count = counter_box_default({
		start: 1,
		reads
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_count#6/var");
	_html(`<p>${_patch_text($scope0_id, "#text/2", reads.count, void 0, 0, 0)}</p><button>+</button>${_el_resume($scope0_id, "#button/3")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:16" });
}, 1);
