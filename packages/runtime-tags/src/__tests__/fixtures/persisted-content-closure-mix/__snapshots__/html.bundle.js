// tags/card/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D%c%c%;<i><!>:<!>:<!></i>",
	a: "a; ;<main></main>",
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = /* @__PURE__ */ new Set();
	const $global_brand__closures = /* @__PURE__ */ new Set();
	const $global$1 = $global();
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item__closures = /* @__PURE__ */ new Set();
		_set_serialize_reason(0);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		card_default({ content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_patch_text($scope2_id, "a", $global$1.brand)}${_el_resume($scope2_id, "a")}:<!>${_patch_text($scope2_id, "b", input.prefix, $scope0_owned, 2)}${_el_resume($scope2_id, "b")}:<!>${_patch_text($scope2_id, "c", item, $scope0_owned, 1)}${_el_resume($scope2_id, "c")}</i>`);
			_subscribe($scope0_reason && $for_content__item__closures, _subscribe($scope0_reason && $global_brand__closures, _subscribe(_source_if($scope0_reason, 2) && $input_prefix__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }))));
			_resume_branch($scope2_id);
		}, $scope1_id) });
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			d: $for_content__item__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, $sg__input_items, $sg__input_items, void 0, void 0, "a1");
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_items)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.prefix,
		f: $global$1?.brand,
		g: $input_prefix__closures,
		h: $global_brand__closures
	});
}, 1, 1);
