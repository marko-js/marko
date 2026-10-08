// probe.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
_shells({ "__tests__/probe.marko": "__tests__/probe.marko !__tests__/probe.marko_0_input_promise#3;D ;<div> </div>" });
var probe_default = _template_patch("__tests__/probe.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let settled = false;
	_html(`<div>${_text_resume($scope0_id, "#text/0", settled ? "settled" : "pending")}</div>`);
	_script($scope0_id, "__tests__/probe.marko_0_input_promise#3");
	_patch_effect($scope0_id, "__tests__/probe.marko_0_input_promise#3", "input_promise");
	_patch_value($scope0_id, "__tests__/probe.marko_fill0", settled, 1);
	$scope0_page ? _scope($scope0_id, { input_promise: input.promise }, "__tests__/probe.marko", 0, { input_promise: ["input.promise"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_promise", input.promise);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)("D l");
const $Probe_withLoadAssets = withLoadAssets(probe_default, flush, "ready:__tests__/probe.marko");
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template$1)}`)()
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Probe_withLoadAssets({ promise: input.promise });
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "#text/0", v.name, void 0, $scope0_reason, 0)}</em>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "8:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "__tests__/template.marko_1_input_promise#0:5/init");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 0) && "__tests__/template.marko_1_input_promise#0:5/subscribe", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<span class=loading>...</span>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	$scope0_page && _scope($scope0_id, {
		"#childScope/1": _existing_scope($childScope),
		"ClosureScopes:input_promise/6": $input_promise__closures
	}, "__tests__/template.marko", 0);
}, 1);
