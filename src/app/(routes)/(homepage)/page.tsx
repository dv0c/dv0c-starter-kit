import Choices from "@/components/Choices";
import Heading from "@/components/Heading";
import OCP from "@/components/offer-cross-platform";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <main>
      <Heading />
      <Choices />
      <OCP />
      <WhatWeOffer />
    </main>
  );
}
