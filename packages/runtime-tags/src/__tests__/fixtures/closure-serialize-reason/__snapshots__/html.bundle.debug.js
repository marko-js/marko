// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	const getMessage = _resume(() => input.message, "__tests__/template.marko_0/getMessage", $scope0_id);
	_html("<div>");
	_if(() => {
		if (x) {
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(getMessage())}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span>`);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_message: input.message,
		x,
		getMessage
	}, "__tests__/template.marko", 0, {
		input_message: ["input.message"],
		x: "1:6",
		getMessage: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
