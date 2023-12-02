import HomePollContainer from "@/components/homePollContainer/HomePollContainer";

export default function Home() {
  return (
    <main>
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center gap-y-8 mt-12">
        <h2 className="text-5xl font-semibold">The Interactive Test</h2>
        <h4 className="text-lg font-semibold">Click on the option below to vote your test</h4>
      </div>

      <HomePollContainer />
    </main>
  )
}
