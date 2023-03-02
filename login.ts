class LoginPage {
  get loginBtn(): string {
    return "//span[text()='Log In']//parent::button";
  }
  get loginAsAParent(): string {
    return "//span[text()='As a Parent']";
  }
  get loginAsAChildCareProvider(): string {
    return "//a[text()='As a ChildCare Provider']";
  }
  get loginRole(): string {
    return "//parent::div[@class='ant-dropdown ant-dropdown-placement-bottomRight ']";
  }
  //for Parent
  get loginContainer(): string {
    return "//div[@class='ant-modal-body']";
  }
  get closeIcon(): string {
    return "//button[@class='ant-modal-close']";
  }
  get loginTitle(): string {
    return "//div[text()='Login']";
  }
  get emailTitle(): string {
    return "//label[text()='Email']";
  }
  get emailInput(): string {
    return "//input[@id='email' and @type='text']";
  }

  get passFBInput(): string {
    return "//input[@id='pass']";
  }

  get loginFBBtn(): string {
    return "//input[@name='login']//parent::label";
  }

  get emailIsRequired(): string {
    return "//div[text()='Email is required']";
  }
  get passwordTitle(): string {
    return "//label[text()='Password']";
  }
  get passwordInput(): string {
    return "//input[@id='password' and @type='password']";
  }
  get passwordIsRequired(): string {
    return "//div[text()='Password is required']";
  }
  get showPassWordIcon(): string {
    return "//*[local-name()='svg' and @data-icon='eye-invisible']";
  }
  get rememberMeTitle(): string {
    return "//span[text()='Remember me']";
  }
  get rememberMeCheckbox(): string {
    return "//input[@class='ant-checkbox-input']";
  }

  //Forgot password
  get forgotPassWordPage(): string {
    return "//div[@class='auth-service-layout__box']";
  }
  get forgotPasswordTitle(): string {
    return "//div[text()='Forgot password']";
  }
  get forgotPasswordEmail(): string {
    return "//input[@id='email']//parent::div";
  }
  get forgotPasswordContent(): string {
    return "//div[@class='auth-service-layout__desc']";
  }
  get getCodeInput(): string {
    return "//span[text()='Get Code']";
  }
  get submitBtn(): string {
    return "//span[text()='Login']//parent::button";
  }
  get loginWithFaceBook(): string {
    return "//span[text()='Continue with Facebook']//parent::button";
  }
  get loginWithGoogle(): string {
    return "//span[text()='Continue with Google']//parent::button";
  }
  get doNotHaveAnyAccount(): string {
    return "//div[text()='Don’t have an account? ']";
  }
  get signUpNow(): string {
    return "//b[text()='Sign up now']";
  }
  get signUpNowModal(): string {
    return "//div[@class='ant-modal-body']";
  }
  get userProfile(): string {
    return "//*[local-name()='svg' and @data-icon='user']//parent::span";
  }
  //for Provider
  get emailCRMInput(): string {
    return "//input[@id='email' and @type='text']";
  }
  get passwordCRMInput(): string {
    return "//input[@id='password' and @type='password']";
  }
  get loginCRMBtn(): string {
    return "//span[text()='Log in']";
  }

  get errInvalidEmailOrPasswordMessage(): string {
    return "//div[text()='Email or password is invalid']";
  }
}

export default new LoginPage();
