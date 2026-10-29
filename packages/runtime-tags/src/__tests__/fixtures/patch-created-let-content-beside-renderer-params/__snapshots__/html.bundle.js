// tags/card.marko
const $template$2 = "<section><button>clear</button><!></section>";
const $walks$2 = "D b%l";
const $setup$3 = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_first_value($scope0_id, "f", c, $scope0_reason, 0);
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $scope0_reason, 0, "f");
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>x</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $setup$2 = _shell_setup([[], ["d0"]], ["b>", $setup$3]);
_shells({ d: /*@__PURE__*/ (() => `d${_shell_marker($setup$2)};${((_w0) => ` b/${_w0}&`)($walks$2)};${((_w0) => `<button>x</button>${_w0}`)($template$2)}`)() });
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.content;
	_html(`<button>x</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	card_default({ content: o });
	_patch_child_end();
	_script($scope0_id, "d0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vd1", o, 1);
	_scope($scope0_id, { b: _existing_scope($childScope) }) || _content_withhold(input.content);
});

// tags/host.marko
const $template = "<button class=flag>f</button><!><!><!>";
const $walks = " b%b%c";
const $setup$1 = [[], ["c5"]];
_shells({
	c0: "c0",
	c: "c !c5; b%b%;<button class=flag>f</button><!><!><!>",
	c4: "c4;b%;<!><!><!>"
});
var host_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 4);
	const $scope0_page = _page_render(), $wg__input_wrap__OR__input_native = _write_guard($scope0_reason, 1), $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label = _write_if($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let flag = false;
	_html(`<button class=flag>f</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "a", input.native ? "section" : input.wrap, {}, 10, _content_resume("c0", () => {
				const $scope3_id = _scope_id();
				_scope_reason();
				_html(`<i>${_text_resume($scope3_id, "a", input.label, 1, $scope0_reason, 7)}</i>`);
				_unfilled_if($scope0_reason, 7) && _patch_init($scope3_id, _client_guard($scope0_reason, 7) ? "c1" : "c2");
				_subscribe(_unfilled_if($scope0_reason, 7) && $input_label__closures, _scope($scope3_id, { _: $wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope_with_id($scope2_id) }));
			}, $scope2_id, ($scope) => $scope0_page ? [{ i: input.label }, { _: $scope($scope0_id) }] : []), 0, $wg__input_wrap__OR__input_native, $scope0_reason, 1);
			_patch_join_init($scope2_id, "c3", $scope0_reason, 1, _filled_guard($scope0_reason, 4) && ">f", _filled_guard($scope0_reason, 6) && ">h");
			$wi__input_wrap__OR__input_show__OR__input_native__OR__input_label && _scope($scope2_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, _write_guard($scope0_reason, 5), 1, 0, 0, ["c4"], $scope0_reason, 5);
	_script($scope0_id, "c5");
	_filled_guard($scope0_reason, 6) && $cg__input_show ? _patch_fill($scope0_id, "vc9", input.native) : _client_guard($scope0_reason, 0) && _patch_write($scope0_id, "xh", input.native, !(_filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 4)));
	_patch_fill($scope0_id, "vc10", flag, 1);
	_scope($scope0_id, {
		f: input.wrap,
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.native,
		i: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 7)) && input.label,
		j: flag,
		m: _write_if($scope0_reason, 7) && $input_label__closures
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "vc7", input.wrap) : _patch_fill($scope0_id, "vc6", input.wrap, !_server_guard($scope0_reason, 4))), _content_withhold(input.wrap), _filled_guard($scope0_reason, 7) && _content_withheld("c0", $scope0_id) && _patch_fill($scope0_id, "vc8", input.label, !_server_guard($scope0_reason, 7)));
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a3: "a3 !a4",
	a1: "a1;Db%;<em>static <!></em>",
	"~a1": "~a1;Db%;<em>static <!></em>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b%bD/${_w0}&l`)($walks)};${((_w0) => `<!><!><main>${_w0}</main>`)($template)}`)(),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup$2]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			outer_default({ content: _content("a1", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_text_resume($scope2_id, "a", input.label, 2, $scope0_reason, 4)}</em>`);
				_client_guard($scope0_reason, 4) && _patch_init($scope2_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }));
			}, $scope1_id, 2) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 3), 1, 0, 0, ["a2"], $scope0_reason, 3);
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 5) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 3) << 11 | _mask_group($scope0_reason, 5) << 13 | _mask_group($scope0_reason, 4) << 15);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 2);
	host_default({
		show: input.show,
		native: input.native,
		label: input.label,
		wrap: attrTag({ content: _content_resume("a3", ({ content }) => {
			const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 0);
			const $scope3_id = _scope_id();
			_content_withhold(content), _patch_fill($scope3_id, "va5", content);
			let open = true;
			_html(`<button class=toggle>t</button>${_el_resume($scope3_id, "a")}`);
			_if(() => {
				{
					const $scope4_id = _scope_id();
					_dynamic_tag($scope4_id, "a", content, {}, 8, 0, 0, $wg__content);
					_scope($scope4_id, {});
					return 0;
				}
			}, $scope3_id, "b");
			_script($scope3_id, "a4");
			_patch_fill($scope3_id, "va6", open, 1);
			_scope($scope3_id, {
				e: content,
				f: open
			});
		}, $scope0_id) })
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures,
		b: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va7", input.label, !_server_guard($scope0_reason, 4));
}, 1);
