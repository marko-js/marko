// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_w = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const $input_v__closures = new Set();
	let show = input.show;
	const Body = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_await($scope1_id, "#text/0", Promise.resolve(input.v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", r + input.w, 1, $scope0_reason, 0)}</p>`);
			_filled_guard($scope0_reason, 2) && $cg__input_w && _patch_write($scope2_id, "PatchMarkedWrite:r", r);
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "__tests__/template.marko_2_input_w#0:5/subscribe");
			_patch_join_init($scope2_id, "__tests__/template.marko_2_input_w#0:5_r#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">>input_w", _filled_guard($scope0_reason, 2) && "r");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_w__closures, _scope($scope2_id, { r: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && r }, "__tests__/template.marko", "2:15", { r: "2:21" }), $cg__input_w && "__tests__/template.marko_2_input_w#0:5/subscribe");
		}, 1, "__tests__/template.marko_2*content", _unfilled_if($scope0_reason, 2));
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_v__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_v#0:4/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (show) {
			const $scope3_id = _scope_id();
			_patch_child(0, "#childScope/0");
			Body.content({});
			_patch_child_end();
			_scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.w);
	_scope($scope0_id, {
		input_v: input.v,
		input_w: input.w,
		"ClosureScopes:input_w/8": _write_if($scope0_reason, 3) && $input_w__closures,
		"ClosureScopes:input_v/7": _write_if($scope0_reason, 2) && $input_v__closures
	}, "__tests__/template.marko", 0, {
		input_v: ["input.v"],
		input_w: ["input.w"]
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.v, !_server_guard($scope0_reason, 2));
}, 1);
