// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "b0", $scope0_id);
	writeScope($scope0_id, {});
	return $return;
});

// tags/thing.marko
var thing_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_hoist($scope0_id, "a0");
	const $thing_content__subscribers = /* @__PURE__ */ new Set();
	const $inputshowThingnull_content__subscribers = /* @__PURE__ */ new Set();
	const $inputshowsectionnull_content__subscribers = /* @__PURE__ */ new Set();
	thing_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $Child_scope = _peek_scope_id();
		let setHtml = _dynamic_tag($scope1_id, "a", child_default, {});
		_var($scope1_id, "b", $Child_scope, "a1");
		_subscribe($thing_content__subscribers, writeScope($scope1_id, { c: setHtml }));
	}) });
	_dynamic_tag($scope0_id, "b", input.show ? thing_default : null, {}, _content_resume("a5", () => {
		const $scope2_id = _scope_id();
		const $thing_content2__subscribers = /* @__PURE__ */ new Set();
		_scope_reason();
		thing_default({ content: _content("a4", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			const $Child_scope2 = _peek_scope_id();
			let setHtml2 = _dynamic_tag($scope3_id, "a", child_default, {});
			_var($scope3_id, "b", $Child_scope2, "a3");
			_subscribe($thing_content2__subscribers, writeScope($scope3_id, { c: setHtml2 }));
		}) });
		_subscribe($inputshowThingnull_content__subscribers, writeScope($scope2_id, { B3: $thing_content2__subscribers }));
	}, $scope0_id), 0, $sg__input_show);
	_dynamic_tag($scope0_id, "c", input.show ? "section" : null, {}, _content_resume("a7", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		const $Child_scope3 = _peek_scope_id();
		let setHtml3 = _dynamic_tag($scope4_id, "a", child_default, {});
		_var($scope4_id, "b", $Child_scope3, "a6");
		_subscribe($inputshowsectionnull_content__subscribers, writeScope($scope4_id, { c: setHtml3 }));
	}, $scope0_id), 0, $sg__input_show);
	_script($scope0_id, "a8");
	writeScope($scope0_id, {
		B1: $thing_content__subscribers,
		B2: $inputshowThingnull_content__subscribers,
		B4: $inputshowsectionnull_content__subscribers
	});
}, 1);
