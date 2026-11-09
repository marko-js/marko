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
	const $scope0_reason = _scope_reason(), $fg__input_base = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_mark($scope0_id, "b", input.base + tick)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_render($scope0_id, "d1", $fg__input_base && "e");
	_patch_fill($scope0_id, "vd2", tick, 1);
	_scope($scope0_id, {
		e: input.base,
		f: tick
	}) || $fg__input_base && _patch_write($scope0_id, "xe", input.base, !_server_guard($scope0_reason, 0));
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
const $setup = _shell_setup([[], ["a7"]], ["a>", $setup$3]);
_shells({
	a4: `a4${_shell_marker([["a3"], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${$template$2}`,
	a: `a${_shell_marker($setup)};${((_w0) => `0${_w0}& b%c`)("")};${((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("")}`,
	a5: `a5${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $bonus__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	const p = $global$1.data;
	_html(`<button class=bonus>bonus</button>${_el_mark($scope0_id, "c")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", item?.n, !_server_guard($scope0_reason, 0));
		_set_scope_reason(0);
		const $childScope3 = _peek_scope_id($scope1_id, "a", 2);
		panel_default({ aside: attrTag({ content: _content("a4", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(6);
			const $childScope2 = _peek_scope_id($scope2_id, "a", 1);
			counter_default({ base: (bonus ?? p.base) + item.n });
			_patch_child_end();
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "a1");
			_patch_render($scope2_id, "a2", [">>j", _filled_guard($scope0_reason, 0) && ">d"]);
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_n__closures, _subscribe($bonus__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope2)
			}), "a3", 0), $cg__input_items && "a1", 0);
			_resume_branch($scope2_id);
		}, $scope1_id, 0) }) });
		_patch_child_end();
		_scope($scope1_id, {
			d: item?.n,
			_: _scope_with_id($scope0_id),
			m: _write_if($scope0_reason, 0) && $for_content__item_n__closures,
			a: _existing_scope($childScope3)
		});
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 0, "a5", $scope0_reason, 0);
	_fill_global_subscribe("a6", $scope0_id);
	_script($scope0_id, "a7");
	$cg__input_items && _patch_subscribers($scope0_id, "a8", "j");
	_scope($scope0_id, {
		h: bonus,
		j: p?.base,
		a: _existing_scope($childScope),
		k: $bonus__closures
	}) || _patch_write($scope0_id, "xj", p?.base);
});

// template.marko
_shells({
	b: "b;b%;<!><!><!>",
	b1: `b1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_items = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_default({ items: input.items });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	$fg__input_items && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.items }) || $fg__input_items && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.items, !_server_guard($scope0_reason, 1));
}, 1);
