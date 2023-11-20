// Libraries
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Internal Lib
import { SignupValidation } from "@/lib/validation"

// Components
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader } from "@mantine/core"

// Styles



const Signup = () => {
  const isLoading = false
  
  // 1. Define your form.
  const form = useForm<zod.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      email: "",
      password: "",
      phone_number: "",
      job_title: "",
      office_address: "",
      employee_identity_data:
      {
        first_name: "",
        middle_name: "",
        last_name:"",
        sex: "",
        gender: "",
        age:"",
        height:"",
        home_address:"",
        birthdate:"",
        birthplace:"",
      },
      security_access_level: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: zod.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <img src="assets/images/logo.svg" alt="logo" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Create a new account</h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">To use Colony Office, create an account</p>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Email.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  This is your Password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input 
                    type="tel" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Phone Number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job_title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Job Title.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="office_address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Office Address</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Office Address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  This is your first name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.middle_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /><FormField
            control={form.control}
            name="employee_identity_data.last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
            { isLoading ? (
              <div className="flex-center gap-2">
                <Loader />
                Loading...
              </div>
            ): "Signup"}
          </Button>
        </form>
      </div>
    </Form>
  )
}

export default Signup;