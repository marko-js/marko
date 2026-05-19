// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $child_content__subscribers = /* @__PURE__ */ new Set();
	_hoist($scope0_id, "a2");
	const $inputshowChildnull_content__subscribers = /* @__PURE__ */ new Set();
	const $inputshowsectionnull_content__subscribers = /* @__PURE__ */ new Set();
	child_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span></span>${_el_resume($scope1_id, "a")}`);
		_subscribe($child_content__subscribers, writeScope($scope1_id, {}));
	}) });
	_dynamic_tag($scope0_id, "b", input.show ? child_default : null, {}, _content_resume("a5", () => {
		const $scope2_id = _scope_id();
		_hoist($scope2_id, "a1");
		const $child_content2__subscribers = /* @__PURE__ */ new Set();
		_scope_reason();
		child_default({ content: _content("a4", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<div></div>${_el_resume($scope3_id, "a")}`);
			_subscribe($child_content2__subscribers, writeScope($scope3_id, {}));
		}) });
		_script($scope2_id, "a6");
		_subscribe($inputshowChildnull_content__subscribers, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			B3: $child_content2__subscribers
		}));
	}, $scope0_id), 0, $sg__input_show);
	_dynamic_tag($scope0_id, "c", input.show ? "section" : null, {}, _content_resume("a7", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<p></p>${_el_resume($scope4_id, "a")}`);
		_subscribe($inputshowsectionnull_content__subscribers, writeScope($scope4_id, {}));
	}, $scope0_id), 0, $sg__input_show);
	_script($scope0_id, "a8");
	writeScope($scope0_id, {
		B1: $child_content__subscribers,
		B2: $inputshowChildnull_content__subscribers,
		B4: $inputshowsectionnull_content__subscribers
	});
}, 1);
