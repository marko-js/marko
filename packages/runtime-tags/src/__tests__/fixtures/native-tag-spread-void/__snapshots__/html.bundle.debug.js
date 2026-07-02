// tags/my-img.marko
var my_img_default = _template("__tests__/tags/my-img.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<img${_attrs(input, "#img/0", $scope0_id, "img")}>${_el_resume($scope0_id, "#img/0")}`);
	_script($scope0_id, "__tests__/tags/my-img.marko_0_input");
	writeScope($scope0_id, {}, "__tests__/tags/my-img.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cls = "a";
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	my_img_default({
		class: cls,
		src: "x.png",
		alt: "pic"
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		cls,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { cls: "1:6" });
	_resume_branch($scope0_id);
}, 1);
