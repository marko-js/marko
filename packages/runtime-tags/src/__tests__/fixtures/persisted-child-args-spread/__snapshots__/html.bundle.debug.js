// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	const badge = { content: _content("__tests__/template.marko_2*content", (a, b) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_patch_text($scope2_id, "#text/0", a)}${_patch_text($scope2_id, "#text/1", b, 2)}</em>`);
		_scope($scope2_id, {}, "__tests__/template.marko", "2:2");
	}, $scope0_id) };
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			badge.content(...input.parts);
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_parts: input.parts,
		show
	}, "__tests__/template.marko", 0, {
		input_parts: ["input.parts"],
		show: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.parts);
}, 1, 1);
