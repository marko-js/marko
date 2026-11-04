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
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1);
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$3], ["d>", $setup$1]);
_shells({
	a1: `a1${_shell_marker([["a5"], []], ["a>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${$template$2}`,
	a: `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}& b/${_w1}&`)("", $walks$1)};${((_w0, _w1) => `${_w0}<button class=bonus>bonus</button>${_w1}`)("", $template$1)}`
});
var page_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_base = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $live__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id($scope0_id, "a", 0, 1);
	let bonus = box_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_patch_child_end();
	const live = bonus ?? input.base;
	_html(`<button class=bonus>bonus</button>${_el_mark($scope0_id, "c")}`);
	_set_scope_reason(0);
	const $childScope3 = _peek_scope_id($scope0_id, "d", 2);
	panel_default({ aside: attrTag({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(6);
		const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
		counter_default({ base: live });
		_patch_child_end();
		_subscribe($live__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope2)
		}));
		_resume_branch($scope1_id);
	}, $scope0_id, 0) }) });
	_patch_child_end();
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", $fg__input_base && "g");
	_scope($scope0_id, {
		g: input.base,
		h: _write_if($scope0_reason, 0) && bonus,
		a: _existing_scope($childScope),
		k: $live__closures,
		d: _existing_scope($childScope3)
	}) || $fg__input_base && _patch_write($scope0_id, "xg", input.base, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Page_withLoadAssets = withLoadAssets(() => page_default, "a", flush, "_a");
_shells({
	b: "b;b%;<!><!><!>",
	b1: `b1${_shell_marker([[], []], ["b>", $setup])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)}`
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_base = _filled_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 0);
			$Page_withLoadAssets({ base: input.base });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				b: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 0);
	$fg__input_base && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.base }) || $fg__input_base && $cg__input_show && _patch_write($scope0_id, "xe", input.base, !_server_guard($scope0_reason, 1));
}, 1);
