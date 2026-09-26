// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	_html("<div><span>S</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(`<!--${_escape_comment(x) || " "}-->${_el_resume($scope1_id, "a")}`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a");
	_html(`</div><button>drop</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: list });
}, 1);
