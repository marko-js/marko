// template.marko
const $Show_content__walks = "b%c";
const $Show_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button>${_w0}<!>`)($Show_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($Show_content__walks);
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => ` b/${_w0}&b`)($Show_content__walks)};${((_w0) => `<button>toggle</button>${_w0}<!>`)($Show_content__template)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	const Show = { content: _content("__tests__/template.marko_1*content", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render(), $wg__v = _write_guard($scope1_reason, 0), $cg__v = _client_guard($scope1_reason, 0);
		const flag = $global$1.flag;
		_if(() => {
			if (flag && v) {
				const $scope2_id = _scope_id();
				_html("<b>shown</b>");
				_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $scope1_page || $wg__v, $scope1_page || $wg__v, 0, 0, 1);
		_fill_global_subscribe("__tests__/template.marko_1_$global_flag#0:10", $scope1_id);
		$cg__v && _patch_write($scope1_id, "PatchWrite:v", v, 1);
		_patch_render($scope1_id, "__tests__/template.marko_1_v#3_flag#4/setup", [_filled_guard($scope1_reason, 0) && "v", "flag"], 6, 0);
		_scope($scope1_id, {
			v: _unfilled_if($scope1_reason, 0) && v,
			flag: _unfilled_if($scope1_reason, 0) && flag
		}, "__tests__/template.marko", "3:2", {
			v: "3:16",
			flag: "4:10"
		}) || $cg__v && _patch_write($scope1_id, "PatchMarkedWrite:flag", flag);
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	Show.content({ v: on });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "1:6" });
}, 1);
