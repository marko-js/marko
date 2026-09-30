// tags/tab-editor.marko
const $template$1 = "<p>sel=<!></p>";
const $walks$1 = "Db%l";
_shells({ c: "c;Db%;<p>sel=<!></p>" });
var tab_editor_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let selected = input.tab;
	_html(`<p>sel=${_patch_text($scope0_id, "a", String(selected), 2, $scope0_reason, 0)}</p>`);
	_patch_write($scope0_id, "d", input.tab, 1);
	_patch_write($scope0_id, "e", input.tabChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c0");
	$scope0_page && _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.tab,
		e: _source_if($scope0_reason, 1) && input.tabChange
	});
}, 0, 0);

// tags/route-pg.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b !b1;${_w0};${_w1}`)(((_w0) => `/${_w0}& b`)($walks$1), ((_w0) => `${_w0}<button>+</button>`)($template$1)) });
var route_pg_default = _template_patch("b", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tab = 0;
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(tab_editor_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "a", $childScope);
		tab_editor_default({
			tab,
			tabChange: _resume((_new_tab) => {
				tab = _new_tab;
			}, "b0", $scope0_id)
		});
	}
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b2", tab, 1);
	$scope0_page && _scope($scope0_id, {
		c: tab,
		a: _existing_scope($childScope)
	});
}, 0, () => [tab_editor_default]);

// template.marko
const $Route_withLoadAssets = withLoadAssets(route_pg_default, "_b", void 0, 1);
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template))
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "b", $childScope);
			$Route_withLoadAssets({});
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [$Route_withLoadAssets]);
