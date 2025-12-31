import SectionAboutUs from "@/components/SectionAboutUs";
import { SectionExamples } from "@/components/SectionExamples";
import SectionFooter from "@/components/SectionFooter";
import SectionHero from "@/components/SectionHero";
import SectionOurTeam from "@/components/SectionOurTeam";
import SectionUploadedImage from "@/components/SectionUploadedImage";

export default function Home() {
  return (
    <div>
      <SectionHero />
      <SectionUploadedImage />
      <SectionExamples />
      <SectionAboutUs />
      <SectionOurTeam />
      <SectionFooter />
    </div>
  );
}
