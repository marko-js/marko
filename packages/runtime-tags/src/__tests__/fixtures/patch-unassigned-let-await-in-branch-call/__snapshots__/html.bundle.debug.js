// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let show = input.show;
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_w#0:4/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", Promise.resolve(input.v), (r) => {
				const $scope3_id = _scope_id();
				_patch_child(0, "#childScope/0");
				Body.content({});
				_patch_child_end();
				_scope($scope3_id, {}, "__tests__/template.marko", "3:11");
			}, void 0, 0);
			_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_scope($scope0_id, {
		input_w: input.w,
		input_v: input.v,
		"ClosureScopes:input_w/7": _write_if($scope0_reason, 1) && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		input_v: ["input.v"]
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.v, !_server_guard($scope0_reason, 2)));
}, 1);
