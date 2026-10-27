// tags/box.marko
const $template$4 = "";
const $walks$4 = "";
const $setup$4 = [[], []];
_shells({ "__tests__/tags/box.marko": "^__tests__/tags/box.marko !," });
_stateful_return("__tests__/tags/box.marko");
var box_default = _template("__tests__/tags/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	const $valueChange2 = _patch_bind($scope0_id, "PatchWrite:#TagVariableChange", _resume(function(next) {
		value = next;
	}, "__tests__/tags/box.marko_0/valueChange", $scope0_id) || void 0, 0, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/box.marko_fill0", value, 1);
	$scope0_page && _scope($scope0_id, { "#TagVariableChange": $valueChange2 }, "__tests__/tags/box.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// tags/counter.marko
const $template$3 = "<button class=tick> </button>";
const $walks$3 = " D l";
const $setup$3 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=tick> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "#text/1", input.base + tick)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill1", tick, 1);
	$scope0_page ? _scope($scope0_id, {
		input_base: input.base,
		tick
	}, "__tests__/tags/counter.marko", 0, {
		input_base: ["input.base"],
		tick: "1:6"
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", input.base, !_server_guard($scope0_reason, 0));
});

// tags/panel.marko
const $template$2 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$2 = "DbD%m";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	_dynamic_tag($scope0_id, "#text/0", input.aside, {}, 2, 0, 0, $wg__input_aside, $scope0_reason, 0);
	_html("</div></section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// page.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
const $setup$1 = _shell_setup([[], ["__tests__/page.marko_0"]], ["#childScope/0>", $setup$4]);
_shells({
	"__tests__/page.marko_2*content": /*@__PURE__*/ ((_w0) => `__tests__/page.marko_2*content${_shell_marker(_shell_setup([[
		"__tests__/page.marko_2_bonus#0:7/init",
		"__tests__/page.marko_2_item_n#1:3/subscribe",
		"__tests__/page.marko_2_bonus#0:7_p_base#0:9_item_n#1:3/init"
	], []], ["#childScope/0>", $setup$3]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3)};${_w0}`)($template$3),
	"__tests__/page.marko": /*@__PURE__*/ (() => `__tests__/page.marko${_shell_marker($setup$1)};${((_w0) => `0${_w0}& b%c`)("")};${((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("")}`)(),
	"__tests__/page.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/page.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2)
});
var page_default = _template("__tests__/page.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $bonus__closures = new Set();
	const $global$1 = $global();
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, 1);
	let bonus = box_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/page.marko_0_bonus#7/var");
	_patch_child_end();
	const p = $global$1.data;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "#button/2")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/page.marko_fill1", item?.n);
		_set_scope_reason(0);
		const $childScope3 = _patch_child($scope1_id, "#childScope/0", 2);
		panel_default({ aside: attrTag({ content: _content_elide("__tests__/page.marko_2*content", () => {
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_set_scope_reason(6);
			const $childScope2 = _patch_child($scope2_id, "#childScope/0", 1);
			counter_default({ base: (bonus ?? p.base) + item.n });
			_patch_child_end();
			$scope2_page && _subscribe($wi__input_items && $for_content__item_n__closures, _subscribe($bonus__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/page.marko", "6:6")));
		}, $scope1_id) }) });
		_patch_child_end();
		$scope0_page && _scope($scope1_id, {
			item_n: item?.n,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item_n/12": $wi__input_items && $for_content__item_n__closures,
			"#childScope/0": _existing_scope($childScope3)
		}, "__tests__/page.marko", "4:2", { item_n: ["item.n", "4:6"] });
	}, 0, $scope0_id, "#text/3", 1, void 0, void 0, void 0, void 0, "__tests__/page.marko_1*shell", $scope0_reason, 0);
	_fill_global_subscribe("__tests__/page.marko_0_$global_data#8", $scope0_id);
	_script($scope0_id, "__tests__/page.marko_0");
	$scope0_page ? _scope($scope0_id, {
		bonus,
		p_base: p?.base,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:bonus/10": $bonus__closures
	}, "__tests__/page.marko", 0, {
		bonus: "1:6",
		p_base: ["p.base", "2:8"]
	}) : _patch_fill($scope0_id, "PatchFill:__tests__/page.marko_fill0", p?.base);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			page_default({ items: input.items });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_items#0:4/init");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { input_items: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items }, "__tests__/template.marko", 0, { input_items: ["input.items"] }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 1));
}, 1);
