// template.marko
const $Panel_content__walks = "D l%c";
const $Panel_content__template = "<span> </span><!><!>";
const $template = "<!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button id=t>toggle</button>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell >#childScope/0>__tests__/template.marko_2_open#0:8/subscribe;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template)}`,
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_n#2:6/setup;D%b%;<em><!><!></em>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 2), $fg__input_other = _filled_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $open__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		let n = 1;
		_html(`<span>${_text_mark($scope2_id, "#text/0", open ? "o" : "c")}</span>`);
		_if(() => {
			if (isOpen) {
				const $scope3_id = _scope_id();
				_html(`<em>${_text_mark($scope3_id, "#text/0", label, 1, $scope2_reason, 1)}${_text_mark($scope3_id, "#text/1", n, 2)}</em>`);
				_client_guard($scope2_reason, 1) && _patch_render($scope3_id, "__tests__/template.marko_3_label#2:5/setup");
				_scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope2_id, "#text/1", 1, _write_guard($scope2_reason, 0), 1, 0, 0, ["__tests__/template.marko_3*shell"], $scope2_reason, 0);
		_unfilled_if($scope2_reason, 0) && _patch_write($scope2_id, "PatchWrite:label", label, 1);
		_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_2_n#6/fill", n, 1);
		_subscribe($open__closures, _scope($scope2_id, {
			label: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 1)) && label,
			n: _write_if($scope2_reason, 0) && n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			label: "2:25",
			n: "3:8"
		}), "__tests__/template.marko_2_open#0:8/subscribe");
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0, 0, $scope0_id);
			Panel.content({
				isOpen: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:6/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: "y"
	}, 8);
	_html(`<button id=t>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:6/setup", "input_label");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#7_Panel#9/setup", $fg__input_other && "input_other", $scope0_reason, 3);
	_patch_render($scope0_id, "__tests__/template.marko_0_open#8_Tag#11/setup", $fg__input_other && "Tag");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		open,
		Panel: _write_if($scope0_reason, 3) && Panel,
		Tag,
		"ClosureScopes:open/14": $open__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "10:8"
	}) || ($fg__input_label && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 3)));
}, 1);
