// tags/press.marko
const $template$1 = "<button>press</button>";
const $setup$1 = [[], []];
_shells({ c: "c; ;<button>press</button>" });
var press_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onPress = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<button>press</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0", 1, $fg__input_onPress);
	_scope($scope0_id, { d: input.onPress }) || $fg__input_onPress && _patch_write($scope0_id, "xd", input.onPress, !_server_guard($scope0_reason, 0));
});

// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _client_branch(input.content);
});

// template.marko
_shells({
	a7: "a7",
	a6: "a6",
	a4: "a4",
	a15: `a15|2${_shell_marker([[], ["a8"]], ["e>", $setup$1], ["f>", $setup$1])};${/*@__PURE__*/ ((_w0, _w1) => `b%b b%b%b/${_w0}&/${_w1}&D l`)(" b", " b")};${/*@__PURE__*/ ((_w0, _w1) => `<!><!><button>own</button><!><!>${_w0}${_w1}<span> </span>`)($template$1, $template$1)}`,
	a: "a;b%;<!><!><!>",
	a16: `a16${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $uf__input_label = _updates_from($scope0_reason, 4), $ui__input_show = _unfilled_if($scope0_reason, 5), $ui__input_label__OR__input_tag = _unfilled_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 4), $cg__input_flag = _client_guard($scope0_reason, 6), $cg__input_tag = _client_guard($scope0_reason, 7), $wg__input_show = _write_guard($scope0_reason, 5), $ui__input_flag2 = _unfilled_if($scope0_reason, 6), $cg__input_show = _client_guard($scope0_reason, 5), $sg__input_label = _server_guard($scope0_reason, 4), $fg__input_label2 = _filled_guard($scope0_reason, 4), $wi__input_flag = _write_if($scope0_reason, 6), $wi__input_tag = _write_if($scope0_reason, 7);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_flag__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $top2__closures = /* @__PURE__ */ new Set();
	$fg__input_label2 && _patch_write($scope0_id, "xd", input.label, !$sg__input_label) && _patch_subscribers($scope0_id, "a17", "d");
	const top = _bind_resume(function() {
		console.log("top", input.label);
	}, "a0", $scope0_id, 1);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope3 = _peek_scope_id($scope1_id, "a", 5);
			card_default({ content: _content("a15", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 4), $ui__input_flag = _unfilled_if($scope0_reason, 6), $fg__input_label = _filled_guard($scope0_reason, 4);
				const Note = { content: _content_resume("a4", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<i>${_text_mark($scope3_id, "a", input.label, 1, $scope0_reason, 4)}</i>`);
					_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "a5", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 3) && _scope_with_id($scope2_id),
						Ci: $wi__input_label && 1
					}), $cg__input_label && "a5");
				}, $scope2_id) };
				const h = _bind_resume(function() {
					console.log("h", input.label);
				}, "a1", $scope2_id);
				_dynamic_tag($scope2_id, "a", input.flag ? Note : "b", { x: 1 }, 1, 0, 0, _write_guard($scope0_reason, 6), $scope0_reason, 6);
				_html(`<button>own</button>${_el_mark($scope2_id, "b")}`);
				_dynamic_tag($scope2_id, "c", input.tag, { onClick: _resume(function() {
					console.log("static");
				}, "a2") }, 9, _content_resume("a6", () => {
					_scope_id();
					_scope_reason();
					_html("s");
				}, $scope2_id), 0, _write_guard($scope0_reason, 7), $scope0_reason, 7);
				_dynamic_tag($scope2_id, "d", input.tag, { onClick: top }, 17, _content_resume("a7", () => {
					_scope_id();
					_scope_reason();
					_html("t");
				}, $scope2_id), 0, _write_guard($scope0_reason, 1), $scope0_reason, 1, 0, 7);
				_set_scope_reason($uf__input_label << 1);
				const $childScope = _peek_scope_id($scope2_id, "e", 3);
				press_default({ onPress: _bind_resume(function() {
					console.log("press", input.label);
				}, "a3", $scope2_id) });
				_patch_child_end();
				_set_scope_reason($uf__input_label << 1);
				const $childScope2 = _peek_scope_id($scope2_id, "f", 4);
				press_default({ onPress: h });
				_patch_child_end();
				_html(`<span>${_text_mark($scope2_id, "g", typeof h, 1, $scope0_reason, 4)}</span>`);
				_script($scope2_id, "a8");
				$ui__input_flag && _patch_write($scope2_id, "wi", Note, 1);
				$cg__input_label && _patch_render($scope2_id, "a9");
				_unfilled_if($scope0_reason, 6) && _patch_subscribe($scope2_id, "a10");
				_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope2_id, "a11", $cg__input_tag);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope2_id, "a12");
				_patch_render($scope2_id, "a13", ((_filled_guard($scope0_reason, 7) ? " >>g" : "") + ($fg__input_label ? " >>h" : "") + ($fg__input_label ? " >>d" : "")).slice(1), $scope0_reason, 1);
				$cg__input_flag && _patch_render($scope2_id, "a14");
				_subscribe($ui__input_label && $top2__closures, _subscribe(_unfilled_if($scope0_reason, 7) && $input_tag__closures, _subscribe($ui__input_flag && $input_flag__closures, _subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					i: $ui__input_flag && Note,
					_: _scope_with_id($scope1_id),
					e: _existing_scope($childScope),
					f: _existing_scope($childScope2)
				}), $cg__input_label && "a9"), $cg__input_flag && "a10"), $cg__input_tag && "a11"), $cg__input_label && "a12");
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope3)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a16"], $scope0_reason, 5);
	_scope($scope0_id, {
		d: input.label,
		f: _write_if($scope0_reason, 5) && ($ui__input_show || $ui__input_flag2) && input.flag,
		g: _write_if($scope0_reason, 0) && (_unfilled_if($scope0_reason, 0) || $ui__input_label__OR__input_tag || _unfilled_if($scope0_reason, 7)) && input.tag,
		h: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || $ui__input_label__OR__input_tag) && top,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_flag && $wi__input_flag && ($ui__input_flag2 || $ui__input_show) && $input_flag__closures,
		k: $wi__input_tag && $wi__input_tag && ($ui__input_label__OR__input_tag || $ui__input_show) && $input_tag__closures,
		l: $wi__input_label && $wi__input_label && ($ui__input_label__OR__input_tag || $ui__input_show) && $top2__closures
	}) || (_filled_guard($scope0_reason, 6) && _patch_write($scope0_id, "xf", input.flag, !_server_guard($scope0_reason, 6)) && $cg__input_show && _patch_subscribers($scope0_id, "a18", "f"), _filled_guard($scope0_reason, 7) && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 7)) && $cg__input_show && _patch_subscribers($scope0_id, "a19", "g"), $fg__input_label2 && _patch_write($scope0_id, "xh", top, !$sg__input_label) && $cg__input_show && _patch_subscribers($scope0_id, "a20", "h d"));
}, 1);
