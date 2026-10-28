// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let uid = input.id;
	let n = 0;
	_html(`<p${_attr("title", `${uid}-${input.name}`)}></p>${_el_resume($scope0_id, "#p/0", _write_guard($scope0_reason, 0))}<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		uid: _write_if($scope0_reason, 0) && uid,
		n
	}, "__tests__/template.marko", 0, {
		uid: "1:6",
		n: "3:6"
	});
}, 1);
