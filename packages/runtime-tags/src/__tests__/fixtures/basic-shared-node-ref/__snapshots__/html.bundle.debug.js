// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let list = [
		1,
		2,
		3
	];
	_html(`<ul${_attr("hidden", !open)}>`);
	_for_of(list, (x) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(x)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, function(x) {
		return x;
	}, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "#button/1")}<button id=reverse>Reverse</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0_list");
	_script($scope0_id, "__tests__/template.marko_0_open");
	writeScope($scope0_id, {
		open,
		list
	}, "__tests__/template.marko", 0, {
		open: "1:6",
		list: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
