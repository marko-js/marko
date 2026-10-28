// child.marko
const $template = "<span class=child>child <!></span>";
const $walks = "Db%l";
const $setup = [[], []];
_shells({ a: "a;Db%;<span class=child>child <!></span>" });
var child_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=child>child ${_text_resume($scope0_id, "a", input.label, 2, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(() => child_default, "a", flush, "_a");
_shells({
	b: "b; ;<main></main>",
	b2: /*@__PURE__*/ (() => `b2${_shell_marker(_shell_setup([[], ["b0"]], ["d>", $setup]))};${/*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 0;
			_html(`<button>${_text_resume($scope1_id, "b", n)}</button>${_el_resume($scope1_id, "a")}`);
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "d", 0);
			$Child_withLoadAssets({ label: n });
			_patch_child_end();
			_script($scope1_id, "b0");
			_patch_fill($scope1_id, "vb1", n, 1);
			_scope($scope1_id, {
				e: n,
				d: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b2"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "a", $wg__input_show)}`);
	_scope($scope0_id, {});
}, 1);
