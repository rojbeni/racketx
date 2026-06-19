import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function BentoGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        {/* Pro Performance Rackets */}
        <div className="md:col-span-8 relative group overflow-hidden rounded-xl bg-surface-container-low min-h-[300px] md:min-h-0">
          <LocalizedClientLink href="/store" className="absolute inset-0 z-20" />
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">Pro Performance Rackets</h3>
            <p className="text-white/80 text-sm md:text-base max-w-md">Certified pre-owned frames from Wilson, Babolat, and Head.</p>
          </div>
          <div
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-cover bg-center absolute inset-0"
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAzL4YZfi3-sZubxQBa7JYblUfG0t6rVleoqXnnOFV9wb47E_AIAGweK9mPthCDXLmupAYumEkZiYvSsJJ7X_HwdgG3hzfSVMpBwvQRNRnqSdlbUD4WN3VxxuXQgYmZ6bMAPljhPkJQfsI9XteYGb7Pp-wudQEkjmRUHHFftBEFqIum4w_g6cNEETHkC9BurcA9etg27UQBCdFIT67SUX7z2ZIxtZop31XAnzpqYpSwXyk7U24iqelenuCAyLp_koRNy_dZS1mXSHY')` }}
          />
        </div>

        {/* Right Side: Shoes and Accessories */}
        <div className="md:col-span-4 grid grid-rows-2 gap-6 h-[400px] md:h-full">
          {/* Court Shoes */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
            <LocalizedClientLink href="/categories/shoes" className="absolute inset-0 z-20" />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-xl md:text-2xl font-semibold text-white">Court Shoes</h3>
            </div>
            <div
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB7MIiVkFgW0uZVyW1n0oVl0TTAztHuQZ35wKNox5g-OH7ndhoSyKGe7kSMucKdNjZuIZImZeyWiOuqhZNj_tkBZZ7nv-E1WtbtjDviVaCSuXcFqEQdNmU506TRHXGzIbe-G2pLxEBje-s0BwbwPDiBGZ2XFLoCyas84fdnYpWkyyMO2hfyBUo7gBPIWqYTYRHzISHXkwwvbcbJ5Vg5weKQjWpgc8oM8wmiNKwhh7kpOl-wA3jwUMKGm5kLkcqJrRR0JNQYHzr0Qqk')` }}
            />
          </div>

          {/* Accessories */}
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-low">
            <LocalizedClientLink href="/store" className="absolute inset-0 z-20" />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-xl md:text-2xl font-semibold text-white">Accessories</h3>
            </div>
            <div
              className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 bg-cover bg-center absolute inset-0"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTdtZSJ072vYdTufKTMvqvE3gFSIpcNr1gDTdy80g-tXPaMwX6cg2aUW1O4PP385uqmMpW-ES4r52yowHuiM3vPtEC2hzGNv3O57pAyfydiIzX62Z-Bbuh6UHhaOhBo7nYlRVRxhnwiCTSanB-2djoDlB54BBjLVMVXEnnCYbqaSRp93zzJCRgSZQjALyHBqFSM54dPH1pJJnEKaRtKqoASGQo0IuQveIsPo6YJrjKAEGerLjOK6jnw_H-j1O7diEta-RokJdjptw')` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
