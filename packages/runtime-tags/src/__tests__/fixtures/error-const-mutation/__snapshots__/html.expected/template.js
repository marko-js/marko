import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  const user = {
    firstName: "George",
    middleName: "R.R.",
    lastName: "Martin"
  };
  const fullName = user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`;
  _._html(`<p>${_._escape(fullName)}</p>`);
});