// SidebarLayout.tsx

import { Outlet } from "react-router-dom";

import styles from "./SidebarLayout.module.css";
import { useSidebarStore } from "../../Store/SideBarStore/SideBar.store";
import Sidebar from "./Components/SideBar/SideBar";

const SidebarLayout = () => {
  const { isCollapsed } =
    useSidebarStore();

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main
        className={`${styles.content} ${
          isCollapsed
            ? styles.contentCollapsed
            : styles.contentExpanded
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;