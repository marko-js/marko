// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const user = {
		firstName: "George",
		middleName: "R.R.",
		lastName: "Martin"
	};
	const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
	_html(`<p>${_escape(fullName)}</p>`);
}, 1);
