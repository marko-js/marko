// template.marko
const stalePayloads = "<script>M._.w=(w=>()=>{try{w()}catch(e){console.log(\"resume threw: \"+e.message)}})(M._.w);" + "M._.r.push(_=>{console.log(\"stale payload applied\");return 0},_=>{throw new Error(\"stale payload\")})<" + "/script>";
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<div id=first>`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(`${_escape(a)}${_unescaped(stalePayloads)}`);
			_script($scope3_id, "__tests__/template.marko_3_a#3");
			writeScope($scope3_id, { a }, "__tests__/template.marko", "14:6", { a: "14:12" });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_html("</div><div id=second>");
	_try($scope0_id, "#text/3", _content_resume("__tests__/template.marko_4*content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "#text/0", resolveAfter("b", 2), (b) => {
			const $scope6_id = _scope_id();
			_html(_escape(b));
			_script($scope6_id, "__tests__/template.marko_6_b#2");
			writeScope($scope6_id, { b }, "__tests__/template.marko", "23:6", { b: "23:12" });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_5*content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_html("</div>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "9:6" });
	_resume_branch($scope0_id);
}, 1);
