// card.marko
const $template = "<section><em> </em><!><!></section>";
const $walks = "E l%b%l";
_shells({ b: "b;E l%b%;<section><em> </em><!><!></section>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta.n, void 0, $scope0_reason, 0)}</em>`);
	const $tag = input.meta.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), void 0, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 1));
	const $tag2 = input.content;
	_dynamic_tag($scope0_id, "c", $tag2, {}, 0, 0, _source_guard($scope0_reason, 2), void 0, _patch_dynamic_tag($scope0_id, "c", $tag2, 0, 0, 0, $scope0_reason, 2));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	c0: "c0; ; ",
	c1: "c1; ; ",
	c: /*@__PURE__*/ (() => `c !c4;${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>+</button>`)($template)}`)()
});
var template_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		meta: attrTag({
			n: count,
			content: _content_elide("c1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				_html(_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 0));
				_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "c2");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			}, $scope0_id)
		}),
		content: _content_elide("c0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 0));
			_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "c3");
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cg: 1
			}));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c4");
	_patch_value($scope0_id, "c5", count, 1);
	$scope0_page && _scope($scope0_id, {
		f: count,
		g: $input_label__closures,
		a: _existing_scope($childScope)
	});
}, 1);
