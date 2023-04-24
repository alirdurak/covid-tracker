import WorldContainer from "@/components/world-container";
import Selector from "@/components/selector";
import NameDropdown from "@/components/name-dropdown";
import DataContainer from "@/components/data-container";
export default function HomePageContainer() {
  return (
    <>
      <WorldContainer />
      <Selector />
      <NameDropdown />
      <DataContainer />
    </>
  );
}
