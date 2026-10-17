// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	const badge = { content: _content("__tests__/template.marko_2*content", (a, b) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "#text/0", a, void 0, $scope2_reason, 0)}${_patch_text($scope2_id, "#text/1", b, 2, $scope2_reason, 1)}</em>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id();
			badge.content(...input.parts);
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", show, 1);
	$scope0_page ? _scope($scope0_id, {
		input_parts: input.parts,
		show
	}, "__tests__/template.marko", 0, {
		input_parts: ["input.parts"],
		show: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.parts, !_server_guard($scope0_reason, 0));
}, 1);
