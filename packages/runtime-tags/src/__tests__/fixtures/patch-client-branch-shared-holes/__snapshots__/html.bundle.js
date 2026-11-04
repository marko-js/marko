// tags/press.marko
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
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a15: `a15${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $uf__input_label = _updates_from($scope0_reason, 1), $wi__input_flag = _write_if($scope0_reason, 3), $cg__input_tag = _client_guard($scope0_reason, 4), $wg__input_show = _write_guard($scope0_reason, 2), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label2 = _filled_guard($scope0_reason, 1), $wi__input_tag = _write_if($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_flag__closures = /* @__PURE__ */ new Set();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $top2__closures = /* @__PURE__ */ new Set();
	$fg__input_label2 && _patch_write($scope0_id, "xd", input.label, !$sg__input_label) && _patch_subscribers($scope0_id, "a16", "d");
	const top = _bind_resume(function() {
		console.log("top", input.label);
	}, "a0", $scope0_id);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 5);
			card_default({ content: _content_resume("a14", () => {
				_scope_reason();
				const $scope2_id = _scope_id(), $fg__input_label = _filled_guard($scope0_reason, 1);
				const Note = { content: _content_resume("a4", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<i>${_text_mark($scope3_id, "a", input.label, $wg__input_label)}</i>`);
					$cg__input_label && _patch_render($scope3_id, "a5");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
						_: _scope_with_id($scope2_id),
						Ci: $wi__input_label && 1
					}), $cg__input_label && "a5", $wg__input_label);
				}, $scope2_id) };
				const h = _bind_resume(function() {
					console.log("h", input.label);
				}, "a1", $scope2_id);
				_dynamic_tag($scope2_id, "a", input.flag ? Note : "b", { x: 1 }, 0, 0, 0, _write_guard($scope0_reason, 3));
				_html(`<button>own</button>${_el_mark($scope2_id, "b")}`);
				_dynamic_tag($scope2_id, "c", input.tag, { onClick: _resume(function() {
					console.log("static");
				}, "a2") }, 8, _content_resume("a6", () => {
					_scope_id();
					_scope_reason();
					_html("s");
				}, $scope2_id), 0, _write_guard($scope0_reason, 4));
				_dynamic_tag($scope2_id, "d", input.tag, { onClick: top }, 16, _content_resume("a7", () => {
					_scope_id();
					_scope_reason();
					_html("t");
				}, $scope2_id), 0, _write_guard($scope0_reason, 0));
				_set_scope_reason($uf__input_label << 1);
				_patch_child(3);
				press_default({ onPress: _bind_resume(function() {
					console.log("press", input.label);
				}, "a3", $scope2_id) });
				_patch_child_end();
				_set_scope_reason($uf__input_label << 1);
				const $childScope = _peek_scope_id($scope2_id, "f", 4);
				press_default({ onPress: h });
				_patch_child_end();
				_html(`<span>${_text_mark($scope2_id, "g", typeof h, $wg__input_label)}</span>`);
				_script($scope2_id, "a8");
				$cg__input_label && _patch_render($scope2_id, "a9");
				$cg__input_tag && _patch_render($scope2_id, "a10");
				_patch_render($scope2_id, "a11", ((_filled_guard($scope0_reason, 4) ? " >>g" : "") + ($fg__input_label ? " >>h" : "") + ($fg__input_label ? " >>d" : "")).slice(1), $scope0_reason, 0);
				_subscribe($wi__input_label && $top2__closures, _subscribe($wi__input_tag && $input_tag__closures, _subscribe($wi__input_flag && $input_flag__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					i: $wi__input_flag && Note,
					_: _scope_with_id($scope1_id),
					f: $wi__input_label && _existing_scope($childScope)
				}), $cg__input_label && "a9"), _client_guard($scope0_reason, 3) && "a12"), $cg__input_tag && "a10"), $cg__input_label && "a13");
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a15"], $scope0_reason, 2);
	_scope($scope0_id, {
		d: input.label,
		f: input.flag,
		g: input.tag,
		h: top,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_flag && $input_flag__closures,
		k: $wi__input_tag && $input_tag__closures,
		l: $wi__input_label && $top2__closures
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xf", input.flag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a17", "f"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xg", input.tag, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "a18", "g"), $fg__input_label2 && _patch_write($scope0_id, "xh", top, !$sg__input_label) && _patch_subscribers($scope0_id, "a19", "h d"));
}, 1);
