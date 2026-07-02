// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{
		id: "a",
		text: "first"
	}, {
		id: null,
		text: "second"
	}];
	_html("<ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item.text)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>refresh</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
