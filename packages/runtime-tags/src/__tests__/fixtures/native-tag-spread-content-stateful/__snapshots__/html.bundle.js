// tags/my-box.marko
var my_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	my_box_default({
		class: "x",
		content: _content("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<button type=button class=inc>increment</button>${_el_resume($scope1_id, "a")}<span class=count>${_escape(count)}${_el_resume($scope1_id, "b")}</span>`);
			_script($scope1_id, "a0");
			writeScope($scope1_id, { c: count });
			_resume_branch($scope1_id);
		})
	});
}, 1);
