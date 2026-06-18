// tags/my-img.marko
var my_img_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<img${_attrs(input, "a", $scope0_id, "img")}>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cls = "a";
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	my_img_default({
		class: cls,
		src: "x.png",
		alt: "pic"
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: cls,
		b: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
