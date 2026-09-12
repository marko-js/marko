// tags/box.marko
const $template$4 = "";
const $walks$4 = "";
_shells({ "__tests__/tags/box.marko": "__tests__/tags/box.marko !," });
var box_default = _template_persisted("__tests__/tags/box.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	_patch_bind($scope0_id, "#TagVariableChange", _resume(function(next) {
		value = next;
	}, "__tests__/tags/box.marko_0/valueChange", $scope0_id) || void 0);
	_patch_value($scope0_id, "__tests__/tags/box.marko0", value, 1);
	$scope0_reason && _scope($scope0_id, { "#TagVariableChange": _resume(function(next) {
		value = next;
	}, "__tests__/tags/box.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/box.marko", 0);
	$scope0_reason && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/counter.marko
const $template$3 = "<button class=tick> </button>";
const $walks$3 = " D l";
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=tick> </button>" });
var counter_default = _template_persisted("__tests__/tags/counter.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "#text/1", input.base + tick)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_value($scope0_id, "__tests__/tags/counter.marko1", tick, 1);
	$scope0_reason ? _scope($scope0_id, {
		input_base: input.base,
		tick
	}, "__tests__/tags/counter.marko", 0, {
		input_base: ["input.base"],
		tick: "1:6"
	}) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/tags/counter.marko0", input.base);
}, 0, 0);

// tags/panel.marko
const $template$2 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$2 = "DbD%m";
_shells({ "__tests__/tags/panel.marko": "__tests__/tags/panel.marko;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_persisted("__tests__/tags/panel.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_aside = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_aside, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div></section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
}, 0, 0);

// page.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
_shells({
	"__tests__/page.marko_2*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/page.marko_2*content __tests__/page.marko_2_bonus#7/init __tests__/page.marko_2_p_base#9/init __tests__/page.marko_2_item_n#3/init;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3), $template$3),
	"__tests__/page.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/page.marko !__tests__/page.marko_0;${_w0};${_w1}`)(((_w0) => `0${_w0}& b%c`)(""), ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("")),
	"__tests__/page.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/page.marko_1*shell !;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $template$2)
});
var page_default = _template_persisted("__tests__/page.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $bonus__closures = new Set();
	const $p_base__closures = new Set();
	const $global$1 = $global();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let bonus = box_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/page.marko_0_bonus#7/var");
	const p = $global$1.data;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "#button/2")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = new Set();
		_filled_guard($scope0_owned, 0) ? _patch_value($scope1_id, "__tests__/page.marko2", item?.n) : _patch_init($scope1_id, "__tests__/page.marko_1_input_items#6/init");
		_set_serialize_reason(0);
		const $childScope3 = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope3);
		panel_default({ aside: attrTag({ content: _content_elide("__tests__/page.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_set_serialize_reason(6);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "#childScope/0", $childScope2);
			counter_default({ base: (bonus ?? p.base) + item.n });
			_subscribe($scope0_reason && $for_content__item_n__closures, _subscribe($p_base__closures, _subscribe($bonus__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/page.marko", "6:6"))));
		}, $scope1_id) }) });
		_scope($scope1_id, {
			item_n: item?.n,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item_n": $for_content__item_n__closures,
			"#childScope/0": _existing_scope($childScope3)
		}, "__tests__/page.marko", "4:2", { item_n: ["item.n", "4:6"] });
	}, 0, $scope0_id, "#text/3", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/page.marko_1*shell", $scope0_owned, 0);
	_global_subscribe("__tests__/page.marko_0_$global_data#10/global", $scope0_id);
	_script($scope0_id, "__tests__/page.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		bonus: _source_if($scope0_reason, 0) && bonus,
		p_base: p?.base,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:bonus": $bonus__closures
	}, "__tests__/page.marko", 0, {
		bonus: "1:6",
		p_base: ["p.base", "2:8"]
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/page.marko0", input.items), _patch_value($scope0_id, "__tests__/page.marko1", p?.base));
}, 0, 1);

// template.marko
const $template = "<p>A lead long enough that the document outweighs a flush revealing the page below it.</p><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<p>A lead long enough that the document outweighs a flush revealing the page below it.</p><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<p>A lead long enough that the document outweighs a flush revealing the page below it.</p>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			page_default({ items: input.items });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { input_items: input.items }, "__tests__/template.marko", 0, { input_items: ["input.items"] });
}, 1, () => [page_default]);
