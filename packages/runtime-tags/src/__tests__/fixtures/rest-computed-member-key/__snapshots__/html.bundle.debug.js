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
	const key = input.key;
	_html(`<div>${_escape(a)}-${_text_mark($scope0_id, "#text/1", o[rest] ?? "-", 2)}-${_text_mark($scope0_id, "#text/2", o[rest.b] ?? "-", 2)}-${_text_mark($scope0_id, "#text/3", o[key.name] ?? "-", 2)}</div><button class=mutate>mutate</button>${_el_mark($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		o,
		rest,
		$pattern_b: rest.b,
		key,
		key_name: key?.name
	}, "__tests__/template.marko", 0, {
		o: "1:6",
		rest: "2:16",
		$pattern_b: ["$pattern.b", "2:8"],
		key: "3:8",
		key_name: ["key.name", "3:8"]
	});
}, 1);
