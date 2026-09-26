// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	const empty = "";
	_html("<div><span>S</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(_escape(empty));
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a");
	_html("</div><div>hello");
	_for_of(list, (x) => {
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", x));
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b");
	_html(`</div><button>drop</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: list,
		e: empty
	});
}, 1);
