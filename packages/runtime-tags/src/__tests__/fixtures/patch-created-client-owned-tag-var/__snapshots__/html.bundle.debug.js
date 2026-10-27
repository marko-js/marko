// tags/card.marko
const $template$2 = "<span> </span>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "^__tests__/tags/card.marko;D ;<span> </span>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $return = input.x + "!";
	_html(`<span>${_patch_text($scope0_id, "#text/0", input.x, void 0, $scope0_reason, 0)}</span>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
	return $return;
});

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": /*@__PURE__*/ (() => `__tests__/tags/wrap.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/tags/wrap.marko_1"]], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=log>log</button>`)($template$2)}`)()
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0, $cg__input_label && 1);
			let v = card_default({ x: input.label });
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:v", v, !$sg__input_label);
			$cg__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/wrap.marko_1_v#4/var");
			_patch_child_end();
			_html(`<p>${_patch_text($scope1_id, "#text/2", v, void 0, $scope0_reason, 1)}</p><button class=log>log</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/tags/wrap.marko_1");
			$cg__input_label && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_label#0:4/init");
			$scope0_page && _scope($scope1_id, {
				v,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/wrap.marko", "1:2", { v: "2:9" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/tags/wrap.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.label, !$sg__input_label);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=edit>edit</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=edit>edit</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let label = input.label;
	_html(`<button class=edit>edit</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 1) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/1", 0);
	wrap_default({
		label,
		show: input.show
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
