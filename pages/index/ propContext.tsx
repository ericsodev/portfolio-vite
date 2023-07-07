import React from "react";
import type { Props } from "./index.page.server";

interface PropProvider extends React.PropsWithChildren {
  props: Props;
}

const PropContext = React.createContext<Props | undefined>(undefined);
function PropProvider({ children, props }: PropProvider) {
  return <PropContext.Provider value={props}>{children}</PropContext.Provider>;
}

function useProps() {
  const props = React.useContext(PropContext);
  return props as Props;
}

export { PropProvider, useProps };
