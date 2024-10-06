import { z } from "zod";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from '@/components/ui/label';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

const resgiterSchema = z.object({
  fname: z.string().min(1, { message: "First name is required" }),
  lname: z.string().min(1, { message: "Last name is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  email: z.string().email({ message: "Email is required" }),
  phone: z.string().min(1, { message: 'Phone is required' }).max(10, { message: "Must be a valid mobile number" })
    .max(14, { message: 'Must be a valid mobile number' }),
  password: z.string().min(8, "Password must be 8 characters"),
  confirmPassword: z.string()
}).refine(
  (values) => {
    return values.password === values.confirmPassword;
  },
  {
    message: "Passwords must match!",
    path: ["confirmPassword"],
  }
);
export default function Register() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resgiterSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: ""
    }
  });

  const onSubmit = (data) => {
    if (data.email == "admin@gmail.com" && data.password == "test@1234") {
      // navigate("/register");
    } else {
      setError("root", {
        message: "invalid creds",
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className=" md:my-3 flex min-h-screen items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-3 md:space-y-6  " onSubmit={handleSubmit(onSubmit)}>
              <div className="md:grid md:grid-cols-2 gap-3 ">
                {/* First Name */}
                <div>
                  <Label htmlFor="fname">First Name</Label>
                  <Input
                    id="fname"
                    placeholder="First name"
                    type="text"
                    {...register("fname")}
                  />
                  {errors.fname && (
                    <div className="text-red-500">{errors.fname.message}</div>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lname">Last Name</Label>
                  <Input
                    id="lname"
                    placeholder="Last name"
                    type="text"
                    {...register("lname")}
                  />
                  {errors.lname && (
                    <div className="text-red-500">{errors.lname.message}</div>
                  )}

                </div>

                {/* Email */}
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    type="text"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}

                </div>

                {/* Address */}
                <div>
                  <Label htmlFor="fname">Address</Label>
                  <Input
                    id="address"
                    placeholder="Address"
                    type="text"
                    {...register("address")}
                  />
                  {errors.address && (
                    <div className="text-red-500">{errors.address.message}</div>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <Label htmlFor="fname">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Phone Number"
                    type="text"
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <div className="text-red-500">{errors.phone.message}</div>
                  )}
                </div>

                {/* Password */}
                <div>
                  <Label htmlFor="fname">Password</Label>
                  <Input
                    id="password"
                    placeholder="Password"
                    type="password"
                    {...register("password")}
                  />
                  {errors.password && (
                    <div className="text-red-500">{errors.password.message}</div>
                  )}

                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="fname">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                  />
                  {errors.confirmPassword && (
                    <div className="text-red-500">{errors.confirmPassword.message}</div>
                  )}
                </div>

              </div>

              <div className="flex justify-center pt-4">
                <Button type="submit" disabled={isSubmitting} className="px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</Button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
