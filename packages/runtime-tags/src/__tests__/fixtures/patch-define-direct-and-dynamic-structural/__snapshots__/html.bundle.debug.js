// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_other = _write_if($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1), $cg__isOpen = _client_guard($scope1_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", label, 1, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_render($scope2_id, "__tests__/template.marko_2_label#1:4/setup");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		$fg__label && $cg__isOpen && _patch_render($scope1_id, "__tests__/template.marko_2_label#1:4/setup", "label");
		_write_if($scope1_reason, 0) && _scope($scope1_id, { label: (_unfilled_if($scope1_reason, 0) || _unfilled_if($scope1_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || $fg__label && $cg__isOpen && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__label = _write_guard($scope3_reason, 0);
		_html(`<i>${_text_mark($scope3_id, "#text/0", label, $wg__label)}</i>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(2 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_patch_child_end();
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#6_Panel#8_Other#9/setup", $fg__input_other && "input_other", $scope0_reason, 1);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#5_open#7_Tag#11/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: $wi__input_other && Panel,
		Other: $wi__input_other && Other,
		Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Other: "7:9",
		Tag: "11:8"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 1)));
}, 1);
