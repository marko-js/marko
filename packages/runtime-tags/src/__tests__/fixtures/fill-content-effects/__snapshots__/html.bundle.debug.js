// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	const $input_title__closures = new Set();
	let count = 0;
	frame_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label + ": " + count)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_input_label#0:7");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_label#0:7/subscribe"), "__tests__/template.marko_1_count#0:9/subscribe");
	}, $scope0_id) });
	frame_default({ content: _content("__tests__/template.marko_2*content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.label + ": " + count)}</p>`);
		_script($scope2_id, "__tests__/template.marko_2_input_label#0:7");
		_subscribe($count__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/10": $wi__input_label && 1,
			"ClosureSignalIndex:count/12": 1
		}, "__tests__/template.marko", "6:2"), "__tests__/template.marko_2_input_label#0:7/subscribe"), "__tests__/template.marko_2_count#0:9/subscribe");
	}, $scope0_id) });
	frame_default({ content: _content("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<p>${_text_resume($scope3_id, "#text/0", input.title + ": " + count)}</p>`);
		_script($scope3_id, "__tests__/template.marko_3_input_title#0:8");
		_subscribe($count__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count/12": 2
		}, "__tests__/template.marko", "10:2"), "__tests__/template.marko_3_input_title#0:8/subscribe"), "__tests__/template.marko_3_count#0:9/subscribe");
	}, $scope0_id) });
	_html(`<button>${_text_resume($scope0_id, "#text/4", count)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		input_title: input.title,
		count,
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"ClosureScopes:count/12": $count__closures,
		"ClosureScopes:input_title/11": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_title: ["input.title"],
		count: "1:6"
	});
}, 1);
