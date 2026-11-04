// tags/get.marko
_shells({ c: "c; b b bD ;<button>array</button><button>set</button><button>map</button><p> </p>" });
var get_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_m = _filled_guard($scope0_reason, 4), $fg__input_s = _filled_guard($scope0_reason, 3), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_a_1_1_ = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<button>array</button>${_el_mark($scope0_id, "a")}<button>set</button>${_el_mark($scope0_id, "b")}<button>map</button>${_el_mark($scope0_id, "c")}<p>${_text_mark($scope0_id, "d", "", 1, 0, 0, 1)}</p>`);
	_script($scope0_id, "c1", 1, $fg__input_m);
	_script($scope0_id, "c2", 1, $fg__input_s);
	_script($scope0_id, "c3", 1, $fg__input_a_1_1_);
	_script($scope0_id, "c0", 1, ($fg__input_a || $fg__input_s || $fg__input_m) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 4) ? 2 : 1), (($fg__input_a ? " g" : "") + ($fg__input_s ? " k" : "") + ($fg__input_m ? " l" : "")).slice(1), "c4", $scope0_reason, 0);
	_scope($scope0_id, {
		g: input.a,
		j: input.a?.[1]?.[1]?.[0],
		k: input.s,
		l: input.m
	}) || ($fg__input_a && _patch_write($scope0_id, "xg", input.a, !_server_guard($scope0_reason, 1)), $fg__input_a_1_1_ && _patch_write($scope0_id, "xj", input.a?.[1]?.[1]?.[0], !_server_guard($scope0_reason, 2)), $fg__input_s && _patch_write($scope0_id, "xk", input.s, !_server_guard($scope0_reason, 3)), $fg__input_m && _patch_write($scope0_id, "xl", input.m, !_server_guard($scope0_reason, 4)));
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
function mkArray(f) {
	const a = [f];
	a.push(a);
	return a;
}
function mkSet(f) {
	const s = /* @__PURE__ */ new Set([f]);
	s.add(s);
	return s;
}
function mkMap(f) {
	const m = /* @__PURE__ */ new Map([["f", f]]);
	m.set("self", m);
	return m;
}
_shells({
	a: "a;b%;<!><!><!>",
	a3: `a3${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a4", "e");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				const f = _bind_resume(function() {
					console.log("fn", input.label);
				}, "a0", $scope2_id);
				_set_scope_reason($uf__input_label << 1 | $uf__input_label << 3 | $uf__input_label << 5 | $uf__input_label << 7 | $uf__input_label << 9);
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				get_default({
					a: mkArray(f),
					s: mkSet(f),
					m: mkMap(f)
				});
				_patch_child_end();
				$cg__input_label && _patch_render($scope2_id, "a1");
				_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: $wi__input_label && _existing_scope($childScope)
				}), $cg__input_label && "a1", 0);
				_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
