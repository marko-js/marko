// tags/host/child.marko
const $template$2 = "<p class=child> </p>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/host/child.marko": "__tests__/tags/host/child.marko;D ;<p class=child> </p>" });
var child_default = _template("__tests__/tags/host/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p class=child>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {}, "__tests__/tags/host/child.marko", 0);
});

// tags/host/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/tags/host/child.marko", flush, "ready:__tests__/tags/host/child.marko");
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/host/index.marko": "__tests__/tags/host/index.marko !; ;<section></section>",
	"__tests__/tags/host/index.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/host/index.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/1>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`)()
});
var host_default = _template("__tests__/tags/host/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/1", 0);
			$Child_withLoadAssets({ label: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/tags/host/index.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/tags/host/index.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/host/index.marko_1*shell"], $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_show)}`);
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/tags/host/index.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/host/index.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	host_default({
		show: input.show,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
