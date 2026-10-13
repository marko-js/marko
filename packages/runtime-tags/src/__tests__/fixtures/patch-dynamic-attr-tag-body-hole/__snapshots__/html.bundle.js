// card.marko
const $template = "<section><em> </em><!><!></section>";
const $walks = "E l%b%l";
_shells({ b: "b;E l%b%;<section><em> </em><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta.n, void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.meta.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _write_guard($scope0_reason, 2), void 0, 2, $scope0_reason, 2);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	c0: "c0; ; ",
	c1: "c1; ; ",
	c: /*@__PURE__*/ (() => `c !c4;${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		meta: attrTag({
			n: count,
			content: _content_elide("c1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0));
				_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "c2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }));
			}, $scope0_id)
		}),
		content: _content_elide("c0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 0));
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "c3");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				Cg: $wi__input_label && 1
			}));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c4");
	_patch_value($scope0_id, "vc5", count, 1);
	$scope0_page && _scope($scope0_id, {
		f: count,
		g: $wi__input_label && $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
