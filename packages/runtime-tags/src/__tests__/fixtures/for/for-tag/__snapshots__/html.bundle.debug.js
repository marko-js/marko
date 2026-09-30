// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const arr = [
		1,
		2,
		3
	];
	const obj = {
		a: 1,
		b: 1,
		c: 1
	};
	forOf(arr, (val, i) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_escape(i)}: ${_escape(val)}</div><div></div><div></div>`);
	});
	forIn(obj, (key, val) => {
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(key)}: ${_escape(val)}</div><div></div><div></div>`);
	});
	_html("<div>to 3: ");
	forTo(3, 0, 1, (i) => {
		const $scope3_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>until 3: ");
	forUntil(3, 0, 1, (i) => {
		const $scope4_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 to 3: ");
	forTo(3, 1, 1, (i) => {
		const $scope5_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 until 3: ");
	forUntil(3, 1, 1, (i) => {
		const $scope6_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 to 5 step 2: ");
	forTo(5, 1, 2, (i) => {
		const $scope7_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 until 5 step 2: ");
	forUntil(5, 1, 2, (i) => {
		const $scope8_id = _scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 4 to 2 step -0.6: ");
	forTo(2, 4, -.6, (i) => {
		const $scope9_id = _scope_id();
		_html(`${_escape(i)} `);
	});
	_html("</div><div>from 4 until 2 step -0.6: ");
	forUntil(2, 4, -.6, (i) => {
		const $scope10_id = _scope_id();
		_html(`${_escape(i)} `);
	});
	_html("</div>");
}, 1);
