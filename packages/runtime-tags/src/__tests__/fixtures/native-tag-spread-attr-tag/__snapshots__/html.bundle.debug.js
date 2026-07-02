// tags/my-box.marko
var my_box_default = _template("__tests__/tags/my-box.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<section");
	_attrs_content(input.head, "#section/0", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "#section/0")}<footer`);
	_attrs_content(input.foot, "#footer/1", $scope0_id, "footer");
	_html(`</footer>${_el_resume($scope0_id, "#footer/1")}`);
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input_foot");
	_script($scope0_id, "__tests__/tags/my-box.marko_0_input_head");
	writeScope($scope0_id, {}, "__tests__/tags/my-box.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	my_box_default({
		head: attrTag({
			id: "h",
			content: _content("__tests__/template.marko_1_content", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				let n = 0;
				_html(`<button>${_escape(n)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
				_script($scope1_id, "__tests__/template.marko_1");
				writeScope($scope1_id, { n }, "__tests__/template.marko", "2:4", { n: "3:10" });
				_resume_branch($scope1_id);
			})
		}),
		foot: attrTag({ class: "f" })
	});
}, 1);
