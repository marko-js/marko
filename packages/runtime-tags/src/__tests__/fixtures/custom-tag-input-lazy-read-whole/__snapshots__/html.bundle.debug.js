// tags/spread-attr-tag.marko
var spread_attr_tag_default = _template("__tests__/tags/spread-attr-tag.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=inc");
	_attrs_partial_content(input.button, { class: 1 }, "#button/0", $scope0_id, "button");
	_html(`</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/spread-attr-tag.marko_0_input_button#3");
	_scope($scope0_id, {}, "__tests__/tags/spread-attr-tag.marko", 0, { "EventAttributes:#button/0": ["...input.button", "1:16"] });
});

// tags/spread-input.marko
var spread_input_default = _template("__tests__/tags/spread-input.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<button class=dec");
	_attrs_partial_content(input, { class: 1 }, "#button/0", $scope0_id, "button");
	_html(`</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/spread-input.marko_0_input#2");
	_scope($scope0_id, {}, "__tests__/tags/spread-input.marko", 0, { "EventAttributes:#button/0": ["...input", "1:16"] });
});

// tags/run-menu.marko
var run_menu_default = _template("__tests__/tags/run-menu.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=run>run</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/run-menu.marko_0");
	_scope($scope0_id, { input_menu: input.menu }, "__tests__/tags/run-menu.marko", 0, { input_menu: ["input.menu"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	spread_attr_tag_default({ button: attrTag({
		onClick: _resume(function() {
			count++;
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content("__tests__/template.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(_text_mark($scope1_id, "#text/0", count));
			_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_1_count#0:3/subscribe");
		}, $scope0_id)
	}) });
	spread_input_default({
		onClick: _resume(function() {
			count--;
		}, "__tests__/template.marko_0/onClick2", $scope0_id),
		content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(_text_mark($scope2_id, "#text/0", count));
			_subscribe($count__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:count/4": 1
			}, "__tests__/template.marko", "7:2"), "__tests__/template.marko_2_count#0:3/subscribe");
		}, $scope0_id)
	});
	run_menu_default({ menu: attrTag({ item: attrTag({ run: _resume(function() {
		count += 10;
	}, "__tests__/template.marko_0/run", $scope0_id) }) }) });
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/4": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
