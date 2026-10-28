// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><button id=t>toggle</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button id=t>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell __tests__/template.marko_1_o#0:6/init;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = true;
	const Panel = { content: _content("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 2), $wg__isOpen = _write_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</em>`);
				_write_if($scope2_reason, 0) && _scope($scope3_id, { _: _write_if($scope2_reason, 2) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", _write_guard($scope2_reason, 0), $wg__isOpen, 0, 0, 1);
		_script($scope2_id, "__tests__/template.marko_2_label#4", $wg__isOpen);
		_scope($scope2_id, { label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || _filled_guard($scope2_reason, 2) && _patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", label, !_server_guard($scope2_reason, 2));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			Panel.content({
				isOpen: o,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		o
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		o: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
