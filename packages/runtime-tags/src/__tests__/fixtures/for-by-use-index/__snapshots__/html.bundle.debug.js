// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let messages = ["hello"];
	let last = undefined;
	_html("<div>");
	_for_of(messages, (message, index) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_unescaped(message)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_index");
		writeScope($scope1_id, {
			index,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:4", { index: "4:17" });
	}, (f) => f, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_if(() => {
		if (last !== undefined) {
			const $scope2_id = _scope_id();
			_html(`<div>${_escape(last)}${_el_resume($scope2_id, "#text/0")}</div>`);
			writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "15:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	writeScope($scope0_id, {
		messages,
		last
	}, "__tests__/template.marko", 0, {
		messages: "1:6",
		last: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
