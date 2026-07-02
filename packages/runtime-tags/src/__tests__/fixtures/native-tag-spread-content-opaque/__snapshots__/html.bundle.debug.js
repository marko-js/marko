// tags/render-input.marko
var render_input_default = _template("__tests__/tags/render-input.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.data.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/render-input.marko", 0);
});

// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<button type=button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}<div class=echo>`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(_serialize_guard($scope0_reason, 0));
			render_input_default({ data: input });
			writeScope($scope1_id, {
				_: $si__input && _scope_with_id($scope0_id),
				"#childScope/0": $si__input && _existing_scope($childScope)
			}, "__tests__/tags/my-box.marko", "8:4");
			return 0;
		}
	}, $scope0_id, "#div/2", 1, 1, 1, "</div>");
	_script($scope0_id, "__tests__/tags/my-box.marko_0");
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input");
	writeScope($scope0_id, {
		input,
		show
	}, "__tests__/tags/my-box.marko", 0, {
		input: 0,
		show: "1:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_box_default({
		class: "x",
		content: _content_resume("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("Body Content");
		}, $scope0_id)
	});
}, 1);
