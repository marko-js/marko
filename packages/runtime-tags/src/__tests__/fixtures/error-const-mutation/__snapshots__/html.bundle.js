// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const user = {
		firstName: "George",
		middleName: "R.R.",
		lastName: "Martin"
	};
	const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
	_html(`<p>${_escape(fullName)}</p>`);
}, 1);
