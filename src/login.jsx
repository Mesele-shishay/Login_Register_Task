import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from 'react-hot-toast';


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters")
})


export function Login() {
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data) => {
    if (data.email == "admin@gmail.com" && data.password == "test@1234") {
      toast.success("Success. You have logged in")
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate("/register");
    } else {
      setError("root", {
        message: "invalid creds",
      });
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex min-h-screen justify-center items-center">
        <Card className="w-[350px] bordern">
          <CardHeader>
            <CardTitle className="text-center font-bold text-3xl pt-0 pb-3">
              Login
            </CardTitle>
            <CardDescription>
              Enter your email and password to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="example@gmail.com"
                    type="text"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...register("password")}
                    id="password"
                    placeholder="**********"
                    type="password"
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password.message}</div>
                  )}
                </div>
              </div>
              {errors.root && (
                <div className="text-red-500">{errors.root.message}</div>
              )}
              <a href="#" className="flex justify-end pt-3 text-red-500">
                Forget Password
              </a>
              <CardFooter className="flex justify-center pt-2 pb-0">
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Lodding" : "Login"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Login;
