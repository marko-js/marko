// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_title__OR__input_which = _write_if($scope0_reason, 0), $wg__input_which = _write_guard($scope0_reason, 2), $wi__input_which = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const One = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>one ${_text_mark($scope1_id, "#text/0", input.title, $wg__input_title * 2)}</em>`);
		$wi__input_title__OR__input_which && _subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_title#0:6/subscribe", $wg__input_title);
	}, $scope0_id) };
	const Two = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<strong>two ${_text_mark($scope2_id, "#text/0", input.title, $wg__input_title * 2)}</strong>`);
		$wi__input_title__OR__input_which && _subscribe($wi__input_title && $input_title__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_title/12": $wi__input_title && 1
		}, "__tests__/template.marko", "2:2"), "__tests__/template.marko_2_input_title#0:6/subscribe", $wg__input_title);
	}, $scope0_id) };
	_html("<div data-kind=pick>");
	_attr_content("#div/0", $scope0_id, input.which ? One : Two, $wg__input_which);
	_html(`</div>${_el_mark($scope0_id, "#div/0", $wg__input_which)}<b`);
	_attrs_content({ [input.key]: "computed" }, "#b/1", $scope0_id, "b");
	_html(`</b>${_el_mark($scope0_id, "#b/1")}<s`);
	_attrs_content({
		__proto__: null,
		id: "proto"
	}, "#s/2", $scope0_id, "s");
	_html(`</s>${_el_mark($scope0_id, "#s/2")}<em`);
	_attrs_content({ get id() {
		return "getter";
	} }, "#em/3", $scope0_id, "em");
	_html(`</em>${_el_mark($scope0_id, "#em/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_key#8");
	_scope($scope0_id, {
		input_title: $wi__input_which && input.title,
		One: $wi__input_which && One,
		Two: $wi__input_which && Two,
		"ClosureScopes:input_title/12": $wi__input_title && $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		One: "1:9",
		Two: "2:9",
		"EventAttributes:#b/1": ["...{ [input.key]: \"computed\" }", "4:7"],
		"EventAttributes:#s/2": ["...{ __proto__: null, id: \"proto\" }", "5:7"],
		"EventAttributes:#em/3": ["...{ get id() { return \"getter\"; } }", "6:8"]
	});
}, 1);
