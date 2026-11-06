// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const base = { hi: _resume(function() {
		return "hi";
	}, "__tests__/template.marko_0/base") };
	const o = {
		__proto__: base,
		hi() {
			return super.hi() + "!";
		}
	};
	let n = 1;
	_html(`<button id=a>a</button>${_el_resume($scope0_id, "#button/0")}<button id=b>b ${_text_resume($scope0_id, "#text/2", n, 2)}</button>${_el_resume($scope0_id, "#button/1")}<div>${_escape(o.hi())}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_o_hi#6");
	_scope($scope0_id, {
		o_hi: o.hi,
		n
	}, "__tests__/template.marko", 0, {
		o_hi: ["o.hi", "2:8"],
		n: "3:6"
	});
}, 1);
