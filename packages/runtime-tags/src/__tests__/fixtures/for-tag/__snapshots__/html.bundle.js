// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
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
		_scope_id();
		_html(`<div>${_escape(i)}: ${_escape(val)}</div><div></div><div></div>`);
	});
	forIn(obj, (key, val) => {
		_scope_id();
		_html(`<div>${_escape(key)}: ${_escape(val)}</div><div></div><div></div>`);
	});
	_html("<div>to 3: ");
	forTo(3, 0, 1, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>until 3: ");
	forUntil(3, 0, 1, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 to 3: ");
	forTo(3, 1, 1, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 until 3: ");
	forUntil(3, 1, 1, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 to 5 step 2: ");
	forTo(5, 1, 2, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 1 until 5 step 2: ");
	forUntil(5, 1, 2, (i) => {
		_scope_id();
		_html(_escape(i));
	});
	_html("</div><div>from 4 to 2 step -0.6: ");
	forTo(2, 4, -.6, (i) => {
		_scope_id();
		_html(`${_escape(i)} `);
	});
	_html("</div><div>from 4 until 2 step -0.6: ");
	forUntil(2, 4, -.6, (i) => {
		_scope_id();
		_html(`${_escape(i)} `);
	});
	_html("</div>");
}, 1);
