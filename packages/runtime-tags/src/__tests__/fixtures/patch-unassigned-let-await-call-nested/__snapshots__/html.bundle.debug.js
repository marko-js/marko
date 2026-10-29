// template.marko
const $Body_content__walks = "D l";
const $Body_content__template = "<p> </p>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Body_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Body_content__template);
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/template.marko_0_#text#0/await;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let x = input.v;
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_w#0:4/subscribe");
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
		Body.content({});
		_patch_child_end();
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
	}, $scope0_id) };
	_await($scope0_id, "#text/0", Promise.resolve(x), (r) => {
		const $scope3_id = _scope_id();
		_patch_child(1, "#childScope/0");
		Outer.content({});
		_patch_child_end();
	}, 1, 0);
	_scope($scope0_id, { "ClosureScopes:input_w/6": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
