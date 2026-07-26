// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $text__closures = new Set();
	let open = false;
	let text = "first";
	const detailsTag = "details";
	const textareaTag = "textarea";
	_dynamic_tag($scope0_id, "#text/0", detailsTag, {
		open,
		openChange: _resume(function(next) {
			open = next;
		}, "__tests__/template.marko_0/openChange", $scope0_id)
	}, _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<summary>toggle</summary>");
		_dynamic_tag($scope1_id, "#text/0", textareaTag, {
			value: text,
			valueChange: _resume(function(next) {
				text = next;
			}, "__tests__/template.marko_1/valueChange", $scope1_id)
		});
		_subscribe($text__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4"));
		_resume_branch($scope1_id);
	}, $scope0_id));
	_html(`<output>${open ? "open" : "closed"}${_el_resume($scope0_id, "#text/1")}/<!>${_escape(text)}${_el_resume($scope0_id, "#text/2")}</output>`);
	writeScope($scope0_id, {
		text,
		detailsTag,
		textareaTag,
		"ClosureScopes:text": $text__closures
	}, "__tests__/template.marko", 0, {
		text: "2:6",
		detailsTag: "3:8",
		textareaTag: "4:8"
	});
	_resume_branch($scope0_id);
}, 1);
