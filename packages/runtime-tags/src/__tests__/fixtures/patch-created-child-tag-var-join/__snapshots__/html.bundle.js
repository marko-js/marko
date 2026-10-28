// tags/file-store.marko
const $setup$4 = [[], []];
_shells({ d: "d !," });
_stateful_return("d");
var file_store_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let files = [];
	const $return = files;
	_script($scope0_id, "d1", 0, _filled_guard($scope0_reason, 0), "c");
	const $valueChange2 = _patch_bind($scope0_id, "wU", _resume((_new_files) => {
		files = _new_files;
	}, "d0", $scope0_id) || void 0, 0, 0);
	_patch_fill($scope0_id, "vd2", files, 1);
	_scope($scope0_id, {
		c: input.value,
		U: $valueChange2
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input.value, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
	return $return;
});

// tags/file-tabs.marko
const $template$3 = "<p> </p><button>+</button>";
const $walks$2 = "D l b";
const $setup$3 = [[], ["e0"]];
_shells({ e: "e !e0;D l ;<p> </p><button>+</button>" });
var file_tabs_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tabs = input.files;
	_html(`<p>${_text_resume($scope0_id, "a", tabs.map((tab) => tab.path).join())}</p><button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "e0");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "e3");
	const $tabsChange = input.filesChange || void 0;
	_patch_let_change($scope0_id, "ve4", tabs, "wi", $tabsChange, $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.files,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.filesChange,
		h: tabs,
		i: $tabsChange
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "ve1", input.files, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "ve2", input.filesChange, !_server_guard($scope0_reason, 2)));
});

// tags/file-panes.marko
const $template$2 = "<div><!></div>";
const $setup$2 = [[], []];
_shells({ c: "c;D%;<div><!></div>" });
var file_panes_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_first = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.first, {}, 2, 0, 0, $wg__input_first, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// tags/file-host.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({
	b2: /*@__PURE__*/ ((_w0) => `b2${_shell_marker(_shell_setup([[], []], ["a>", $setup$3]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$3),
	b: /*@__PURE__*/ ((_w0) => `b${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$2)
});
var file_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_files__closures = /* @__PURE__ */ new Set();
	const $input_filesChange__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	file_panes_default({ first: attrTag({ content: _content("b2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		file_tabs_default({
			files: input.files,
			filesChange: input.filesChange
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b1");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_filesChange__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_files__closures, _scope($scope1_id, {
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		})));
	}, $scope0_id, 1) }) });
	_patch_child_end();
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_files__closures,
		g: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_filesChange__closures,
		a: _existing_scope($childScope2)
	});
});

// tags/route-pg.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1);
const $setup = _shell_setup([[], []], ["a>", $setup$4], ["c>", $setup$1]);
_shells({ f: /*@__PURE__*/ (() => `f${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1)};${((_w0, _w1) => `${_w0}${_w1}`)("", $template$1)}`)() });
var route_pg_default = _template("f", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let files = file_store_default({ value: [{ path: "a" }] });
	_var($scope0_id, "b", $childScope, "f1");
	_patch_child_end();
	_set_scope_reason(10);
	const $childScope2 = _peek_scope_id($scope0_id, "c", 1);
	file_host_default({
		files,
		filesChange: _resume((_new_files) => {
			files = _new_files;
		}, "f0", $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
});

// template.marko
const $Route_withLoadAssets = withLoadAssets(() => route_pg_default, "f", flush, "_f");
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["b>", $setup]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Route_withLoadAssets({});
			_patch_child_end();
			_scope($scope1_id, { b: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a0"], $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
