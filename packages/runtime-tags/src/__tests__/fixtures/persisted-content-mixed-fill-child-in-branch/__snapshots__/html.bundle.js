// tags/box.marko
_shells({ c: "c !," });
var box_default = _template_persisted("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	_patch_bind($scope0_id, "U", _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0);
	_patch_value($scope0_id, "c0", value, 1);
	$scope0_page && _scope($scope0_id, { U: _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0 });
	$scope0_page && _resume_branch($scope0_id);
	return $return;
}, 0, 0);

// tags/counter.marko
const $template$2 = "<button class=tick> </button>";
const $walks$2 = " D l";
_shells({ d: "d !d0; D ;<button class=tick> </button>" });
var counter_default = _template_persisted("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "b", input.base + tick)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_value($scope0_id, "d1", tick, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.base,
		f: tick
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "d0", input.base);
}, 0, 0);

// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$1 = "DbD%m";
_shells({ e: "e;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template_persisted("e", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_aside = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	const $tag = input.aside;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_aside, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div></section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// page.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1);
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0 a5;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $template$2),
	a: /*@__PURE__*/ ((_w0, _w1) => `a !a2;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1), ((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1))
});
var page_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $live__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a1");
	const live = bonus ?? input.base;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "c")}`);
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "d", $childScope3);
	panel_default({ aside: attrTag({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(6);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope2);
		counter_default({ base: live });
		_subscribe($live__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		}));
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		g: input.base,
		h: _source_if($scope0_reason, 0) && bonus,
		a: _existing_scope($childScope),
		k: $live__closures,
		d: _existing_scope($childScope3)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.base);
}, 0, () => [
	box_default,
	counter_default,
	panel_default
]);

// template.marko
_shells({
	b: "b;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(_mask_group($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_default({ base: input.base });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page && _scope($scope0_id, { e: input.base });
}, 1, () => [page_default]);
