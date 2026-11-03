// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_second = _write_if($scope0_reason, 0), $wi__input_first = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_second__closures = new Set();
	const $input_first__closures = new Set();
	const $showSecond__closures = new Set();
	let showSecond = false;
	_html("<main>");
	frame_default({ content: _content("__tests__/tags/inner.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", showSecond ? input.second : input.first, (value) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", value)}</p>`);
			_scope($scope2_id, {}, "__tests__/tags/inner.marko", "4:6");
		});
		_subscribe($showSecond__closures, _subscribe($wi__input_first && $input_first__closures, _subscribe($wi__input_second && $input_second__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/inner.marko", "3:4"), "__tests__/tags/inner.marko_1_input_second#0:4/subscribe", 0), "__tests__/tags/inner.marko_1_input_first#0:5/subscribe", 0), "__tests__/tags/inner.marko_1_showSecond#0:6/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/tags/inner.marko_0");
	_scope($scope0_id, {
		input_second: input.second,
		input_first: input.first,
		showSecond,
		"ClosureScopes:input_second/7": $wi__input_second && $input_second__closures,
		"ClosureScopes:input_first/8": $wi__input_first && $input_first__closures,
		"ClosureScopes:showSecond/9": $showSecond__closures
	}, "__tests__/tags/inner.marko", 0, {
		input_second: ["input.second"],
		input_first: ["input.first"],
		showSecond: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 2) << 1 | _write_guard($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	inner_default({
		first: input.first,
		second: input.second
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
