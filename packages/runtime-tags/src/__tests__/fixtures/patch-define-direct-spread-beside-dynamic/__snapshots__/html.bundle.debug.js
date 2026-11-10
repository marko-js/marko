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
	const $scope0_reason = _scope_reason(), $uf__input_show__OR__input_rest = _updates_from($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_rest = _filled_guard($scope0_reason, 2), $fg__input_other = _filled_guard($scope0_reason, 3), $fg__input_label = _filled_guard($scope0_reason, 4);
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
	_set_scope_reason($uf__input_show__OR__input_rest << 1 | $uf__input_show__OR__input_rest << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Panel.content({
		isOpen: input.show,
		...input.rest
	});
	_patch_child_end();
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_show#5_input_rest#6/setup", [$fg__input_show && "input_show", $fg__input_rest && "input_rest"], $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#8_Panel#11/setup", $fg__input_other && "input_other", $scope0_reason, 3);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#9_open#10_Tag#13/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_show: _write_if($scope0_reason, 2) && input.show,
		input_rest: _write_if($scope0_reason, 1) && input.rest,
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 3) && Panel,
		Tag,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_rest: ["input.rest"],
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "8:8"
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1)), $fg__input_rest && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_rest", input.rest, !_server_guard($scope0_reason, 2)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 4)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 3)));
}, 1);
