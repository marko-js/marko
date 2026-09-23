// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let list = [1, 2];
	let open = true;
	const show = list.length > 1;
	_html(`<p>${_text_resume($scope0_id, "#text/0", show ? list.join() : "none")}</p>`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", list.length)}</span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button class=same-length></button>${_el_resume($scope0_id, "#button/2")}<button class=toggle></button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		list,
		list_length: list?.length,
		open,
		show
	}, "__tests__/template.marko", 0, {
		list: "1:6",
		list_length: ["list.length", "1:6"],
		open: "2:6",
		show: "3:8"
	});
}, 1);
