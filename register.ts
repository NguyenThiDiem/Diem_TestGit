class LoginPage {
  get loginBtn(): string {
    return "//span[text()='Log In']//parent::button";
  }
  get logout(): string {
    return "//span[text()='Log In']//parent::button";
  }
  get loginAsAParent(): string {
    return "//span[text()='As a Parent']";
  }
  get loginAsAChildCareProvider(): string {
    return "//a[text()='As a ChildCare Provider']";
  }
  get loginRole123jdgds(): string {
    return "//a[text()='As a ChildCare Provider']";
  }

  //Demo
  get register(): string {
    return "12345666667";
  }
}
export default new LoginPage();
