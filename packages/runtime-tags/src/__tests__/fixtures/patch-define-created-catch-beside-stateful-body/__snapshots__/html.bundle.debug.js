// template.marko
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><span>ok</span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b ;<!><!><!><button>toggle</button>",
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell;D ;<em> </em>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell; ; "
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $cg__input_fail = _client_guard($scope0_reason, 1), $fg__input_other = _filled_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_fail__closures = new Set();
	let open = false;
	const Panel = { content: _content_resume("__tests__/template.marko_3*content", ({ isOpen, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__isOpen = _write_guard($scope3_reason, 0), $ui__isOpen = _unfilled_if($scope3_reason, 0), $wi__isOpen = _write_if($scope3_reason, 0);
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_text_mark($scope4_id, "#text/0", label, 1, $scope3_reason, 1)}</em>`);
				_client_guard($scope3_reason, 1) && _patch_render($scope4_id, "__tests__/template.marko_4_label#3:4/setup");
				_scope($scope4_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope3_id, "#text/0", 1, $wg__isOpen, 1, 0, 0, ["__tests__/template.marko_4*shell"], $scope3_reason, 0);
		$ui__isOpen && _patch_write($scope3_id, "PatchWrite:label", label, 1);
		$wi__isOpen && _scope($scope3_id, { label: $wi__isOpen && ($ui__isOpen || _unfilled_if($scope3_reason, 1)) && label }, "__tests__/template.marko", "2:2", { label: "2:25" });
	}, $scope0_id) };
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_if(() => {
			if (input.fail) {
				const $scope5_id = _scope_id();
				_html(_text_mark($scope5_id, "#text/0", (() => {
					throw new Error("fail");
				})(), 1, 0, 0));
				_scope($scope5_id, {}, "__tests__/template.marko", "8:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__input_fail, 1, 0, 0, ["__tests__/template.marko_5*shell"], $scope0_reason, 1);
		_html("<span>ok</span>");
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_fail#0:6/subscribe", $cg__input_fail);
		$wi__input_fail && _subscribe(_unfilled_if($scope0_reason, 1) && $input_fail__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:2"), $cg__input_fail && "__tests__/template.marko_2_input_fail#0:6/subscribe", $wg__input_fail);
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Panel.content({
			isOpen: true,
			label: input.label
		});
		_patch_child_end();
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/template.marko", "12:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:5/subscribe", 0);
		_write_guard($scope0_reason, 0) && _resume_branch($scope1_id);
	}, 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1);
	const Tag = input.other ? "div" : Panel;
	_dynamic_tag($scope0_id, "#text/1", Tag, {
		isOpen: !open,
		label: input.label + "!"
	}, 8);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_other#7_Panel#9/setup", $fg__input_other && "input_other", $scope0_reason, 2);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_label#5_open#8_Tag#11/setup", (($fg__input_label ? " input_label" : "") + ($fg__input_other ? " Tag" : "")).slice(1));
	_scope($scope0_id, {
		input_label: input.label,
		open,
		Panel: _unfilled_if($scope0_reason, 2) && Panel,
		Tag,
		"ClosureScopes:input_label/13": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_fail/14": $wi__input_fail && _unfilled_if($scope0_reason, 1) && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Panel: "2:9",
		Tag: "16:8"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label"), $fg__input_other && _patch_write($scope0_id, "PatchMarkedWrite:Tag", Tag, !_server_guard($scope0_reason, 2)));
}, 1);
