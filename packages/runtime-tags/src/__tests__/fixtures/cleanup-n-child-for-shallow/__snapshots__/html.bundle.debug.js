// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_name = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "#text/0", input.name, $wg__input_name)}</div><span>${_text_resume($scope0_id, "#text/1", input.name, $wg__input_name)}</span><p>${_text_resume($scope0_id, "#text/2", input.name, $wg__input_name)}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_name#5_write#6", $wg__input_name);
	_scope($scope0_id, {
		name: input.name,
		write: input.write
	}, "__tests__/tags/child.marko", 0, {
		name: "1:9",
		write: "1:15"
	});
	$wg__input_name || _resume_branch($scope0_id);
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
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		child_default({
			write,
			name: item
		});
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "7:2");
	}, 0, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		items,
		write
	}, "__tests__/template.marko", 0, {
		items: "1:6",
		write: "5:8"
	});
}, 1);
