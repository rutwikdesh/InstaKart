import Banner from "@/components/Banner"
import Wrapper from "@/components/Wrapper"

export default function Home() {
  return (
    <main>
      <Banner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-lg">
            A lightweight Nike ZoomX midsole is combined with
            increased stack heights to help provide cushioning
            during extended stretches of running.
          </div>
        </div>
      </Wrapper>
    </main>
  )
}
