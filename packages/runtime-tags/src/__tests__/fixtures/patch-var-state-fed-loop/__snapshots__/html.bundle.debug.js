// tags/labeler.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/labeler.marko": "^__tests__/tags/labeler.marko;D ;<span> </span>" });
var labeler_default = _template("__tests__/tags/labeler.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/labeler.marko", 0);
	return $return;
});

// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/list.marko": "__tests__/tags/list.marko;b%;<!><!><!>",
	"__tests__/tags/list.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/list.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$2)}`)()
});
var list_default = _template("__tests__/tags/list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items__OR__input_suffix = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:item", item, !_server_guard($scope0_reason, 1));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "#childScope/0", $cg__input_items__OR__input_suffix && 1);
		let label = labeler_default({ title: item + input.suffix });
		$cg__input_items__OR__input_suffix && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/list.marko_1_label#6/var");
		_html(`<p>${_patch_text($scope1_id, "#text/2", label, void 0, $scope0_reason, 0)}</p>`);
		(_filled_guard($scope0_reason, 2) && !$cg__input_items || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "__tests__/tags/list.marko_1_input_suffix#0:4_item#4/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">input_suffix", _filled_guard($scope0_reason, 1) && "item");
		$scope0_page && _scope($scope1_id, {
			item: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/tags/list.marko", "1:2", { item: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/list.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items ? _patch_fill($scope0_id, "PatchFill:__tests__/tags/list.marko_fill0/unpatched", input.suffix) : $cg__input_items && _patch_write($scope0_id, "PatchMarkedWrite:input_suffix", input.suffix, 1);
	$scope0_page && _scope($scope0_id, { input_suffix: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.suffix }, "__tests__/tags/list.marko", 0, { input_suffix: ["input.suffix"] });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button>+</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = ["x"];
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	list_default({
		items,
		suffix: input.suffix
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
