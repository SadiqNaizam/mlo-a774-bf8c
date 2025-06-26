import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const SignUpPage = () => {
  console.log('SignUpPage loaded');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would handle form validation and API calls here.
    
    // Simulate a successful sign-up
    toast({
      title: "Account Created!",
      description: "Your account has been successfully created. Please log in.",
    });

    // Redirect to login page after a short delay
    setTimeout(() => {
      navigate('/'); // Navigate to LoginPage route from App.tsx
    }, 1500);
  };

  return (
    <AuthFormWrapper
      title="Create an Account"
      description="Enter your information below to create a new account."
      footer={
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/" className="underline underline-offset-4 hover:text-primary">
            Log in
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm-password">Confirm Password</Label>
          <Input id="confirm-password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default SignUpPage;