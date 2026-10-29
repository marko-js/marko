// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let x = input.v;
	_html(`<button>set</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/1", Promise.resolve(x), (r) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", r)} ${_text_resume($scope1_id, "#text/1", input.w, _write_guard($scope0_reason, 0) * 2)}</p>`);
		_subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, {}, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_w#0:5/subscribe");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:input_w/7": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0);
}, 1);
