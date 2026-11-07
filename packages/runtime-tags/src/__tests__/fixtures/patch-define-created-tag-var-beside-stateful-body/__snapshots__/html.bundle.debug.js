// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell __tests__/template.marko_1_open#0:8/setup;${/*@__PURE__*/ ((_w0) => `b0${_w0}&D l%c`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<b> </b><!><!>`)($Panel_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D ;<em> </em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 1), $wi__label = _write_if($scope2_reason, 2), $cg__label = _client_guard($scope2_reason, 2), $fg__label = _filled_guard($scope2_reason, 2), $cg__isOpen = _client_guard($scope2_reason, 1), $fg__isOpen = _filled_guard($scope2_reason, 1);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "#text/0", label, 1, $scope2_reason, 2)}</em>`);
				$cg__label && _patch_render($scope3_id, "__tests__/template.marko_3_label#2:4/setup");
				_scope($scope3_id, { _: $wi__label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 1);
		const $return = label + (isOpen ? "Y" : "N");
		$fg__label && $cg__isOpen && _patch_render($scope2_id, "__tests__/template.marko_3_label#2:4/setup", "label");
		_patch_render($scope2_id, "__tests__/template.marko_2_isOpen#3_label#4/setup", [$fg__isOpen && "isOpen", $fg__label && "label"], $scope2_reason, 0);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			isOpen: $wi__label && isOpen,
			label: _write_if($scope2_reason, 1) && label
		}, "__tests__/template.marko", "2:2", {
			isOpen: "2:17",
			label: "2:25"
		}) || ($fg__isOpen && $cg__label && _patch_write($scope2_id, "PatchMarkedWrite:isOpen", isOpen, !_server_guard($scope2_reason, 1)), $fg__label && $cg__isOpen && _patch_write($scope2_id, "PatchMarkedWrite:label", label, !_server_guard($scope2_reason, 2)));
		return $return;
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 5);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0, $cg__input_label && 1);
			let ret = Panel.content({
				isOpen: true,
				label: input.label
			});
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:ret", ret, !$sg__input_label);
			$cg__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_ret#4/var");
			_patch_child_end();
			_html(`<b>${_text_mark($scope1_id, "#text/2", ret, 1, $scope0_reason, 1)}</b>`);
			_if(() => {
				if (open) {
					const $scope4_id = _scope_id();
					_html(`<span>${_text_mark($scope4_id, "#text/0", ret, $wg__input_label)}</span>`);
					$cg__input_label && _patch_render($scope4_id, "__tests__/template.marko_4_ret#1:4/setup");
					_scope($scope4_id, {}, "__tests__/template.marko", "11:4");
					return 0;
				}
			}, $scope1_id, "#text/3", 1, 1, 0, 0, 1);
			_filled_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_4_ret#1:4/setup", "ret");
			$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:6/setup");
			_scope($scope1_id, {
				ret,
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "8:2", { ret: "9:10" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:6/setup", "input_label");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#7_Panel#9/setup", $fg__input_other && "input_other", $scope0_reason, 2);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#6_open#8_Tag#11/setup", [$fg__input_label && "input_label", $fg__input_other && "Tag"]);
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _write_if($scope0_reason, 2) && Panel,
		Tag
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "15:8"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
