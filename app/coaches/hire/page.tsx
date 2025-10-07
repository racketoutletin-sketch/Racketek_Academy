"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// ----- Validation Schema -----
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  experience: z.string().min(5, { message: "Experience must be at least 5 characters." }),
  specialty: z.string().min(5, { message: "Specialty must be at least 5 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  location: z.string().min(3, { message: "Location must be at least 3 characters." }),
})

export default function HireCoachPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      experience: "",
      specialty: "",
      description: "",
      location: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 to-transparent">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            🎯 Become a Coach
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Join Our Team of Expert Badminton Coaches
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Are you passionate about badminton and sharing your skills? Apply now to become a coach at Racketek
            Academy and help players of all levels achieve their goals.
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Coach Application Form */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Coach Application Form</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below to join our team of expert coaches.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Your Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                          <Input placeholder="Years of Experience" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="specialty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Specialty</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a specialty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Beginner Programs">Beginner Programs</SelectItem>
                              <SelectItem value="Junior Development">Junior Development</SelectItem>
                              <SelectItem value="Advanced Techniques">Advanced Techniques</SelectItem>
                              <SelectItem value="Competition Strategy">Competition Strategy</SelectItem>
                              <SelectItem value="Fitness Training">Fitness Training</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your coaching style and experience"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>Briefly describe your coaching style</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Coaching Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full mt-4">
                    Submit Application
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 text-center bg-primary/85 text-white rounded-xl mx-4 md:mx-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Our Coaching Team?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Share your passion, develop players, and grow as a professional badminton coach at Racketek Academy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8">
            Join as Coach
          </Button>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        <div className="container mx-auto px-4">
          &copy; {new Date().getFullYear()} Racketek Academy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
