// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "#div/0", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input");
	writeScope($scope0_id, {}, "__tests__/tags/my-box.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_box_default({
		class: "x",
		content: _content("__tests__/template.marko_1_content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button type=button class=inc>increment</button>${_el_resume($scope1_id, "#button/0")}<span class=count>${_escape(count)}${_el_resume($scope1_id, "#text/1")}</span>`);
			_script($scope1_id, "__tests__/template.marko_1_count");
			writeScope($scope1_id, { count }, "__tests__/template.marko", "1:1", { count: "2:8" });
			_resume_branch($scope1_id);
		})
	});
}, 1);
