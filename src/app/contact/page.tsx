import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Get in Touch
      </h1>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Contact Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea id="message" placeholder="Your message here..." />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          Other Ways to Connect
        </h2>
        <p className="text-gray-600 mb-2">Email: contact@azbytes.com</p>
        <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Follow me on social media: @azbytes</p>
      </div>
    </div>
  )
}