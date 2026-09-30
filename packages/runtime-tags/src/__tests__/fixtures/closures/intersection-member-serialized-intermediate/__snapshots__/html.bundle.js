// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	let flag = false;
	const show = list.length > 1 || flag;
	_html(`<p>${_text_resume($scope0_id, "a", show ? list.join() : "none")}</p><button class=same-length></button>${_el_resume($scope0_id, "b")}<button class=toggle></button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: list,
		e: list?.length,
		f: flag,
		h: show
	});
}, 1);
