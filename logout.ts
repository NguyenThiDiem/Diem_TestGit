import Page from "../openPage/page";

class LogoutPage extends Page {
  get logoutProvider(): string {
    return "//span[@class='userInfo']//parent::div";
  }
  get logoutProviderBtn(): string {
    return "//span[text()='Logout']//parent::li";
  }

  get logoutParent(): string {
    return "//div[@class='header__user-info']";
  }

  get logoutParentBtn(): string {
    return "//span[text()='Logout']";
  }
  get applications(): string {
    return "//a[text()='Applications']//parent::span";
  }
  
}

export default new LogoutPage();
