// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, $sg__input_content);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $el_getter = _hoist($scope0_id, "__tests__/template.marko_0_#span/hoist");
	const $child_content__subscribers = new Set();
	const $el2_getter = _hoist($scope0_id, "__tests__/template.marko_0_#div/hoist");
	const $inputshowChildnull_content__subscribers = new Set();
	const $inputshowsectionnull_content__subscribers = new Set();
	child_default({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span></span>${_el_resume($scope1_id, "#span/0")}`);
		_subscribe($child_content__subscribers, writeScope($scope1_id, {}, "__tests__/template.marko", "3:2"));
	}) });
	_dynamic_tag($scope0_id, "#text/1", input.show ? child_default : null, {}, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $inputshowChildnull_content__$el2_getter = _hoist($scope2_id, "__tests__/template.marko_2_#div/hoist");
		const $child_content2__subscribers = new Set();
		_scope_reason();
		child_default({ content: _content("__tests__/template.marko_3_content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<div></div>${_el_resume($scope3_id, "#div/0")}`);
			_subscribe($child_content2__subscribers, writeScope($scope3_id, {}, "__tests__/template.marko", "16:4"));
		}) });
		_script($scope2_id, "__tests__/template.marko_2");
		_subscribe($inputshowChildnull_content__subscribers, writeScope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:3": $child_content2__subscribers
		}, "__tests__/template.marko", "15:4"));
	}, $scope0_id), 0, $sg__input_show);
	_dynamic_tag($scope0_id, "#text/2", input.show ? "section" : null, {}, _content_resume("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<p></p>${_el_resume($scope4_id, "#p/0")}`);
		_subscribe($inputshowsectionnull_content__subscribers, writeScope($scope4_id, {}, "__tests__/template.marko", "34:4"));
	}, $scope0_id), 0, $sg__input_show);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		"ClosureScopes:1": $child_content__subscribers,
		"ClosureScopes:2": $inputshowChildnull_content__subscribers,
		"ClosureScopes:4": $inputshowsectionnull_content__subscribers
	}, "__tests__/template.marko", 0);
}, 1);
