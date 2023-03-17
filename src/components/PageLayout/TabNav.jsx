import { randomized, useZustand } from "../../lib/state";
import styles from "./Nav.module.scss";
import cn from "classnames";
import { AddButton } from "./AddButton";

const { navWrapper } = styles;

export const TabNav = () => {
  const [tabs, activeTab] = useZustand((state) => {
    return [state.tabs, state.activeTab];
  });

  const handleFocusTab = (tabId) => {
    useZustand.setState({ activeTab: tabId });
    console.log("click");
  };

  return (
    <nav className={navWrapper}>
      {tabs.map((tab) => (
        <div
          key={tab.id + randomized()}
          onClick={() => handleFocusTab(tab.id)}
          className={cn(styles.tab, tab.id === activeTab && styles.active)}
          title={`tabId: ${tab.id}, invoiceId: ${tab.invoiceId}`}
        >
          {tab.id}
        </div>
      ))}
      <AddButton />
    </nav>
  );
};
