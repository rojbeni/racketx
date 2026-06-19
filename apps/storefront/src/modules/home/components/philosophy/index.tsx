import { ShieldCheck, Leaf, CircleDollarSign } from "lucide-react"

export default function Philosophy() {
  return (
    <section className="bg-surface-container-lowest py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4 flex flex-col items-start">
          <div className="text-primary p-2 bg-surface-container-low rounded-lg">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold text-primary">Meticulously Inspected</h4>
          <p className="text-ui-fg-subtle text-sm md:text-base leading-relaxed">
            Every piece of gear undergoes a 20-point inspection by our experts before it hits the store.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-start">
          <div className="text-primary p-2 bg-surface-container-low rounded-lg">
            <Leaf className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold text-primary">Sustainability First</h4>
          <p className="text-ui-fg-subtle text-sm md:text-base leading-relaxed">
            Reduce waste and promote circular economy by giving premium tennis equipment a second life.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-start">
          <div className="text-primary p-2 bg-surface-container-low rounded-lg">
            <CircleDollarSign className="h-8 w-8" />
          </div>
          <h4 className="text-xl font-semibold text-primary">Pro Gear, Smarter Prices</h4>
          <p className="text-ui-fg-subtle text-sm md:text-base leading-relaxed">
            Access top-tier performance rackets and shoes for up to 60% less than original retail costs.
          </p>
        </div>
      </div>
    </section>
  )
}
