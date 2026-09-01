// template.marko
const multiply = (multiplier, n) => resolveAfter(multiplier * n);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>increment</button>${_el_resume($scope0_id, "#button/0")}<p>1 * ${_text_resume($scope0_id, "#text/1", n, 2)} = `);
	_await($scope0_id, "#text/2", multiply(1, n), (result) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "#text/0", result));
		_scope($scope1_id, {}, "__tests__/template.marko", "6:16");
	});
	_html(`</p><p>2 * ${_text_resume($scope0_id, "#text/3", n, 2)} = `);
	_await($scope0_id, "#text/4", multiply(2, n), (result) => {
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "#text/0", result));
		_scope($scope2_id, {}, "__tests__/template.marko", "7:16");
	});
	_html(`</p><p>3 * ${_text_resume($scope0_id, "#text/5", n, 2)} = `);
	_await($scope0_id, "#text/6", multiply(3, n), (result) => {
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "#text/0", result));
		_scope($scope3_id, {}, "__tests__/template.marko", "8:16");
	});
	_html(`</p><p>4 * ${_text_resume($scope0_id, "#text/7", n, 2)} = `);
	_await($scope0_id, "#text/8", multiply(4, n), (result) => {
		const $scope4_id = _scope_id();
		_html(_text_resume($scope4_id, "#text/0", result));
		_scope($scope4_id, {}, "__tests__/template.marko", "9:16");
	});
	_html(`</p><p>5 * ${_text_resume($scope0_id, "#text/9", n, 2)} = `);
	_await($scope0_id, "#text/10", multiply(5, n), (result) => {
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "#text/0", result));
		_scope($scope5_id, {}, "__tests__/template.marko", "10:16");
	});
	_html("</p>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "4:6" });
	_resume_branch($scope0_id);
}, 1);
