// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		_html(`<li><button class=show>${_escape(item.label)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { item_label: item?.label }, "__tests__/template.marko", "4:4", { item_label: ["item.label", "4:8"] });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=relabel>relabel</button>${_el_resume($scope0_id, "#button/1")}<p>${_escape(log)}${_el_resume($scope0_id, "#text/2")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1);
