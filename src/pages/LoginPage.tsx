import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const { toast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });

    // Basic validation
    if (!email || !password) {
      toast({
        title: 'Login Failed',
        description: 'Please enter both email and password.',
        variant: 'destructive',
      });
      return;
    }

    // Simulate a successful API call
    toast({
      title: 'Login Successful',
      description: 'Redirecting to your dashboard...',
    });

    // Redirect to the dashboard page on successful login
    // The path `/dashboard` is confirmed from App.tsx
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <AuthFormWrapper
      title="Welcome Back"
      description="Enter your credentials to access your account."
      footer={
        <p className="text-sm text-muted-foreground">
          {`Don't have an account?`}{' '}
          {/* Path `/sign-up` is confirmed from App.tsx */}
          <Link to="/sign-up" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-input"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {/* Path `/forgot-password` is confirmed from App.tsx */}
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-input"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default LoginPage;