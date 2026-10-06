// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Count = { content: _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		return { n: 1 };
	}, $scope0_id) };
	let on = true;
	let a = Count.content({});
	const $onCount_scope = _peek_scope_id();
	let b = _dynamic_tag($scope0_id, "c", Count, {});
	_var($scope0_id, "d", $onCount_scope, "a1");
	_html(`<p>${_escape(String(a && a.n))} ${_text_resume($scope0_id, "f", String(b && b.n), 2)}</p><button></button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		h: Count,
		i: on
	});
}, 1);
