// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let items = input.items;
	_for_of(items, (v) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", Promise.resolve(v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", r + input.w)}</p>`);
			_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { r: $wi__input_w && r }, "__tests__/template.marko", "2:19", { r: "2:25" }), "__tests__/template.marko_2_input_w#0:4/subscribe");
		}, void 0, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0");
	_scope($scope0_id, {
		input_w: input.w,
		"ClosureScopes:input_w/6": $wi__input_w && $input_w__closures
	}, "__tests__/template.marko", 0, { input_w: ["input.w"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 1));
}, 1);
