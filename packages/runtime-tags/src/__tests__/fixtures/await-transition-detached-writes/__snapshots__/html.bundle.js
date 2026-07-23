// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<b>outside <!>${_escape(n)}${_el_resume($scope0_id, "b")}</b><div>`);
	_await($scope0_id, "c", resolveAfter(`R${n}`), (result) => {
		const $scope1_id = _scope_id();
		_html(`<span>#<!>${_escape(n)}${_el_resume($scope1_id, "a")}</span><p>${_escape(result)}${_el_resume($scope1_id, "b")}</p>`);
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	});
	_html("</div>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: n,
		e: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
