// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 1)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_w__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_w#0:3/subscribe");
	}, $scope0_id) };
	let view = input.show ? Body : null;
	_dynamic_tag($scope0_id, "#text/0", view, {});
	_scope($scope0_id, {
		input_w: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.w,
		Body: _unfilled_if($scope0_reason, 2) && Body,
		"ClosureScopes:input_w/8": _write_if($scope0_reason, 1) && $input_w__closures
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		Body: "1:9"
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1)), _content_withhold(input.show), _content_withhold(Body));
}, 1);
