// tags/cmp.marko
_shells({ c: "c !;D%c%l%b%;<p><!> <!></p><!><!><!>" });
var cmp_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_o__OR__input_p = _unfilled_if($scope0_reason, 0), $fg__input_o = _filled_guard($scope0_reason, 3), $fg__input_p = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	let x = input.a;
	let y = input.b;
	_html(`<p>${_text_mark($scope0_id, "a", x === y ? "same" : "diff")} ${_text_mark($scope0_id, "b", input.o === input.p ? "same" : "diff", 2, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "c", x, {});
	_dynamic_tag($scope0_id, "d", y, {}, 8);
	_patch_render($scope0_id, "c0", (($fg__input_o ? " i" : "") + ($fg__input_p ? " j" : "")).slice(1), $scope0_reason, 0);
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vc1", x, 1);
	_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vc2", y, 1);
	_scope($scope0_id, {
		i: _write_if($scope0_reason, 4) && $ui__input_o__OR__input_p && input.o,
		j: _write_if($scope0_reason, 3) && $ui__input_o__OR__input_p && input.p,
		l: x,
		m: y
	}) || ($fg__input_o && _unfilled_if($scope0_reason, 4) && _patch_write($scope0_id, "xi", input.o, !_server_guard($scope0_reason, 3)), $fg__input_p && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "xj", input.p, !_server_guard($scope0_reason, 4)));
});

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a5: `a5${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $uf__input_obj = _updates_from($scope0_reason, 2), $wi__input_obj = _write_if($scope0_reason, 2), $cg__input_obj = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_obj__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a4", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const Inner = { content: _content_resume("a0", () => {
					const $scope3_id = _scope_id();
					_scope_reason();
					_html(`<b>${_text_mark($scope3_id, "b", input.label, _write_guard($scope0_reason, 1))}</b>${_el_mark($scope3_id, "a")}`);
					_script($scope3_id, "a1");
					$cg__input_label && _patch_render($scope3_id, "a2");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }), $cg__input_label && "a2");
				}, $scope2_id) };
				_set_scope_reason($uf__input_obj << 1 | $uf__input_obj << 7 | $uf__input_obj << 9);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				cmp_default({
					a: Inner,
					b: Inner,
					o: input.obj,
					p: input.obj
				});
				_patch_child_end();
				$cg__input_obj && _patch_render($scope2_id, "a3");
				_subscribe($wi__input_obj && $input_obj__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: $wi__input_obj && _existing_scope($childScope)
				}), $cg__input_obj && "a3", 0);
				_write_guard($scope0_reason, 2) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a5"], $scope0_reason, 0);
	_html(`<p>${_text_mark($scope0_id, "b", input.obj.n, 1, $scope0_reason, 3)}</p>`);
	_scope($scope0_id, {
		f: input.label,
		g: input.obj,
		i: $wi__input_label && $input_label__closures,
		j: $wi__input_obj && $input_obj__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a6", "f"), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xg", input.obj, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a7", "g"));
}, 1);
