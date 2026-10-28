// layout.marko
const $template$2 = "<header><button> </button></header><main><!></main>";
const $walks$2 = "D D mD%l";
const $setup$3 = [[], ["a0"]];
_shells({ a: "a !a0;D D mD%;<header><button> </button></header><main><!></main>" });
var layout_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button>${_text_resume($scope0_id, "b", "open")}</button>${_el_resume($scope0_id, "a")}</header><main>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_script($scope0_id, "a0");
	_patch_fill($scope0_id, "va1", open, 1);
	_scope($scope0_id, { g: open });
});

// page-a.marko
const $template$1 = "<button class=a>a:<!></button>";
const $walks$1 = " Db%l";
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; Db%;<button class=a>a:<!></button>" });
var page_a_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=a>a:${_text_resume($scope0_id, "b", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb1", count, 1);
	_scope($scope0_id, { c: count });
});

// page-b.marko
const $template = "<button class=b>b:<!>:<!>:<!></button>";
const $walks = " Db%c%c%l";
const $setup$1 = [[], ["c1"]];
_shells({ c: "c !c1; Db%c%c%;<button class=b>b:<!>:<!>:<!></button>" });
var page_b_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [q, issues] = $global().search;
	let count = 0;
	_html(`<button class=b>b:${_text_resume($scope0_id, "b", q, 2, 4, 0)}:${_text_resume($scope0_id, "c", issues ? "!" : "", 2, 4, 0)}:${_text_resume($scope0_id, "d", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_fill_global_subscribe("c0", $scope0_id);
	_script($scope0_id, "c1");
	_patch_fill($scope0_id, "vc2", count, 1);
	_scope($scope0_id, { h: count });
});

// template.marko
const $PageA_withLoadAssets = withLoadAssets(() => page_a_default, "b", flush, "_b");
const $PageB_withLoadAssets = withLoadAssets(() => page_b_default, "c", flush, "_c");
const $setup = _shell_setup([[], ["d0"]], ["a>", $setup$3]);
_shells({
	d: /*@__PURE__*/ ((_w0) => `d${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	d1: /*@__PURE__*/ (() => `d1${_shell_marker(_shell_setup([[], []], ["b>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1)}`)(),
	d2: /*@__PURE__*/ (() => `d2${_shell_marker(_shell_setup([[], []], ["b>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_page = _write_guard($scope0_reason, 0), $wi__input_page = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_page__closures = /* @__PURE__ */ new Set();
	$global();
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "a", 1);
	layout_default({ content: _content("d4", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.page <= 0) {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id($scope2_id, "b", 0);
				$PageA_withLoadAssets({});
				_patch_child_end();
				_scope($scope2_id, { b: _existing_scope($childScope) });
				return 0;
			} else {
				const $scope3_id = _scope_id();
				const $childScope2 = _peek_scope_id($scope3_id, "b", 0);
				$PageB_withLoadAssets({});
				_patch_child_end();
				_scope($scope3_id, { b: _existing_scope($childScope2) });
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_page, void 0, void 0, void 0, ["d1", "d2"], $scope0_reason, 0);
		$wi__input_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_page__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "d3", $wg__input_page);
		$wg__input_page || $wi__input_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_script($scope0_id, "d0");
	_scope($scope0_id, {
		e: $wi__input_page && _unfilled_if($scope0_reason, 0) && $input_page__closures,
		a: _existing_scope($childScope3)
	});
}, 1);
