// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let hide = true;
	let text = "";
	const id = _id();
	_html(`<div${_attr("id", id)}>`);
	_if(() => {
		if (!hide && text.length) {
			const $scope1_id = _scope_id();
			_html(`<div>${_escape(text)}${_el_resume($scope1_id, "#text/0")}</div>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_script($scope0_id, "__tests__/tags/child.marko_0_id");
	writeScope($scope0_id, {
		hide,
		text,
		text_length: text?.length,
		id
	}, "__tests__/tags/child.marko", 0, {
		hide: "1:6",
		text: "2:6",
		text_length: ["text.length", "2:6"],
		id: "3:5"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	child_default({});
	child_default({});
}, 1);
