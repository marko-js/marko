// template.marko
const $template = "<div></div>";
const $walks = " b";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $si__input_title = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const one = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>one ${_patch_text($scope1_id, "#text/0", input.title, 2, $scope0_owned, 0)}</em>`);
		_subscribe($si__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	const two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _persisted_reason();
		_html(`<strong>two ${_patch_text($scope2_id, "#text/0", input.title, 2, $scope0_owned, 0)}</strong>`);
		_subscribe($si__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title": 1
		}, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_html("<div");
	_patch_attrs_content({ content: input.which ? one : two }, "#div/0", $scope0_id, "div", void 0, void 0, $scope0_owned, 1);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_input_which#4_one#5_two#6");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		input_which: input.which,
		one,
		two,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		input_which: ["input.which"],
		one: "1:9",
		two: "2:9",
		"EventAttributes:#div/0": ["...{ content: input.which ? one : two }", "3:9"]
	}) : _owned_guard($scope0_owned, 0) && (_content_withheld("__tests__/template.marko_1*content") || _content_withheld("__tests__/template.marko_2*content")) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
