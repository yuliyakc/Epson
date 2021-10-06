import notificationsData from "../../../data/notifications";

class SignUpElements{
    static idInput_FirstName = "input[id='register.firstName']";
    static idInput_LastName = "input[id='register.lastName']";
    static idInput_Email = "input[id='register.email']";
    static idInput_ConfirmEmail = "input[id='register.confirmEmail']";
    static iddInput_Password = "input[id='password']";
    static idInput_ConfirmPassword = "input[id='register.checkPwd']";
    static idRadio_PersonalType = "input[id='PERSONAL']";
    static idRadio_BusinessType = "input[id='BUSINESS']";
    static idCheckbox_MarketingConsent = "input[name=marketingConsent]";
    static idCheckbox_UnderageNo = "input[name=notUnderage]";
    static idCheckbox_TermsCheck = "input[name=termsCheck]";
    static cssButton_Submit = "#epsonRegisterForm > div.form-actions.clearfix > button";
    static xpathError_IncorrectRegisterData = "//div[@class='container-fluid'][contains(.,'"+ notificationsData.errors.registration +"')]";
    static xpathError_IncorrectLoginData = "//div[@class='container-fluid'][contains(.,'"+ notificationsData.errors.login +"')]"
    static cssText_EmailError = "span[id='email.errors']";

}
export default SignUpElements