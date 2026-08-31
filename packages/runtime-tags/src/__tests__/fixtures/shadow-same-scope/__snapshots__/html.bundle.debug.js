// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let $count = 0;
	let $count2 = 0;
	let $count3 = 0;
	_html(`<div><button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<div><button>${_text_resume($scope0_id, "#text/3", $count)}</button>${_el_resume($scope0_id, "#button/2")}<div><button>${_text_resume($scope0_id, "#text/5", $count2)}</button>${_el_resume($scope0_id, "#button/4")}</div></div></div><div><button>${_text_resume($scope0_id, "#text/7", $count3)}</button>${_el_resume($scope0_id, "#button/6")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		$count,
		$count2,
		$count3
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		$count: "5:10",
		$count2: "8:12",
		$count3: "14:8"
	});
	_resume_branch($scope0_id);
}, 1);
