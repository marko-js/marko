// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3
	];
	_html(`<button class=bad>bad</button>${_el_resume($scope0_id, "#button/0")}<button class=next>next</button>${_el_resume($scope0_id, "#button/1")}<ul><li>head</li>`);
	_for_of(items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(i)}</li>`);
		if (i === 4) {
			const $scope2_id = _scope_id();
			_html(`<em>${_escape((() => {
				throw new Error("row setup");
			})())}</em>`);
		}
		_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
	}, (i) => i, $scope0_id, "#text/2");
	_html("</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
