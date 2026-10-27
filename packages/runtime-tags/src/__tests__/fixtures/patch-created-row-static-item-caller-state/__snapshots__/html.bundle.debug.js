// tags/rows.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/rows.marko": "__tests__/tags/rows.marko;b%;<!><!><!>",
	"__tests__/tags/rows.marko_1*shell": "__tests__/tags/rows.marko_1*shell;D ;<em> </em>"
});
var rows_default = _template("__tests__/tags/rows.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of([1, 2], (x) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.label + x, void 0, $scope0_reason, 0)}</em>`);
		$cg__input_label && _patch_write($scope1_id, "PatchWrite:x", x, 1);
		$cg__input_label && _patch_init($scope1_id, "__tests__/tags/rows.marko_1_input_label#0:3_x#2/init");
		$scope0_page && _scope($scope1_id, {
			x: _unfilled_if($scope0_reason, 0) && x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/rows.marko", "1:2", { x: "1:6" });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/rows.marko_1*shell", 0, 0);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/rows.marko", 0);
});

// template.marko
const $template = "<!><!><button class=l>l</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button class=l>l</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_l#0:5/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let l = "a";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			rows_default({ label: l });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, { l }, "__tests__/template.marko", 0, { l: "1:6" });
}, 1);
