// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $ul = _el($scope0_id, "__tests__/template.marko_0_#ul");
	let items = [0, 1];
	_html(`<button></button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(item)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "7:4");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
