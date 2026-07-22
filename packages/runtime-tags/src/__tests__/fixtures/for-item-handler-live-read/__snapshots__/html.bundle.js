// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	let log = "";
	_html("<ul>");
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li><button class=show>${_escape(item.label)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}</li>`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, { e: item?.label });
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=relabel>relabel</button>${_el_resume($scope0_id, "b")}<p>${_escape(log)}${_el_resume($scope0_id, "c")}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: items });
	_resume_branch($scope0_id);
}, 1);
