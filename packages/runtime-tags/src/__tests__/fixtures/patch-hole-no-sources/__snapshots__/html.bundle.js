// template.marko
let renders = 0;
const names = ["x", "y"];
_shells({
	a: "a;E%c%lD l%b%;<main><p><!> <!></p><h1> </h1><!><!></main>",
	a1: "a1;D%c%l%;<span><!> <!></span><!><!>",
	a0: "a0;D ;<i> </i>",
	a2: "a2;D ;<b> </b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const label = names.join("+");
	_html(`<main><p>${_text_resume($scope0_id, "a", ++renders, 1, 0, 0)} ${_text_resume($scope0_id, "b", label, 2, 0, 0)}</p><h1>${_text_resume($scope0_id, "c", input.title, 1, $scope0_reason, 0)}</h1>`);
	_for_of(names, (name) => {
		const $scope2_id = _scope_id();
		_html(`<i>${_text_resume($scope2_id, "a", name, 1, 0, 0)}</i>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "d", 1, 1, 1, 0, 0, "a0", 0, 0);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "a", ++renders, 1, 0, 0)} ${_text_resume($scope1_id, "b", label, 2, 0, 0)}</span>`);
			_for_of(names, (name) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "a", name, 1, 0, 0)}</b>`);
				_scope($scope3_id, {});
			}, 0, $scope1_id, "c", 1, 1, 1, 0, 0, "a2", 0, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "e", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_html("</main>");
	_scope($scope0_id, { j: _unfilled_if($scope0_reason, 1) && label });
}, 1);
