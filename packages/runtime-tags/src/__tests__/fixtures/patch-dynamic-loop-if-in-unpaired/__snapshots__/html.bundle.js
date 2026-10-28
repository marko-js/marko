// card.marko
const $template = "<section><em> </em><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_resume($scope0_id, "a", input.meta ? input.meta.n : "-", 1, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["c8"]], ["a>", $setup$1]);
_shells({
	c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)(),
	c3: "c3; ;<ul></ul>",
	c2: "c2;D%c%;<li><!>:<!></li>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 4), $wi__input_on__OR__input_items__OR__input_label = _write_if($scope0_reason, 1), $cg__input_items = _client_guard($scope0_reason, 3), $wg__input_on = _write_guard($scope0_reason, 2), $cg__input_on = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		meta: attrTag({ n: count }),
		content: _content("c7", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.on) {
					const $scope2_id = _scope_id();
					_html("<ul>");
					_for_of(input.items, (x) => {
						const $scope3_id = _scope_id();
						_html(`<li>${_text_resume($scope3_id, "a", x, 1, $scope0_reason, 3)}:${_text_resume($scope3_id, "b", input.label, 2, $scope0_reason, 4)}</li>`);
						$cg__input_label && _patch_init($scope3_id, "c0");
						_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, { _: $wi__input_on__OR__input_items__OR__input_label && _scope_with_id($scope2_id) }), $cg__input_label && "c1");
					}, 0, $scope2_id, "a", 1, 1, 1, 0, 0, "c2", $scope0_reason, 3);
					_html(`</ul>${_el_resume($scope2_id, "a")}`);
					$cg__input_items && _patch_init($scope2_id, "c4");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }), $cg__input_items && "c5");
					return 0;
				}
			}, $scope1_id, "a", 1, $wg__input_on, 1, 0, 0, ["c3"], $scope0_reason, 2);
			$wi__input_on__OR__input_items__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_on && "c6", $wg__input_on);
			$wg__input_on || $wi__input_on__OR__input_items__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c8");
	_scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.items,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4)) && input.label,
		h: count,
		k: _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures,
		j: _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_items__closures,
		i: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_on__closures,
		a: _existing_scope($childScope)
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "vc9", input.items, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vc10", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
