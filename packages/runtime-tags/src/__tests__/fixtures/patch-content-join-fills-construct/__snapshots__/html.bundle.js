// tags/box.marko
const $setup$3 = [[], []];
_shells({ c: "c !," });
_stateful_return("c");
var box_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	const $valueChange2 = _patch_bind($scope0_id, "wU", _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0, 0, 0);
	_patch_fill($scope0_id, "vc1", value, 1);
	_scope($scope0_id, { U: $valueChange2 });
	_resume_branch($scope0_id);
	return $return;
});

// tags/counter.marko
const $template$2 = "<button class=tick> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["d0"]];
_shells({ d: "d !d0; D ;<button class=tick> </button>" });
var counter_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "b", input.base + tick)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_fill($scope0_id, "vd2", tick, 1);
	_scope($scope0_id, {
		e: input.base,
		f: tick
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vd1", input.base, !_server_guard($scope0_reason, 0));
});

// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$1 = "DbD%m";
const $setup$1 = [[], []];
_shells({ e: "e;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	_dynamic_tag($scope0_id, "a", input.aside, {}, 2, 0, 0, $wg__input_aside, $scope0_reason, 0);
	_html("</div></section>");
	_scope($scope0_id, {});
});

// page.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
const $setup = _shell_setup([[], ["a5"]], ["a>", $setup$3]);
_shells({
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[
		"a8",
		"a9",
		"a10"
	], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `0${_w0}& b%c`)("")};${((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("")}`)(),
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $bonus__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	const p = $global$1.data;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "c")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va2", item?.n);
		_set_scope_reason(0);
		const $childScope3 = _peek_scope_id($scope1_id, "a", 2);
		panel_default({ aside: attrTag({ content: _content("a1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(6);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			counter_default({ base: (bonus ?? p.base) + item.n });
			_patch_child_end();
			_subscribe($wi__input_items && $for_content__item_n__closures, _subscribe($bonus__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope2)
			})));
		}, $scope1_id, 1) }) });
		_patch_child_end();
		_scope($scope1_id, {
			d: item?.n,
			_: _scope_with_id($scope0_id),
			m: $wi__input_items && $for_content__item_n__closures,
			a: _existing_scope($childScope3)
		});
	}, 0, $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
	_fill_global_subscribe("a4", $scope0_id);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		h: bonus,
		j: p?.base,
		a: _existing_scope($childScope),
		k: $bonus__closures
	}) || _patch_fill($scope0_id, "va6", p?.base);
});

// template.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b1: /*@__PURE__*/ (() => `b1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_default({ items: input.items });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input.items, !_server_guard($scope0_reason, 1));
}, 1);
