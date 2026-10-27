// template.marko
const $Panel_content__walks = "b";
const $Panel_content__template = "<em>panel</em>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_2*shell": /*@__PURE__*/ (() => `__tests__/template.marko_2*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html("<em>panel</em>");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			const $childScope = _patch_child($scope2_id, "#childScope/0", 0);
			Panel.content({});
			_patch_child_end();
			$scope0_page && _scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	const Tag = open ? Panel : "div";
	_dynamic_tag($scope0_id, "#text/1", Tag, {}, 8);
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		open,
		Panel
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		Panel: "2:9"
	});
}, 1);
