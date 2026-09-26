// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	_html("<div><span>S</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(`<!--${_escape_comment(x) || " "}-->${_el_resume($scope1_id, "#comment/0")}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:21");
	}, 0, $scope0_id, "#text/0");
	_html(`</div><button>drop</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { list }, "__tests__/template.marko", 0, { list: "1:6" });
}, 1);
