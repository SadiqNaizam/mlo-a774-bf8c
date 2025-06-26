import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LockKeyhole } from 'lucide-react';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  footer: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ children, title, description, footer }) => {
  console.log('AuthFormWrapper loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="bg-primary text-primary-foreground p-3 rounded-full mb-3">
            <LockKeyhole className="h-6 w-6" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Auth Portal
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Secure and stylish authentication
          </p>
        </div>
        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {children}
          </CardContent>
          <CardFooter className="flex justify-center">
            {footer}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AuthFormWrapper;