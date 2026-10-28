// tags/file-store.marko
const $template$5 = "";
const $walks$5 = "";
const $setup$5 = [[], []];
_shells({ "__tests__/tags/file-store.marko": "^__tests__/tags/file-store.marko !," });
_stateful_return("__tests__/tags/file-store.marko");
var file_store_default = _template("__tests__/tags/file-store.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let files = [];
	const $return = files;
	_script($scope0_id, "__tests__/tags/file-store.marko_0_input_value#2", 0, _filled_guard($scope0_reason, 0), "input_value");
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume((_new_files) => {
		files = _new_files;
	}, "__tests__/tags/file-store.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/file-store.marko_fill0", files, 1);
	_scope($scope0_id, {
		input_value: input.value,
		"#TagVariableChange": $valueChange2
	}, "__tests__/tags/file-store.marko", 0, { input_value: ["input.value"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
	return $return;
});

// tags/file-tabs.marko
const $template$4 = "<p> </p><button>+</button>";
const $walks$4 = "D l b";
const $setup$4 = [[], ["__tests__/tags/file-tabs.marko_0"]];
_shells({ "__tests__/tags/file-tabs.marko": "__tests__/tags/file-tabs.marko !__tests__/tags/file-tabs.marko_0;D l ;<p> </p><button>+</button>" });
var file_tabs_default = _template("__tests__/tags/file-tabs.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tabs = input.files;
	_html(`<p>${_text_resume($scope0_id, "#text/0", tabs.map((tab) => tab.path).join())}</p><button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/file-tabs.marko_0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/file-tabs.marko_0_input_files#4_input_filesChange#5/init");
	const $tabsChange = input.filesChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/tags/file-tabs.marko_fill2", tabs, "PatchWrite:TagVariableChange:tabs", $tabsChange, $scope0_reason, 0);
	_scope($scope0_id, {
		input_files: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.files,
		input_filesChange: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.filesChange,
		tabs,
		"TagVariableChange:tabs": $tabsChange
	}, "__tests__/tags/file-tabs.marko", 0, {
		input_files: ["input.files"],
		input_filesChange: ["input.filesChange"],
		tabs: "1:6",
		"TagVariableChange:tabs": ["tabsChange", "1:6"]
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/file-tabs.marko_fill0", input.files, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/file-tabs.marko_fill1", input.filesChange, !_server_guard($scope0_reason, 2)));
});

// tags/file-panes.marko
const $template$3 = "<div><!></div>";
const $walks$3 = "D%l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/file-panes.marko": "__tests__/tags/file-panes.marko;D%;<div><!></div>" });
var file_panes_default = _template("__tests__/tags/file-panes.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.first, {}, 2, 0, 0, $wg__input_first, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/tags/file-panes.marko", 0);
});

// tags/file-host.marko
const $template$2 = $template$3;
const $walks$2 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$2 = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({
	"__tests__/tags/file-host.marko_1*content": /*@__PURE__*/ ((_w0) => `__tests__/tags/file-host.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$4]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$4)};${_w0}`)($template$4),
	"~__tests__/tags/file-host.marko_1*content": /*@__PURE__*/ ((_w0) => `~__tests__/tags/file-host.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$4]))};${((_w0) => `/${_w0}&`)($walks$4)};${_w0}`)($template$4),
	"__tests__/tags/file-host.marko": /*@__PURE__*/ ((_w0) => `__tests__/tags/file-host.marko${_shell_marker($setup$2)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$3)
});
var file_host_default = _template("__tests__/tags/file-host.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_files__closures = new Set();
	const $input_filesChange__closures = new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	file_panes_default({ first: attrTag({ content: _content("__tests__/tags/file-host.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		file_tabs_default({
			files: input.files,
			filesChange: input.filesChange
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/file-host.marko_1_input_files#0:3/init");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/file-host.marko_1_input_filesChange#0:4/init");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_filesChange__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_files__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/file-host.marko", "2:4")));
	}, $scope0_id, 1) }) });
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_files/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_files__closures,
		"ClosureScopes:input_filesChange/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_filesChange__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/tags/file-host.marko", 0);
});

// tags/route-pg.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$5], ["#childScope/2>", $setup$2]);
_shells({ "__tests__/tags/route-pg.marko": /*@__PURE__*/ (() => `__tests__/tags/route-pg.marko${_shell_marker($setup$1)};${((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$2)};${((_w0, _w1) => `${_w0}${_w1}`)("", $template$2)}`)() });
var route_pg_default = _template("__tests__/tags/route-pg.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let files = file_store_default({ value: [{ path: "a" }] });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/route-pg.marko_0_files#3/var");
	_patch_child_end();
	_set_scope_reason(10);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/2", 1);
	file_host_default({
		files,
		filesChange: _resume((_new_files) => {
			files = _new_files;
		}, "__tests__/tags/route-pg.marko_0/filesChange", $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2)
	}, "__tests__/tags/route-pg.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Route_withLoadAssets = withLoadAssets(() => route_pg_default, "__tests__/tags/route-pg.marko", flush, "ready:__tests__/tags/route-pg.marko");
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Route_withLoadAssets({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
