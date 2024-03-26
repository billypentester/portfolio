import Header from "@/components/Header";

import WorkWith from "@/components/WorkWith";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";

export default function Home() {

  return (
    <>
    <div className="custom-container">
      <Header />
      <Expertise />
      <Skills />
      <WorkWith />
    </div>
    </>
  );
}
