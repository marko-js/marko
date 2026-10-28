// tags/card.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko," });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_fn = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : _resume(() => "-", "__tests__/tags/card.marko_0/g");
	_script($scope0_id, "__tests__/tags/card.marko_0_g#5", 0, _filled_guard($scope0_reason, 0), "g");
	$cg__input_fn && _patch_write($scope0_id, "PatchWrite:open", open, 1);
	$cg__input_fn && _patch_init($scope0_id, "__tests__/tags/card.marko_0_input_fn#2_open#3/init");
	_scope($scope0_id, {
		open: _unfilled_if($scope0_reason, 0) && open,
		g
	}, "__tests__/tags/card.marko", 0, {
		open: "1:6",
		g: "2:8"
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:g", g, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>more</button><span> </span>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& bD l`)("");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}& bD l`)("")};${((_w0) => `${_w0}<button>more</button><span> </span>`)("")}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(($scope0_page ? 3 : 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "__tests__/template.marko_0/fn", $scope0_id) });
	_patch_child_end();
	_html(`<button>more</button>${_el_resume($scope0_id, "#button/1")}<span>${_text_resume($scope0_id, "#text/2", input.x, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
