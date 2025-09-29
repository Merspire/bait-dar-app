import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Phone,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const { toast } = useToast();
  const isRTL = language === 'ar';
  const getText = (ar: string, en: string) => language === 'ar' ? ar : en;
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginData.email || !loginData.password) {
      toast({
        title: getText('خطأ', 'Error'),
        description: getText('يرجى ملء جميع الحقول', 'Please fill all fields'),
        variant: "destructive"
      });
      return;
    }

    // Simulate login
    toast({
      title: getText('تم تسجيل الدخول بنجاح', 'Login Successful'),
      description: getText('مرحباً بك مرة أخرى', 'Welcome back'),
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerData.firstName || !registerData.lastName || !registerData.email || !registerData.password) {
      toast({
        title: getText('خطأ', 'Error'),
        description: getText('يرجى ملء جميع الحقول المطلوبة', 'Please fill all required fields'),
        variant: "destructive"
      });
      return;
    }

    if (registerData.password !== registerData.confirmPassword) {
      toast({
        title: getText('خطأ', 'Error'),
        description: getText('كلمة المرور غير متطابقة', 'Passwords do not match'),
        variant: "destructive"
      });
      return;
    }

    if (!registerData.agreeToTerms) {
      toast({
        title: getText('خطأ', 'Error'),
        description: getText('يجب الموافقة على الشروط والأحكام', 'You must agree to terms and conditions'),
        variant: "destructive"
      });
      return;
    }

    // Simulate registration
    toast({
      title: getText('تم إنشاء الحساب بنجاح', 'Account Created Successfully'),
      description: getText('يمكنك الآن تسجيل الدخول', 'You can now log in'),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-card flex items-center justify-center p-4" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
            <ArrowIcon className="h-4 w-4" />
            {getText('العودة للرئيسية', 'Back to Home')}
          </Link>
          <h1 className="text-3xl font-bold mb-2">
            {getText('مرحباً بك', 'Welcome')}
          </h1>
          <p className="text-muted-foreground">
            {getText('سجل دخولك أو أنشئ حساب جديد', 'Sign in or create a new account')}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="mt-4"
          >
            {language === 'ar' ? 'English' : 'العربية'}
          </Button>
        </div>

        <Card className="shadow-elegant">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{getText('تسجيل الدخول', 'Sign In')}</TabsTrigger>
                <TabsTrigger value="register">{getText('حساب جديد', 'Sign Up')}</TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login" className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">
                      {getText('البريد الإلكتروني', 'Email Address')}
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder={getText('أدخل بريدك الإلكتروني', 'Enter your email')}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">
                      {getText('كلمة المرور', 'Password')}
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder={getText('أدخل كلمة المرور', 'Enter your password')}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.rememberMe}
                        onCheckedChange={(checked) => setLoginData(prev => ({ ...prev, rememberMe: checked as boolean }))}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        {getText('تذكرني', 'Remember me')}
                      </Label>
                    </div>
                    <Button variant="link" size="sm" className="p-0 h-auto">
                      {getText('نسيت كلمة المرور؟', 'Forgot password?')}
                    </Button>
                  </div>

                  <Button type="submit" className="w-full">
                    {getText('تسجيل الدخول', 'Sign In')}
                  </Button>
                </form>

                <div className="relative">
                  <Separator />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                    {getText('أو', 'OR')}
                  </span>
                </div>

                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    {getText('الدخول بحساب جوجل', 'Sign in with Google')}
                  </Button>
                  <Button variant="outline" className="w-full">
                    {getText('الدخول بحساب فيسبوك', 'Sign in with Facebook')}
                  </Button>
                </div>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register" className="space-y-6">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        {getText('الاسم الأول', 'First Name')} *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          value={registerData.firstName}
                          onChange={(e) => setRegisterData(prev => ({ ...prev, firstName: e.target.value }))}
                          placeholder={getText('الاسم الأول', 'First Name')}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        {getText('الاسم الأخير', 'Last Name')} *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          value={registerData.lastName}
                          onChange={(e) => setRegisterData(prev => ({ ...prev, lastName: e.target.value }))}
                          placeholder={getText('الاسم الأخير', 'Last Name')}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">
                      {getText('البريد الإلكتروني', 'Email Address')} *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder={getText('أدخل بريدك الإلكتروني', 'Enter your email')}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      {getText('رقم الهاتف', 'Phone Number')}
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        value={registerData.phone}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder={getText('أدخل رقم هاتفك', 'Enter your phone number')}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">
                      {getText('كلمة المرور', 'Password')} *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        value={registerData.password}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, password: e.target.value }))}
                        placeholder={getText('أدخل كلمة المرور', 'Enter password')}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1 h-8 w-8 p-0"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      {getText('تأكيد كلمة المرور', 'Confirm Password')} *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        placeholder={getText('أعد كتابة كلمة المرور', 'Confirm password')}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1 h-8 w-8 p-0"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={registerData.agreeToTerms}
                      onCheckedChange={(checked) => setRegisterData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      {getText('أوافق على', 'I agree to the')}{' '}
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        {getText('الشروط والأحكام', 'Terms & Conditions')}
                      </Button>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    {getText('إنشاء حساب', 'Create Account')}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;