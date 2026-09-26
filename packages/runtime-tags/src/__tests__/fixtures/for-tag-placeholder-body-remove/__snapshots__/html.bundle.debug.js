// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = ["a", "b"];
	const empty = "";
	_html("<div><span>S</span>");
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(_escape(empty));
		_scope($scope1_id, {}, "__tests__/template.marko", "3:21");
	}, 0, $scope0_id, "#text/0");
	_html("</div><div>hello");
	_for_of(list, (x) => {
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", x));
		_scope($scope2_id, {}, "__tests__/template.marko", "4:12");
	}, 0, $scope0_id, "#text/1");
	_html(`</div><button>drop</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		empty
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		empty: "2:8"
	});
}, 1);
