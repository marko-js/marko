// tags/card/index.marko
const $template = "<b> </b><!><!>";
const $walks = "D l%c";
_shells({ b: "b;D l%;<b> </b><!><!>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</b>`);
	_patch_dynamic_tag($scope0_id, "b", input.content, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a; ;<ul></ul>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks), /*@__PURE__*/ ((_w0) => `<li>${_w0}</li>`)($template))
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_n__closures = /* @__PURE__ */ new Set();
		_html("<li>");
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		card_default({
			title: item.t,
			content: _content_elide("a0", () => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", item.n, $scope0_owned, 0)}${_el_resume($scope2_id, "a")}</em>`);
				_subscribe($scope0_reason && $for_content__item_n__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id)
		});
		_html("</li>");
		writeScope($scope1_id, {
			f: $for_content__item_n__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {});
}, 1, () => [card_default]);
