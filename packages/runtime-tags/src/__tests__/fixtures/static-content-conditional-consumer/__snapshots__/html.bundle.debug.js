// tags/consumer.marko
var consumer_default = _template("__tests__/tags/consumer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
			writeScope($scope1_id, { _: _serialize_if($scope0_reason, 0) && _scope_with_id($scope0_id) }, "__tests__/tags/consumer.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/consumer.marko_0_show");
	writeScope($scope0_id, {
		input_content: input.content,
		show
	}, "__tests__/tags/consumer.marko", 0, {
		input_content: ["input.content"],
		show: "1:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	consumer_default({ content: _content_resume("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<div>static content</div>");
	}, $scope0_id) });
}, 1);
