// template.marko
const $Probe_content__walks = "b";
const $Probe_content__template = "<p>probe</p>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell !>#childScope/0>__tests__/template.marko_1_bag_items#1;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Probe_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Probe_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Probe = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const bag = { items: [] };
		_html("<p>probe</p>");
		_script($scope1_id, "__tests__/template.marko_1_bag_items#1", 0);
		_patch_write($scope1_id, "PatchWrite:bag_items", bag.items, 1);
		$scope1_page && _scope($scope1_id, { bag_items: bag.items }, "__tests__/template.marko", "1:2", { bag_items: ["bag.items", "2:10"] });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
			Probe.content({});
			_patch_child_end();
			$scope0_page && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
