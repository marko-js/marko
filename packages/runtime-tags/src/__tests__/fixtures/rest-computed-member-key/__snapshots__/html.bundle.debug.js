// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = {};
	const { a, ...rest } = {
		a: 1,
		b: 2,
		c: 3
	};
	_html(`<div>${_escape(a)}-${_text_resume($scope0_id, "#text/1", o[rest] ?? "-", 2)}-${_text_resume($scope0_id, "#text/2", o[rest.b] ?? "-", 2)}</div><button class=mutate>mutate</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_rest#7_$pattern_b#9");
	_scope($scope0_id, {
		o,
		rest,
		$pattern_b: rest.b
	}, "__tests__/template.marko", 0, {
		o: "1:6",
		rest: "2:16",
		$pattern_b: ["$pattern.b", "2:8"]
	});
}, 1);
