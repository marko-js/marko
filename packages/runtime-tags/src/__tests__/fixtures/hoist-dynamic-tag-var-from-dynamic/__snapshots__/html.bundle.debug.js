// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "#div/0")}`);
	const $return = _resume(() => (html) => ((el) => el())(_el_read_error).innerHTML = html, "__tests__/tags/child.marko_0/_return", $scope0_id);
	writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
	return $return;
});

// tags/thing.marko
var thing_default = _template("__tests__/tags/thing.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/thing.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $setHtml_getter = _hoist($scope0_id, "__tests__/template.marko_0_setHtml/hoist");
	const $thing_content__subscribers = new Set();
	const $inputshowThingnull_content__subscribers = new Set();
	const $inputshowsectionnull_content__subscribers = new Set();
	thing_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $Child_scope = _peek_scope_id();
		let setHtml = _dynamic_tag($scope1_id, "#text/0", 1 && child_default, {});
		_var($scope1_id, "#scopeOffset/1", $Child_scope, "__tests__/template.marko_1_setHtml/var");
		_subscribe($thing_content__subscribers, writeScope($scope1_id, { setHtml }, "__tests__/template.marko", "4:2", { setHtml: "5:18" }));
		_assert_hoist(setHtml);
	}) });
	_dynamic_tag($scope0_id, "#text/1", input.show ? thing_default : null, {}, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $thing_content2__subscribers = new Set();
		_scope_reason();
		thing_default({ content: _content("__tests__/template.marko_3_content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			const $Child_scope2 = _peek_scope_id();
			let setHtml2 = _dynamic_tag($scope3_id, "#text/0", 1 && child_default, {});
			_var($scope3_id, "#scopeOffset/1", $Child_scope2, "__tests__/template.marko_3_setHtml2/var");
			_subscribe($thing_content2__subscribers, writeScope($scope3_id, { setHtml2 }, "__tests__/template.marko", "17:4", { setHtml2: "18:20" }));
			_assert_hoist(setHtml2);
		}) });
		_subscribe($inputshowThingnull_content__subscribers, writeScope($scope2_id, { "ClosureScopes:3": $thing_content2__subscribers }, "__tests__/template.marko", "16:4"));
	}, $scope0_id), 0, $sg__input_show);
	_dynamic_tag($scope0_id, "#text/2", input.show ? "section" : null, {}, _content_resume("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		const $Child_scope3 = _peek_scope_id();
		let setHtml3 = _dynamic_tag($scope4_id, "#text/0", 1 && child_default, {});
		_var($scope4_id, "#scopeOffset/1", $Child_scope3, "__tests__/template.marko_4_setHtml3/var");
		_subscribe($inputshowsectionnull_content__subscribers, writeScope($scope4_id, { setHtml3 }, "__tests__/template.marko", "27:4", { setHtml3: "28:18" }));
		_assert_hoist(setHtml3);
	}, $scope0_id), 0, $sg__input_show);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		"ClosureScopes:1": $thing_content__subscribers,
		"ClosureScopes:2": $inputshowThingnull_content__subscribers,
		"ClosureScopes:4": $inputshowsectionnull_content__subscribers
	}, "__tests__/template.marko", 0);
}, 1);
