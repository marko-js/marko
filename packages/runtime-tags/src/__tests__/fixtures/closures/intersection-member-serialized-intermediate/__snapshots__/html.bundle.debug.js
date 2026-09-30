// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	let flag = false;
	const show = list.length > 1 || flag;
	_html(`<p>${_text_resume($scope0_id, "#text/0", show ? list.join() : "none")}</p><button class=same-length></button>${_el_resume($scope0_id, "#button/1")}<button class=toggle></button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		list_length: list?.length,
		flag,
		show
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		list_length: ["list.length", "1:6"],
		flag: "2:6",
		show: "3:8"
	});
}, 1);
