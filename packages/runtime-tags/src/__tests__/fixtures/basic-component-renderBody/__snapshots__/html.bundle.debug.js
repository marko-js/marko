// tags/my-button.marko
var my_button_default = _template("__tests__/tags/my-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { onClick, content } = input;
	_html("<button>");
	_dynamic_tag($scope0_id, "#text/1", content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/my-button.marko_0_onClick");
	writeScope($scope0_id, { onClick }, "__tests__/tags/my-button.marko", 0, { onClick: "1:10" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	my_button_default({
		onClick: _resume(function() {
			clickCount++;
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`${_escape(clickCount)}${_el_resume($scope1_id, "#text/0")}`);
			_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
			_resume_branch($scope1_id);
		})
	});
	writeScope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "1:6" });
	_resume_branch($scope0_id);
}, 1);
