// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let title = "a";
	_html("<div");
	_attrs_content({
		title,
		...input.attrs
	}, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<button>update</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.attrs,
		f: _serialize_if($scope0_reason, 0) && title
	});
}, 1);
