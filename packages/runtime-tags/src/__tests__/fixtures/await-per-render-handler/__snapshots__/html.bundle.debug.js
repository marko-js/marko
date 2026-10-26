// template.marko
let n = 0;
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_name = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_name__closures = new Set();
	const $input_label__closures = new Set();
	let shown = "";
	_await($scope0_id, "#text/0", Promise.resolve("u" + ++n), (uid) => {
		const $scope1_id = _scope_id();
		_html(`<label${_attr("for", `${uid}-${input.name}`)}>${_text_resume($scope1_id, "#text/1", input.label, _write_guard($scope0_reason, 1))}</label>${_el_resume($scope1_id, "#label/0", _write_guard($scope0_reason, 0))}<button>show</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_name && $input_name__closures, _scope($scope1_id, {
			uid,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { uid: "3:8" }), "__tests__/template.marko_1_input_name#0:4/subscribe"), "__tests__/template.marko_1_input_label#0:5/subscribe");
	});
	_html(`<output>${_text_resume($scope0_id, "#text/1", shown)}</output>`);
	_scope($scope0_id, {
		"ClosureScopes:input_name/7": $wi__input_name && $input_name__closures,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0);
}, 1);
