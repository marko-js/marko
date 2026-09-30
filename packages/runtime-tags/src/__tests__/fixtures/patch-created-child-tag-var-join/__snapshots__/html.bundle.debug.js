// tags/file-store.marko
const $template$5 = "";
const $walks$5 = "";
_shells({ "__tests__/tags/file-store.marko": "__tests__/tags/file-store.marko !__tests__/tags/file-store.marko_0_input_value#2," });
var file_store_default = _template_patch("__tests__/tags/file-store.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let files = [];
	const $return = files;
	_script($scope0_id, "__tests__/tags/file-store.marko_0_input_value#2", 0);
	_patch_effect($scope0_id, "__tests__/tags/file-store.marko_0_input_value#2", "input_value");
	_patch_bind($scope0_id, "#TagVariableChange", _resume((_new_files) => {
		files = _new_files;
	}, "__tests__/tags/file-store.marko_0/valueChange", $scope0_id) || void 0);
	_patch_value($scope0_id, "__tests__/tags/file-store.marko_fill0", files, 1);
	$scope0_page ? _scope($scope0_id, {
		input_value: input.value,
		"#TagVariableChange": _resume((_new_files) => {
			files = _new_files;
		}, "__tests__/tags/file-store.marko_0/valueChange", $scope0_id) || void 0
	}, "__tests__/tags/file-store.marko", 0, { input_value: ["input.value"] }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "input_value", input.value);
	$scope0_page && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/file-tabs.marko
const $template$4 = "<p> </p><button>+</button>";
const $walks$4 = "D l b";
_shells({ "__tests__/tags/file-tabs.marko": "__tests__/tags/file-tabs.marko !__tests__/tags/file-tabs.marko_0;D l ;<p> </p><button>+</button>" });
var file_tabs_default = _template_patch("__tests__/tags/file-tabs.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tabs = input.files;
	input.filesChange && _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "__tests__/tags/file-tabs.marko_fill0", tabs);
	_html(`<p>${_text_resume($scope0_id, "#text/0", tabs.map((tab) => tab.path).join())}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/file-tabs.marko_0");
	_patch_write($scope0_id, "input_files", input.files, 1);
	_patch_write($scope0_id, "input_filesChange", input.filesChange, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/file-tabs.marko_0_input_files#4_input_filesChange#5/init");
	_patch_value($scope0_id, "__tests__/tags/file-tabs.marko_fill0", tabs, 1);
	_patch_bind($scope0_id, "TagVariableChange:tabs", input.filesChange || void 0);
	$scope0_page && _scope($scope0_id, {
		input_files: _source_if($scope0_reason, 2) && input.files,
		input_filesChange: _source_if($scope0_reason, 1) && input.filesChange,
		tabs,
		"TagVariableChange:tabs": input.filesChange || void 0
	}, "__tests__/tags/file-tabs.marko", 0, {
		input_files: ["input.files"],
		input_filesChange: ["input.filesChange"],
		tabs: "1:6",
		"TagVariableChange:tabs": ["tabsChange", "1:6"]
	});
}, 0, 0);

// tags/file-panes.marko
const $template$3 = "<div><!></div>";
const $walks$3 = "D%l";
_shells({ "__tests__/tags/file-panes.marko": "__tests__/tags/file-panes.marko;D%;<div><!></div>" });
var file_panes_default = _template_patch("__tests__/tags/file-panes.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_first = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.first;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_first, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/file-panes.marko", 0);
}, 0, 0);

// tags/file-host.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
_shells({
	"__tests__/tags/file-host.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/file-host.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$4), $template$4),
	"__tests__/tags/file-host.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/file-host.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D%l"), $template$3)
});
var file_host_default = _template_patch("__tests__/tags/file-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_files__closures = new Set();
	const $input_filesChange__closures = new Set();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	file_panes_default({ first: attrTag({ content: _content_elide("__tests__/tags/file-host.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		file_tabs_default({
			files: input.files,
			filesChange: input.filesChange
		});
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/file-host.marko_1_input_files#0:3/init");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/file-host.marko_1_input_filesChange#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_filesChange__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_files__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/file-host.marko", "2:4")));
	}, $scope0_id) }) });
	$scope0_page && _scope($scope0_id, {
		"ClosureScopes:input_files/5": $input_files__closures,
		"ClosureScopes:input_filesChange/6": $input_filesChange__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/tags/file-host.marko", 0);
}, 0, () => [file_tabs_default, file_panes_default]);

// tags/route-pg.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$2);
_shells({ "__tests__/tags/route-pg.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/route-pg.marko;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$2), ((_w0, _w1) => `${_w0}${_w1}`)("", $template$2)) });
var route_pg_default = _template_patch("__tests__/tags/route-pg.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let files = file_store_default({ value: [{ path: "a" }] });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/route-pg.marko_0_files#3/var");
	const $childScope2 = _peek_scope_id();
	if ($scope0_page || _must_render(file_host_default)) {
		_set_serialize_reason(10);
		_patch_child($scope0_id, "#childScope/2", $childScope2);
		file_host_default({
			files,
			filesChange: _resume((_new_files) => {
				files = _new_files;
			}, "__tests__/tags/route-pg.marko_0/filesChange", $scope0_id)
		});
	}
	$scope0_page && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/tags/route-pg.marko", 0);
}, 0, () => [file_store_default, file_host_default]);

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
