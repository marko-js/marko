// template.marko
function withCount(attrs, count) {
	return {
		...attrs,
		"data-count": count
	};
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<div");
	_attrs_content(input.attrs, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<div`);
	_attrs_content(withCount(input.attrs, count), "b", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "b")}<button>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: input.attrs,
		g: count
	});
}, 1);
