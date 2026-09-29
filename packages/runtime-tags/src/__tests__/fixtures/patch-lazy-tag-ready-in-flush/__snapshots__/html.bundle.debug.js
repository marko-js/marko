// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template_patch("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "#text/2", count, 2)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_value($scope0_id, "__tests__/child.marko_fill0", count, 1);
	$scope0_page && _scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)($walks$1);
const $Child_withLoadAssets = withLoadAssets(child_default, "ready:__tests__/child.marko", void 0, 1);
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<b> </b>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<b> </b>",
	"__tests__/template.marko_1_#text#3/await": "__tests__/template.marko_1_#text#3/await;D ;<em> </em>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&%c`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}<!><!>`)($template$1)),
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&%c`)($walks$1), ((_w0) => `<!><!>${_w0}<!><!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	$Child_withLoadAssets({ label: "top" });
	_try($scope0_id, "#text/2", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.a, (a) => {
			const $scope3_id = _scope_id();
			_html(`<b>${_patch_text($scope3_id, "#text/0", a, void 0, $scope0_reason, 1)}</b>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "5:4");
		}, 1, "__tests__/template.marko_3*content", 1);
		_set_serialize_reason(0);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/2", $childScope2);
		$Child_withLoadAssets({ label: "in-try" });
		_await($scope1_id, "#text/3", input.b, (b) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_patch_text($scope4_id, "#text/0", b, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope4_id, {}, "__tests__/template.marko", "7:4");
		}, 1, "__tests__/template.marko_4*content", 1);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_a__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/2": _existing_scope($childScope2)
		}, "__tests__/template.marko", "4:2"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_a#0:5/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_b#0:6/subscribe");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<i>loading</i>");
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	$scope0_page && _scope($scope0_id, {
		"#childScope/1": _existing_scope($childScope),
		"ClosureScopes:input_a/7": $input_a__closures,
		"ClosureScopes:input_b/8": $input_b__closures
	}, "__tests__/template.marko", 0);
}, 1, () => [$Child_withLoadAssets]);
