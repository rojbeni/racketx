import { ArrowRightMini } from "@medusajs/icons"
import { Button } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "radial-gradient(circle at top right, rgba(0,0,0,0.02) 0%, transparent 70%)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="text-xs uppercase tracking-widest text-ui-fg-subtle px-3 py-1 bg-surface-container-low rounded-full border border-border">
            Aceline Store
          </span>
        </div>

        <h1 className="font-sans text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-8 text-primary leading-tight">
          Premium Second-Hand Tennis Gear &amp; Shoes
        </h1>

        <p className="text-base md:text-lg text-ui-fg-subtle max-w-2xl mx-auto mb-12 leading-relaxed">
          Welcome to Aceline Store, where premium performance meets sustainable pricing. We specialize in high-quality, pre-owned tennis rackets, gently used court shoes, and top-tier equipment from the world&apos;s best brands. Every item in our inventory is meticulously inspected, cleaned, and rated, ensuring you get pro-level gear without the premium price tag. Play harder, spend smarter, and give great gear a second life on the court.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <LocalizedClientLink href="/store">
            <Button variant="primary" className="px-10 py-4 rounded-lg text-base hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-black/5 flex items-center gap-2">
              Shop Collection
              <ArrowRightMini />
            </Button>
          </LocalizedClientLink>

          <LocalizedClientLink href="/store">
            <Button variant="secondary" className="px-10 py-4 rounded-lg text-base hover:bg-surface-container-low transition-all duration-300">
              Learn Our Process
            </Button>
          </LocalizedClientLink>
        </div>
      </div>

      {/* Atmospheric Visual Elements */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 opacity-40 blur-3xl pointer-events-none">
        <div className="h-64 bg-primary/5 rounded-full"></div>
      </div>
    </section>
  )
}

export default Hero


