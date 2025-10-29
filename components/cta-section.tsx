"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Users, Trophy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CTASection() {
  const benefits = [
    { icon: CheckCircle, text: "Free 15-minute consultation" },
    { icon: Clock, text: "Flexible scheduling options" },
    { icon: Users, text: "Expert coaching team" },
    { icon: Trophy, text: "Proven improvement methods" },
  ]

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  })

  const [timeSlot, setTimeSlot] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = encodeURIComponent(
      `Hi! I’d like to schedule a 15-minute badminton consultation.\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nAddress: ${form.address}\nTime Slot: ${timeSlot}`
    )

    const phoneNumber = "+919615961999" // your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const handleDownloadGuide = () => {
    const link = document.createElement("a")
    link.href = "/guide.pdf" // path inside /public folder
    link.download = "guide.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const timeSlots = [
    "6:00 AM - 7:00 AM",
    "7:00 AM - 8:00 AM",
    "8:00 AM - 9:00 AM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border-primary/10">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Elevate Your Game?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Book your free consultation today and discover how our expert coaching can transform your badminton skills in just weeks.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <benefit.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                    Book Your Free 15 Min Call
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Book via WhatsApp</DialogTitle>
                    <DialogDescription>
                      Fill in your details and preferred time slot, then send your booking directly on WhatsApp.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleWhatsAppSubmit} className="space-y-4 mt-4 mb-4">
                    <div className="mb-4">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" className='mt-2' value={form.name} onChange={handleChange} required />
                    </div>

                    <div className="mb-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" className='mt-2' value={form.phone} onChange={handleChange} required />
                    </div>

                    <div className="mb-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" className='mt-2' value={form.email} onChange={handleChange} />
                    </div>

                    <div className="mb-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" name="address" className='mt-2' value={form.address} onChange={handleChange} />
                    </div>

                    <div>
                      <Label className='mt-2'>Preferred Time Slot</Label>
                      <Select onValueChange={setTimeSlot}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot, i) => (
                            <SelectItem key={i} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <DialogFooter>
                      <Button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700"
                        disabled={!timeSlot}
                      >
                        Send on WhatsApp
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>

              {/* ✅ Working Download Button */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadGuide}
                className="text-lg px-8 py-6 bg-transparent border-2 border-primary hover:bg-primary/10 transition"
              >
                Download Free Guide
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No commitment required • Response within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
