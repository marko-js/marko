// tags/box.marko
_shells({ c: "c !," });
_client_return("c");
var box_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let value = null;
	const $return = value;
	const $valueChange2 = _patch_bind($scope0_id, "dU", _resume(function(next) {
		value = next;
	}, "c0", $scope0_id) || void 0, 0, 0);
	_patch_value($scope0_id, "vc1", value, 1);
	$scope0_page && _scope($scope0_id, { U: $valueChange2 });
	_resume_branch($scope0_id);
	return $return;
});

// tags/counter.marko
const $template$2 = "<button class=tick> </button>";
const $walks$2 = " D l";
_shells({ d: "d !d0; D ;<button class=tick> </button>" });
var counter_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let tick = 0;
	_html(`<button class=tick>${_text_resume($scope0_id, "b", input.base + tick)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_patch_value($scope0_id, "vd2", tick, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.base,
		f: tick
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vd1", input.base);
});

// tags/panel.marko
const $template$1 = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks$1 = "DbD%m";
_shells({ e: "e;DbD%;<section><h2>Panel</h2><div class=aside><!></div></section>" });
var panel_default = _template("e", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_aside = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section><h2>Panel</h2><div class=aside>");
	_dynamic_tag($scope0_id, "a", input.aside, {}, 0, 0, $wg__input_aside, void 0, 2, $scope0_reason, 0);
	_html("</div></section>");
	$scope0_page && _scope($scope0_id, {});
});

// page.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1);
_shells({
	a0: /*@__PURE__*/ ((_w0) => `a0 a5;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${_w0}`)($template$2),
	a: /*@__PURE__*/ (() => `a !a2;${((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1)};${((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1)}`)()
});
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $live__closures = /* @__PURE__ */ new Set();
	const $childScope = _patch_child($scope0_id, "a");
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a1");
	const live = bonus ?? input.base;
	_html(`<button class=bonus>bonus</button>${_el_resume($scope0_id, "c")}`);
	_set_scope_reason(0);
	const $childScope3 = _patch_child($scope0_id, "d");
	panel_default({ aside: attrTag({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(6);
		const $childScope2 = _patch_child($scope1_id, "a");
		counter_default({ base: live });
		_subscribe($live__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		}));
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	$scope0_page ? _scope($scope0_id, {
		g: input.base,
		h: _write_if($scope0_reason, 0) && bonus,
		a: _existing_scope($childScope),
		k: $live__closures,
		d: _existing_scope($childScope3)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", input.base);
});

// template.marko
_shells({
	b: "b !;b%;<!><!><!>",
	b0: /*@__PURE__*/ ((_w0) => `b0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			page_default({ base: input.base });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b0"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: input.base }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", input.base);
}, 1);
