import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden align-middle justify-center">
              <Image
                src="/banner.png"
                alt="Colorful abstract design representing creativity"
                width={321}
                height={390}
                style={{margin: 'auto'}}
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to My Creative World
            </h1>
            <p className="text-lg mb-6">
              Explore a universe of vibrant designs and innovative solutions. 
              Lets bring your ideas to life with color and creativity!
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              My Work
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}