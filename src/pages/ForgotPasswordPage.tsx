import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AuthFormWrapper from '@/components/AuthFormWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const ForgotPasswordPage = () => {
  console.log('ForgotPasswordPage loaded');
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);

    // In a real application, you would call your API here.
    // For this example, we'll just show a success toast.

    toast({
      title: 'Request Sent',
      description: 'If an account exists with that email, a reset link has been sent.',
    });
    
    setEmail(''); // Clear the input field after submission
  };

  return (
    <AuthFormWrapper
      title="Forgot Your Password?"
      description="No worries! Enter your email and we'll send you a reset link."
      footer={
        <p className="text-sm text-muted-foreground">
          Remembered your password?{' '}
          <Link to="/" className="font-semibold text-primary hover:underline">
            Back to Login
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        <Button type="submit" className="w-full">
          Send Reset Link
        </Button>
      </form>
    </AuthFormWrapper>
  );
};

export default ForgotPasswordPage;