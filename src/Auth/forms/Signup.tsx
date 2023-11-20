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
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full mt-4">
          <div className="flex flex-row gap-3 w-full mt-4">
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
                  Email goes here.
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
          </div>
          <div className="flex flex-row gap-5 w-full mt-4">
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
                  middle name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>last_name</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  last name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex flex-row gap-5 w-full mt-4">
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
          </div>
          <div className="flex flex-row gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="employee_identity_data.sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>sex</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  Sex.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>gender</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  gender.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>age</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>height</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  height.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex flex-row gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="employee_identity_data.home_address"
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
                  home address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.birthdate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>birthdate</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  birthdate.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="employee_identity_data.birthplace"
            render={({ field }) => (
              <FormItem>
                <FormLabel>birthplace</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  birthplace.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className="flex flex-row gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="security_access_level"
            render={({ field }) => (
              <FormItem>
                <FormLabel>security_access_level</FormLabel>
                <FormControl>
                  <Input 
                    type="text" 
                    className="shad-input"
                    placeholder="shadcn"
                    {...field} 
                  />
                </FormControl>
                <FormDescription>
                  security_access_level.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
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