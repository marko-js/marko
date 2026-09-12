// tags/frame.marko
const $template$1 = "<div><!></div>";
_shells({ c: "c;D%;<div><!></div>" });
var frame_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// tags/card.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)("D%l"), ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1)) });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	frame_default({ content: input.content });
	_html("</section>");
	$scope0_reason && _scope($scope0_id, { b: _existing_scope($childScope) });
}, 0, () => [frame_default]);

// template.marko
_shells({
	a0: "a0 a5;D%c%c%;<span><!>/<!>/<!></span>",
	a: "a !a2;D%b ;<main><!><button>+</button></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	const $p_name__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const p = input.p;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_id__closures = /* @__PURE__ */ new Set();
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		card_default({
			title: item.title,
			content: _content_elide("a0", () => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_patch_text($scope2_id, "a", p.name, void 0, $scope0_owned, 0)}/${_text_resume($scope2_id, "b", count, 2)}/${_patch_text($scope2_id, "c", item.id, 2, $scope0_owned, 1)}</span>`);
				_subscribe(_unfilled_if($scope0_owned, 1) && $for_content__item_id__closures, _subscribe(_unfilled_if($scope0_owned, 0) && $p_name__closures, _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }))));
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			f: $for_content__item_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1", $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {
		g: count,
		i: _source_if($scope0_reason, 1) && p?.name,
		j: $count__closures,
		k: $p_name__closures
	});
}, 1, () => [card_default]);
