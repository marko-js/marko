// template.marko
const multiply = (multiplier, n) => resolveAfter(multiplier * n);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 2;
	_html(`<button>increment</button>${_el_resume($scope0_id, "a")}<p>1 * ${_text_resume($scope0_id, "b", n, 2)} = `);
	_await($scope0_id, "c", multiply(1, n), (result) => {
		const $scope1_id = _scope_id();
		_html(_text_resume($scope1_id, "a", result));
		_scope($scope1_id, {});
	});
	_html(`</p><p>2 * ${_text_resume($scope0_id, "d", n, 2)} = `);
	_await($scope0_id, "e", multiply(2, n), (result) => {
		const $scope2_id = _scope_id();
		_html(_text_resume($scope2_id, "a", result));
		_scope($scope2_id, {});
	});
	_html(`</p><p>3 * ${_text_resume($scope0_id, "f", n, 2)} = `);
	_await($scope0_id, "g", multiply(3, n), (result) => {
		const $scope3_id = _scope_id();
		_html(_text_resume($scope3_id, "a", result));
		_scope($scope3_id, {});
	});
	_html(`</p><p>4 * ${_text_resume($scope0_id, "h", n, 2)} = `);
	_await($scope0_id, "i", multiply(4, n), (result) => {
		const $scope4_id = _scope_id();
		_html(_text_resume($scope4_id, "a", result));
		_scope($scope4_id, {});
	});
	_html(`</p><p>5 * ${_text_resume($scope0_id, "j", n, 2)} = `);
	_await($scope0_id, "k", multiply(5, n), (result) => {
		const $scope5_id = _scope_id();
		_html(_text_resume($scope5_id, "a", result));
		_scope($scope5_id, {});
	});
	_html("</p>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { l: n });
	_resume_branch($scope0_id);
}, 1);
