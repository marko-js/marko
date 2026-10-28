// card.marko
const $template = "<section><em> </em><!></section>";
const $walks = "E l%l";
const $setup$1 = [[], []];
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_text_resume($scope0_id, "a", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// box.marko
_shells({ a: "a;E l%;<article><b> </b><!></article>" });
var box_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_text_resume($scope0_id, "a", input.k, void 0, $scope0_reason, 0)}</b>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</article>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], ["c5"]], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)() });
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	card_default({
		meta: attrTag({ n: count }),
		content: _content("c4", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			box_default({
				k: input.label,
				content: _content("c2", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`${_text_resume($scope2_id, "a", input.label, void 0, $scope0_reason, 0)}!${_text_resume($scope2_id, "b", count, 2)}`);
					_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
						_: _scope_with_id($scope1_id),
						Cg: $wi__input_label && 1
					}), $cg__input_label && "c0"), "c1");
				}, $scope1_id)
			});
			_patch_child_end();
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}), $cg__input_label && "c3");
		}, $scope0_id)
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c5");
	_scope($scope0_id, {
		f: count,
		g: $wi__input_label && _unfilled_if($scope0_reason, 0) && $input_label__closures,
		h: $count__closures,
		a: _existing_scope($childScope2)
	});
}, 1);
