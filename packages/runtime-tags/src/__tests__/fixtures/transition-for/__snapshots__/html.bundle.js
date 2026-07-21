// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of([...Array(count).keys()], (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(i)}${_el_resume($scope2_id, "a")}</li>`);
		writeScope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_try($scope0_id, "c", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(count), (value) => {
			const $scope4_id = _scope_id();
			_html(`resolved: <!>${_escape(value)}${_el_resume($scope4_id, "a")}`);
			writeScope($scope4_id, {});
		});
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: count,
		e: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
