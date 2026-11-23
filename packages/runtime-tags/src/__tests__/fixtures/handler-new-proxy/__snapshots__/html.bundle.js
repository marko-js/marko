// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const increment = new Proxy(() => count++, {});
	const log = new Proxy((next) => console.log("const", next), {});
	_html(`<button id=direct>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}<button id=const>${_text_mark($scope0_id, "d", count)}</button>${_el_mark($scope0_id, "c")}<button id=assign>${_text_mark($scope0_id, "f", 1)} ${_text_mark($scope0_id, "g", 1, 2)}</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: count,
		i: increment,
		l: new Proxy((next) => console.log("direct", next), {}),
		n: log || void 0
	});
}, 1);
