// card.marko
_shells({ b: "b;E l%;<section><em> </em><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "a", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// box.marko
const $template = "<article><b> </b><!></article>";
const $walks = "E l%l";
_shells({ a: "a;E l%;<article><b> </b><!></article>" });
var box_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_patch_text($scope0_id, "a", input.k, void 0, $scope0_reason, 0)}</b>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</article>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	c0: "c0; ; ",
	c1: /*@__PURE__*/ ((_w0) => `c1 c8;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template),
	c: "c !c3;b%b ;<!><!><button>+</button>"
});
var template_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", input.on ? card_default : null, {}, _content_elide("c1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_set_scope_reason(2);
		const $childScope = _patch_child($scope1_id, "a");
		box_default({
			k: count,
			content: _content_elide("c0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(_patch_text($scope2_id, "a", input.label, void 0, $scope0_reason, 2));
				_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, "c2");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }));
			}, $scope1_id)
		});
		_subscribe($count__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}));
	}, $scope0_id), 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c3");
	_patch_value($scope0_id, "vc5", count, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		g: count,
		h: _write_if($scope0_reason, 2) && $input_label__closures,
		i: $count__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc4", input.label, !_server_guard($scope0_reason, 2));
}, 1);
