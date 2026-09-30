// tags/tab-editor.marko
const $template$2 = "<p>sel=<!></p>";
const $walks$2 = "Db%l";
_shells({ "__tests__/tags/tab-editor.marko": "__tests__/tags/tab-editor.marko;Db%;<p>sel=<!></p>" });
var tab_editor_default = _template_patch("__tests__/tags/tab-editor.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = input.tab;
	_html(`<p>sel=${_patch_text($scope0_id, "#text/0", String(selected), 2, $scope0_reason, 0)}</p>`);
	_patch_write($scope0_id, "input_tab", input.tab, 1);
	_patch_write($scope0_id, "input_tabChange", input.tabChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/tab-editor.marko_0_input_tab#3_input_tabChange#4/init");
	$scope0_page && _scope($scope0_id, {
		input_tab: _source_if($scope0_reason, 2) && input.tab,
		input_tabChange: _source_if($scope0_reason, 1) && input.tabChange
	}, "__tests__/tags/tab-editor.marko", 0, {
		input_tab: ["input.tab"],
		input_tabChange: ["input.tabChange"]
	});
}, 0, 0);

// tags/route-pg.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$2);
_shells({ "__tests__/tags/route-pg.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/route-pg.marko !__tests__/tags/route-pg.marko_0;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)($walks$2), ((_w0) => `${_w0}<button>+</button>`)($template$2)) });
var route_pg_default = _template_patch("__tests__/tags/route-pg.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(tab_editor_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "#childScope/0", $childScope);
		tab_editor_default({
			tab,
			tabChange: _resume((_new_tab) => {
				tab = _new_tab;
			}, "__tests__/tags/route-pg.marko_0/tabChange", $scope0_id)
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/route-pg.marko_0");
	_patch_value($scope0_id, "__tests__/tags/route-pg.marko_fill0", tab, 1);
	$scope0_page && _scope($scope0_id, {
		tab,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/route-pg.marko", 0, { tab: "1:6" });
}, 0, () => [tab_editor_default]);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Route_withLoadAssets = withLoadAssets(route_pg_default, "ready:__tests__/tags/route-pg.marko", void 0, 1);
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1))
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/1", $childScope);
			$Route_withLoadAssets({});
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [$Route_withLoadAssets]);
