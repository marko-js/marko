// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let v = "a";
	const rest = {
		value: "z",
		placeholder: "p"
	};
	_html(`<button>pick</button>${_el_resume($scope0_id, "#button/0")}<input${_attrs({
		type: "radio",
		checkedValue: v,
		...rest
	}, "#input/1", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/1")}<span>${_text_resume($scope0_id, "#text/2", v)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0_v#3_rest#4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		v,
		rest
	}, "__tests__/template.marko", 0, {
		v: "1:6",
		rest: "2:8",
		"ControlledHandler:#input/1": ["...rest", "4:39"],
		"EventAttributes:#input/1": ["...rest", "4:39"]
	});
}, 1);
