import Intro from "./sections/intro";
import About from "./sections/about";

export { Page };
export const documentProps = {
  title: "Eric So",
};
function Page() {
  return (
    <>
      <div>
        <Intro></Intro>
        <About></About>
      </div>
    </>
  );
}
