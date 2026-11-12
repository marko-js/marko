// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/child.marko": "__tests__/tags/child.marko;b%;<!><!><!>" });
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_renderer__OR__input_label = _write_guard($scope0_reason, 0), $ui__input_renderer__OR__input_label = _unfilled_if($scope0_reason, 0), $fg__input_renderer = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.renderer, { label: input.label }, 1, 0, 0, $wg__input_renderer__OR__input_label, $scope0_reason, 0, 0, 1);
	_patch_render($scope0_id, "__tests__/tags/child.marko_0_input_renderer#3_input_label#4/setup", (($fg__input_renderer ? " input_renderer" : "") + ($fg__input_label ? " input_label" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_renderer: _write_if($scope0_reason, 2) && $ui__input_renderer__OR__input_label && input.renderer,
		input_label: _write_if($scope0_reason, 1) && $ui__input_renderer__OR__input_label && input.label
	}, "__tests__/tags/child.marko", 0, {
		input_renderer: ["input.renderer"],
		input_label: ["input.label"]
	}) || ($fg__input_renderer && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_renderer", input.renderer, !_server_guard($scope0_reason, 1)), $fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/2>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b%b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button><!>${_w0}<!>`)($template$1)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__label = _write_guard($scope1_reason, 0), $wi__label = _write_if($scope1_reason, 0);
		_if(() => {
			if (label === "two") {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", label, 1, 4, 0)}</em>`);
				_scope($scope2_id, { _: $wi__label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__label, 1, 0, 0, ["__tests__/template.marko_2*shell"]);
		$wi__label && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id, void 0, 1) };
	const B = { content: _content_resume("__tests__/template.marko_3*content", ({ label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<b>${_text_mark($scope3_id, "#text/0", label, 1, 4, 0)}</b>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id, void 0, 1) };
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", open ? A : B, { label: "local" });
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 1);
	child_default({
		renderer: input.a ? A : B,
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		A,
		B,
		open,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		A: "1:9",
		B: "6:9",
		open: "9:6"
	});
}, 1);
