// tags/menu.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/menu.marko": "__tests__/tags/menu.marko;b%;<!><!><!>",
	"__tests__/tags/menu.marko_1*shell": "__tests__/tags/menu.marko_1*shell; D ;<button> </button>"
});
var menu_default = _template("__tests__/tags/menu.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.item, (it) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchMarkedWrite:it_onPick", it?.onPick, !_server_guard($scope0_reason, 0));
		_html(`<button${_attr_class("b" + it.id, $scope1_id, "#button/0", $scope0_reason, 0)}>${_text_resume($scope1_id, "#text/1", it.label, void 0, $scope0_reason, 0)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/menu.marko_1_it_onPick#5", 1, _filled_guard($scope0_reason, 0), "it_onPick");
		_scope($scope1_id, { it_onPick: it?.onPick }, "__tests__/tags/menu.marko", "1:2", { it_onPick: ["it.onPick", "1:6"] });
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/tags/menu.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/menu.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&D l`)("b%c")};${((_w0) => `<!>${_w0}<p> </p>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let picked = "none";
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	let $item;
	forOf(input.items, (x) => {
		$item = attrTags($item, {
			id: x.id,
			label: x.name,
			onPick: _resume_locals(function() {
				picked = x.name;
			}, "__tests__/template.marko_0/onPick", { "x/6": x }, $scope0_id)
		});
	});
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	menu_default({ item: $item });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/1", picked)}</p>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
