// tags/probe.marko
const $template$1 = "<div> </div>";
const $walks$1 = " D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/probe.marko": "__tests__/tags/probe.marko; D ;<div> </div>" });
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let settled = false;
	_html(`<div>${_text_resume($scope0_id, "#text/1", settled ? "settled" : "pending", 1, 0, 0, 1)}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_input_promise#4", 1, _filled_guard($scope0_reason, 0), "input_promise");
	_scope($scope0_id, { input_promise: input.promise }, "__tests__/tags/probe.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_promise", input.promise, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&%c`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` Db%l/${_w0}&%c`)($walks$1)};${((_w0) => `<button>Count <!></button>${_w0}<!><!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	let count = 0;
	_html(`<button>Count ${_text_resume($scope0_id, "#text/1", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	probe_default({ promise: input.promise });
	_patch_child_end();
	_try($scope0_id, "#text/3", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_text_resume($scope3_id, "#text/0", v.name, 1, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:6/init" : "__tests__/template.marko_1_input_promise#0:6/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:6/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1, 0, 2);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope),
		"ClosureScopes:input_promise/8": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
