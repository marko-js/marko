// template.marko
const $Inner_content__walks = "b%c";
const $Inner_content__template = "<!><!><!>";
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)($Inner_content__walks);
const $Outer_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($Inner_content__template);
const $template = "<!><!><!><!><button id=t>toggle</button>";
const $walks = "b%b%b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b%b%b ;<!><!><!><!><button id=t>toggle</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Outer_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Outer_content__template)}`)(),
	"__tests__/template.marko_4*shell": "__tests__/template.marko_4*shell __tests__/template.marko_4_n#2:5/init!__tests__/template.marko_4;D%b%l ;<em><!><!></em><button class=inc>+</button>",
	"__tests__/template.marko_5*shell": "__tests__/template.marko_5*shell;D ;<i> </i>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	const Inner = { content: _content_resume("__tests__/template.marko_2*content", ({ isOpen, text }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__isOpen = _write_guard($scope2_reason, 0);
		let n = 1;
		_if(() => {
			if (isOpen) {
				const $scope4_id = _scope_id();
				_html(`<em>${_patch_text($scope4_id, "#text/0", text, void 0, $scope2_reason, 1)}${_text_resume($scope4_id, "#text/1", n, 2)}</em><button class=inc>+</button>${_el_resume($scope4_id, "#button/2")}`);
				_script($scope4_id, "__tests__/template.marko_4");
				_scope($scope4_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope2_id, "#text/0", 1, $wg__isOpen, void 0, void 0, void 0, ["__tests__/template.marko_4*shell"], $scope2_reason, 0);
		_script($scope2_id, "__tests__/template.marko_2_text#4", $wg__isOpen, _filled_guard($scope2_reason, 1), "text");
		_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
		_scope($scope2_id, {
			text,
			n
		}, "__tests__/template.marko", "2:2", {
			text: "2:25",
			n: "3:8"
		}) || _filled_guard($scope2_reason, 1) && _patch_write($scope2_id, "PatchMarkedWrite:text", text, !_server_guard($scope2_reason, 1));
		$wg__isOpen || _resume_branch($scope2_id);
	}, $scope0_id) };
	const Outer = { content: _content_resume("__tests__/template.marko_3*content", ({ on, label }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope3_id, "#childScope/0", 0);
		Inner.content({
			isOpen: true,
			text: "const"
		});
		_patch_child_end();
		_if(() => {
			if (on) {
				const $scope5_id = _scope_id();
				_html(`<i>${_patch_text($scope5_id, "#text/0", label, void 0, $scope3_reason, 1)}</i>`);
				_client_guard($scope3_reason, 1) && _patch_init($scope5_id, "__tests__/template.marko_5_label#3:5/init");
				_scope($scope5_id, { _: _write_if($scope3_reason, 1) && _scope_with_id($scope3_id) }, "__tests__/template.marko", "9:4");
				return 0;
			}
		}, $scope3_id, "#text/1", 1, _write_guard($scope3_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_5*shell"], $scope3_reason, 0);
		_client_guard($scope3_reason, 0) && _patch_write($scope3_id, "PatchWrite:label", label, 1);
		_scope($scope3_id, {
			label: (_unfilled_if($scope3_reason, 0) || _unfilled_if($scope3_reason, 1)) && label,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "7:2", { label: "7:21" });
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope2 = _patch_child($scope1_id, "#childScope/0", 1);
			Outer.content({
				on: true,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:7/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	const T = open ? "div" : Outer;
	_dynamic_tag($scope0_id, "#text/1", T, {
		on: !open,
		label: "dyn"
	}, 16);
	const U = open ? "div" : Inner;
	_dynamic_tag($scope0_id, "#text/2", U, {
		isOpen: true,
		text: "u"
	}, 24);
	_html(`<button id=t>toggle</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		open,
		Inner,
		Outer
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		open: "1:6",
		Inner: "2:9",
		Outer: "7:9"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
