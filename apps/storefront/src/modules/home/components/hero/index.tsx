import { ArrowRightMini } from "@medusajs/icons"
import { Button, Heading } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center py-12 small:py-24 relative">
      <div className="content-container grid grid-cols-1 small:grid-cols-2 gap-12 small:gap-16 items-center z-10 relative">
        {/* Left Column: Typography & CTAs */}
        <div className="flex flex-col items-start text-left gap-6 max-w-[580px]">
          <div className="flex flex-col gap-2">
            <Heading
              level="h1"
              className="font-black tracking-tight leading-none text-foreground"
            >
              Aceline Store
            </Heading>
            <Heading
              level="h2"
              className="font-black tracking-tight leading-none text-foreground/80"
            >
              Premium Second-Hand Tennis Gear & Shoes
            </Heading>
          </div>

          <p className="text-base-regular text-ui-fg-subtle max-w-[480px] leading-relaxed">
            Welcome to <span>Aceline Store</span> , where premium performance meets sustainable pricing. We specialize in high-quality, pre-owned tennis rackets, gently used court shoes, and top-tier equipment from the world's best brands. Every item in our inventory is meticulously inspected, cleaned, and rated, ensuring you get pro-level gear without the premium price tag. Play harder, spend smarter, and give great gear a second life on the court.
          </p>

          <div className="flex flex-col xsmall:flex-row gap-4 w-full xsmall:w-auto mt-2">
            <LocalizedClientLink href="/store">
              <Button variant="primary" className="w-full xsmall:w-auto px-8 py-3 rounded-full flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95">
                Shop
                <ArrowRightMini className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </LocalizedClientLink>
          </div>
        </div>

        {/* Right Column: Interactive Visual Frame */}

      </div>
    </div>
  )
}

export default Hero

