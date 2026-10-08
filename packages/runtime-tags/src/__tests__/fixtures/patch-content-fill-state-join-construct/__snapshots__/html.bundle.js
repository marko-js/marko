// tags/frame.marko
const $template$1 = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var frame_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $wg__input_content, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</div>");
	$scope0_page && _scope($scope0_id, {});
});

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
_shells({ b: /*@__PURE__*/ (() => `b;${((_w0) => `E l/${_w0}&l`)("D%l")};${((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1)}`)() });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	frame_default({ content: input.content });
	_html("</section>");
	$scope0_page && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: "a0 a8;D%c%c%;<span><!>/<!>/<!></span>",
	a: "a !a4;D%b ;<main><!><button>+</button></main>",
	a1: /*@__PURE__*/ ((_w0) => `a1;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $p_name__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const p = input.p;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_id__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		card_default({
			title: item.title,
			content: _content_elide("a0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_patch_text($scope2_id, "a", p.name, void 0, $scope0_reason, 0)}/${_text_resume($scope2_id, "b", count, 2)}/${_patch_text($scope2_id, "c", item.id, 2, $scope0_reason, 1)}</span>`);
				_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "a2");
				_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "a3");
				_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item_id__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $p_name__closures, _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }))));
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			l: $for_content__item_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	_patch_value($scope0_id, "a6", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: count,
		i: _source_if($scope0_reason, 1) && p?.name,
		j: $count__closures,
		k: $p_name__closures
	}) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "a5", p?.name);
}, 1);
