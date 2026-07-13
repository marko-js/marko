// tags/my-box.marko
var my_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<section");
	_attrs_content(input.head, "a", $scope0_id, "section");
	_html(`</section>${_el_resume($scope0_id, "a")}<footer`);
	_attrs_content(input.foot, "b", $scope0_id, "footer");
	_html(`</footer>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_box_default({
		head: attrTag({
			id: "h",
			content: _content("a1", () => {
				_scope_reason();
				const $scope1_id = _scope_id();
				let n = 0;
				_html(`<button>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
				_script($scope1_id, "a0");
				writeScope($scope1_id, { c: n });
				_resume_branch($scope1_id);
			})
		}),
		foot: attrTag({ class: "f" })
	});
}, 1);
