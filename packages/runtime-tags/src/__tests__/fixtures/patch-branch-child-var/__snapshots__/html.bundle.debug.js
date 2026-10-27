// tags/box.marko
const $template$1 = "<div class=box> </div>";
const $walks$1 = " D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/box.marko": "^__tests__/tags/box.marko; D ;<div class=box> </div>" });
var box_default = _template("__tests__/tags/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const root = _el($scope0_id, "__tests__/tags/box.marko_0_#div#0");
	_html(`<div class=box>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}</div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = root;
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/box.marko", 0);
	return $return;
});

// template.marko
const $template = "<main><!><button id=c> </button></main>";
const $walks = "D%b D m";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b D ;<main><!><button id=c> </button></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<button id=read>read</button>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0, $cg__input_label && 1);
			let el = box_default({ label: input.label });
			$cg__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_el#3/var");
			_patch_child_end();
			_html(`<button id=read>read</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_write($scope1_id, "PatchWrite:el", el, 1);
			$cg__input_label && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:6/init");
			$scope0_page && _scope($scope1_id, {
				el,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:4", { el: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button id=c>${_text_resume($scope0_id, "#text/2", count)}</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
