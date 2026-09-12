// tags/box.marko
_shells({ c: "c !," });
var box_default = _template_persisted("c", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	_patch_bind($scope0_id, "U", _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0);
	_patch_value($scope0_id, "c0", value, 1);
	$scope0_reason && _scope($scope0_id, { U: _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0 });
	$scope0_reason && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/counter.marko
const $template$2 = "<button class=tick> </button>";
const $walks$2 = " D l";
_shells({ d: "d !d0; D ;<button class=tick> </button>" });
var counter_default = _template_persisted("d", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "b", input.base + tick)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_value($scope0_id, "d1", tick, 1);
	$scope0_reason ? _scope($scope0_id, {
		e: input.base,
		f: tick
	}) : _filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "d0", input.base);
}, 0, 0);

// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$1 = "DbD%m";
_shells({ e: "e;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_persisted("e", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_aside = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_aside, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div></section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// page.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}& b%c`)("");
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 a8 a9 a10;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $template$2),
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a5;${_w0};${_w1}`)(((_w0) => `0${_w0}& b%c`)(""), ((_w0) => `${_w0}<button class=bonus>bonus</button><!><!>`)("")),
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1 !;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var page_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $bonus__closures = /* @__PURE__ */ new Set();
	const $p_base__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a2");
	const p = $global$1.data;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "c")}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_owned, 0) ? _patch_value($scope1_id, "a2", item?.n) : _patch_init($scope1_id, "a4");
		_set_serialize_reason(0);
		const $childScope3 = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope3);
		panel_default({ aside: attrTag({ content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_set_serialize_reason(6);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "a", $childScope2);
			counter_default({ base: (bonus ?? p.base) + item.n });
			_subscribe($scope0_reason && $for_content__item_n__closures, _subscribe($p_base__closures, _subscribe($bonus__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope2)
			}))));
		}, $scope1_id) }) });
		_scope($scope1_id, {
			d: item?.n,
			_: _scope_with_id($scope0_id),
			e: $for_content__item_n__closures,
			a: _existing_scope($childScope3)
		});
	}, 0, $scope0_id, "d", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_owned, 0);
	_global_subscribe("a3", $scope0_id);
	_script($scope0_id, "a5");
	$scope0_reason ? _scope($scope0_id, {
		h: _source_if($scope0_reason, 0) && bonus,
		j: p?.base,
		a: _existing_scope($childScope),
		l: $bonus__closures
	}) : (_filled_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.items), _patch_value($scope0_id, "a1", p?.base));
}, 0, 1);

// template.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({ items: input.items });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_owned, 1);
	$scope0_reason && _scope($scope0_id, { e: input.items });
}, 1, () => [page_default]);
