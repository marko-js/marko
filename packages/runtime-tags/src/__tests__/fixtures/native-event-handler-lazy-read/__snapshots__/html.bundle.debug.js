// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let message = "hello";
	let log = "";
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}<button>append</button>${_el_resume($scope0_id, "#button/1")}<div class=message>${_text_resume($scope0_id, "#text/2", message)}</div><div class=log>${_text_resume($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		message,
		log
	}, "__tests__/template.marko", 0, {
		message: "2:6",
		log: "3:6"
	});
}, 1);
