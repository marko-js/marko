// template.marko
const stalePayloads = "<script>M._.w=(w=>()=>{try{w()}catch(e){console.log(\"resume threw: \"+e.message)}})(M._.w);M._.r.push(_=>{console.log(\"stale payload applied\");return 0},_=>{throw new Error(\"stale payload\")})<\/script>";
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div id=first>`);
	_try($scope0_id, "c", _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("a", 1), (a) => {
			const $scope3_id = _scope_id();
			_html(`${_escape(a)}${_unescaped(stalePayloads)}`);
			_script($scope3_id, "a0");
			writeScope($scope3_id, { d: a });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_html("</div><div id=second>");
	_try($scope0_id, "d", _content_resume("a5", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "a", resolveAfter("b", 2), (b) => {
			const $scope6_id = _scope_id();
			_html(_escape(b));
			_script($scope6_id, "a3");
			writeScope($scope6_id, { c: b });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a4", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_html("</div>");
	_script($scope0_id, "a6");
	writeScope($scope0_id, { e: n });
	_resume_branch($scope0_id);
}, 1);
