// tags/labeled.marko
_shells({ b: "b; D l ;<label> </label><input>" });
var labeled_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "a", 0, 0)}>${_patch_text($scope0_id, "b", input.name, void 0, $scope0_reason, 0)}</label>${_el_resume($scope0_id, "a", 0)}<input${_attr("id", uid, $scope0_id, "c", 0, 0)}>${_el_resume($scope0_id, "c", 0)}`);
	_scope($scope0_id, {});
});

// tags/plain.marko
_shells({ c: "c;D ;<span> </span>" });
var plain_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.name, void 0, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a2: "a2; D l ;<label> </label><input>",
	a3: "a3; D l ;<label> </label><input>",
	a: "a;b%b%b%;<!><!><!><!><!>",
	a1: "a1;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", item.on ? labeled_default : plain_default, { name: item.key }, 1, 0, 0, $wg__input_items, $scope0_reason, 0);
		$cg__input_items && _patch_init($scope1_id, "a0");
		$wi__input_items && _scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const $for_content2__item_key__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope2_id, "a", item.on ? "p" : "div", {}, 10, _content_elide("a3", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			const bodyId = _id("A");
			_html(`<label${_attr("for", bodyId, $scope3_id, "a", 0, 0)}>${_patch_text($scope3_id, "b", item.key, void 0, $scope0_reason, 0)}</label>${_el_resume($scope3_id, "a", 0)}<input${_attr("id", bodyId, $scope3_id, "c", 0, 0)}>${_el_resume($scope3_id, "c", 0)}`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_items ? "a6" : "a7");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content2__item_key__closures, _scope($scope3_id, { _: $wi__input_items && _scope_with_id($scope2_id) }));
		}, $scope2_id), 0, $wg__input_items, $scope0_reason, 0);
		$wi__input_items && _scope($scope2_id, { f: $for_content2__item_key__closures });
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "a4", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope4_id = _scope_id();
		const $for_content3__item_key__closures = /* @__PURE__ */ new Set();
		_dynamic_tag($scope4_id, "a", item.on ? plain_default : null, { name: item.key }, 17, _content_elide("a2", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			const nullId = _id("B");
			_html(`<label${_attr("for", nullId, $scope5_id, "a", 0, 0)}>${_patch_text($scope5_id, "b", item.key, void 0, $scope0_reason, 0)}</label>${_el_resume($scope5_id, "a", 0)}<input${_attr("id", nullId, $scope5_id, "c", 0, 0)}>${_el_resume($scope5_id, "c", 0)}`);
			$cg__input_items && _patch_init($scope5_id, "a8");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content3__item_key__closures, _scope($scope5_id, { _: $wi__input_items && _scope_with_id($scope4_id) }));
		}, $scope4_id), 0, $wg__input_items, $scope0_reason, 0);
		$cg__input_items && _patch_init($scope4_id, "a9");
		$wi__input_items && _scope($scope4_id, { g: $for_content3__item_key__closures });
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
