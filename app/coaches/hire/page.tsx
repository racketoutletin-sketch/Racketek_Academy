"use client"

import { ModernNavigation } from "@/components/modern-navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { motion } from "framer-motion"
import Image from "next/image"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  experience: z.string().min(3, { message: "Please specify your experience." }),
  specialty: z.string().min(3, { message: "Please enter your specialty." }),
  description: z.string().min(10, { message: "Please describe your coaching style." }),
})

export default function HireCoachPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", experience: "", specialty: "", description: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="min-h-screen bg-background">
      <ModernNavigation />

      {/* Hero */}
      <section className="relative py-20 text-center bg-gradient-to-br from-primary/10 via-background to-transparent">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-4">🏸 We’re Hiring Coaches</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Become a Part of <span className="text-primary">Racketek Academy</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of passionate badminton professionals shaping the next generation of champions.
          </p>
          <div className="mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="px-8 font-semibold hover:bg-primary/60"
            asChild
          >
            <a href="#application">Apply Now</a>
          </Button>

          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Why Join Racketek?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            At Racketek, coaching isn’t just a job — it’s a mission to inspire, build confidence, and create athletes who dream big.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🏸 Professional Growth",
                desc: "Train with top-tier coaches and stay ahead with structured development programs and workshops.",
              },
              {
                title: "💪 Empower Future Players",
                desc: "Work with dedicated students eager to compete, learn, and achieve their full potential.",
              },
              {
                title: "🌍 Collaborative Environment",
                desc: "Be part of a supportive community that values innovation, teamwork, and continuous improvement.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-background shadow-sm p-6 rounded-2xl border"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Who We’re Looking For</h2>
          <p className="text-muted-foreground mb-10">
            We’re seeking certified coaches passionate about guiding athletes and advancing badminton excellence.
          </p>
          <ul className="space-y-4 text-left text-muted-foreground">
            <li>✅ 3+ years of coaching experience at academy or competition level</li>
            <li>✅ Certified BWF Level 1 or Level 2 coach (preferred)</li>
            <li>✅ Strong understanding of player development and technique</li>
            <li>✅ Excellent communication and motivational skills</li>
            <li>✅ Bachelor’s in Sports Science or related field (plus)</li>
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-muted/40" id="application">
        <div className="container mx-auto max-w-3xl px-4">
          <Card className="shadow-xl border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Coach Application Form</CardTitle>
              <CardDescription>Fill in your details — our team will reach out soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {["name", "email", "experience", "specialty", "description"].map((field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as keyof z.infer<typeof formSchema>}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="capitalize">{field.name}</FormLabel>
                          <FormControl>
                            {field.name === "description" ? (
                              <Textarea placeholder={`Enter your ${field.name}`} className="resize-none" {...field} />
                            ) : (
                              <Input placeholder={`Enter your ${field.name}`} {...field} />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="submit" className="w-full mt-6">Submit Application</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center bg-primary/85 text-white rounded-2xl mx-4 md:mx-8 lg:mx-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait — your badminton journey starts with a single step. Contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              onClick={() => (window.location.href = "tel:+919615961999")}
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Racketek Academy. All rights reserved.
      </footer>
    </div>
  )
}
