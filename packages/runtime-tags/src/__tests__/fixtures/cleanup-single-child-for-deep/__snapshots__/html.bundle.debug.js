// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, write } = input;
	_html(`<div>${_escape(name)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</div>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_name_write");
	writeScope($scope0_id, {
		name,
		write
	}, "__tests__/tags/child.marko", 0, {
		name: "1:9",
		write: "1:15"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		1,
		2,
		3
	];
	const write = _resume(function(msg) {
		((el) => el())(_el_read_error).innerHTML += "\n" + msg;
	}, "__tests__/template.marko_0/write", $scope0_id);
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/0")}<div></div>${_el_resume($scope0_id, "#div/1")}`);
	_for_of(items, (outerItem) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		child_default({
			write,
			name: `${outerItem}`
		});
		_for_of(items, (middleItem) => {
			const $scope2_id = _scope_id();
			_html("<div>");
			const $childScope2 = _peek_scope_id();
			_set_serialize_reason(1);
			child_default({
				write,
				name: `${outerItem}.${middleItem}`
			});
			_html("</div>");
			writeScope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "10:6");
		}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
		_html("</div>");
		writeScope($scope1_id, {
			outerItem,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "7:2", { outerItem: "7:6" });
	}, 0, $scope0_id, "#text/2", 1, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0_items");
	writeScope($scope0_id, {
		items,
		write
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		write: "5:8"
	});
	_resume_branch($scope0_id);
}, 1);
