import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Zod schema for validation
const formSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Show error on the confirm password field
});

const ResetPasswordPage = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  // Check for reset token in URL on component mount
  useEffect(() => {
    const token = searchParams.get('token');
    console.log(`Password reset token found: ${token}`);
    if (!token) {
      toast({
        title: "Invalid Request",
        description: "The password reset link is invalid or has expired. Please try again.",
        variant: "destructive",
      });
      // Redirect to the forgot password page if token is missing
      navigate('/forgot-password');
    }
  }, [searchParams, navigate, toast]);

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Attempting to reset password for user...");

    // Simulate an API call
    setTimeout(() => {
      console.log("Password has been successfully reset.", values);
      setIsSubmitting(false);

      toast({
        title: "Success!",
        description: "Your password has been reset. Please log in with your new password.",
      });

      // Redirect to the login page as per user journey
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AuthFormWrapper
          title="Set a New Password"
          description="Please enter and confirm your new password below."
          footer={
            <p className="text-sm text-muted-foreground">
              Remember your password after all?{' '}
              <Link to="/" className="font-semibold text-primary hover:underline">
                Log In
              </Link>
            </p>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Reset Password'}
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;