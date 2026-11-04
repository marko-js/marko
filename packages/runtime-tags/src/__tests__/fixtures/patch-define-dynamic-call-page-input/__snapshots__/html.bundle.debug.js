// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template)}`,
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_label__OR__input_other__OR__input_show = _unfilled_if($scope0_reason, 3), $ui__input_other = _unfilled_if($scope0_reason, 5), $ui__input_other__OR__input_show = _unfilled_if($scope0_reason, 2), $ui__input_label__OR__input_other = _unfilled_if($scope0_reason, 0), $ui__input_label__OR__input_show = _unfilled_if($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 4), $fg__input_show = _filled_guard($scope0_reason, 6), $fg__input_other = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_1*content", ({ isOpen, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__isOpen = _write_guard($scope1_reason, 0), $ui__isOpen = _unfilled_if($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", label, 1, $scope1_reason, 1)}</em>`);
				_client_guard($scope1_reason, 1) && _patch_render($scope2_id, "__tests__/template.marko_2_label#1:4/setup");
				_scope($scope2_id, { _: _write_if($scope1_reason, 1) && _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		$fg__label && _client_guard($scope1_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_2_label#1:4/setup", "label");
		_write_if($scope1_reason, 0) && _scope($scope1_id, { label: ($ui__isOpen || _unfilled_if($scope1_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" }) || $fg__label && $ui__isOpen && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 1));
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_3*content", ({ label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<i>${_text_mark($scope3_id, "#text/0", label, 1, 4, 0)}</i>`);
		_scope($scope3_id, {}, "__tests__/template.marko", "7:2");
	}, $scope0_id) };
	_set_scope_reason(2 | _updates_from($scope0_reason, 4) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: open,
		label: input.label
	});
	_patch_child_end();
	const Tag = input.other ? Other : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: input.show,
		label: input.label + "!"
	}, 9, 0, 0, _write_guard($scope0_reason, 3), $scope0_reason, 3);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#5_input_show#7_Tag#12/setup", (($fg__input_label ? " input_label" : "") + ($fg__input_show ? " input_show" : "") + ($fg__input_other ? " Tag" : "")).slice(1), $scope0_reason, 3);
	_scope($scope0_id, {
		input_label: ($ui__input_other__OR__input_show || $ui__input_label__OR__input_other__OR__input_show) && input.label,
		input_show: ($ui__input_label__OR__input_other || $ui__input_label__OR__input_other__OR__input_show) && input.show,
		open,
		Panel: $ui__input_other && Panel,
		Other: $ui__input_other && Other,
		Tag: ($ui__input_label__OR__input_show || $ui__input_label__OR__input_other__OR__input_show) && Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_show: ["input.show"],
		open: "1:6",
		Panel: "2:9",
		Other: "7:9",
		Tag: "11:8"
	}) || ($fg__input_label && $ui__input_other__OR__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)), $fg__input_show && $ui__input_label__OR__input_other && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 6)), $fg__input_other && $ui__input_label__OR__input_show && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 5)));
}, 1);
