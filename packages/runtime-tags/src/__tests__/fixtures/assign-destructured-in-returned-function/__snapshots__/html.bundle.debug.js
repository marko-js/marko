// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = 0;
	let b = 0;
	let c = 0;
	let d = 0;
	let show = false;
	_html(`<button class=show>show</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			const set = (() => () => {
				({a = 1} = {});
				[b, c] = [2, 3];
				({x: [d]} = { x: [4] });
			})();
			_html(`<button class=set>set</button>${_el_mark($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_set#1");
			_scope($scope1_id, { set }, "__tests__/template.marko", "7:2", { set: "8:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<div>${_text_mark($scope0_id, "#text/2", a)} ${_text_mark($scope0_id, "#text/3", b, 2)} ${_text_mark($scope0_id, "#text/4", c, 2)} ${_text_mark($scope0_id, "#text/5", d, 2)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
