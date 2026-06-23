import { useSidebarStore } from "../../../../Store/SideBarStore/SideBar.store";
import { SIDEBAR_ITEMS } from "../../Config/Sidebar.config";
import SidebarItem from "../SideBarItem/SideBarItem";
import styles from "./SideBar.module.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Sidebar = () => {
  const { isCollapsed, toggle } =
    useSidebarStore();

  return (
    <aside
      className={`${styles.sidebar} ${
        isCollapsed
          ? styles.collapsed
          : styles.expanded
      }`}
    >
      <div className={styles.header}>
        <button
          onClick={toggle}
          className={styles.menuButton}
        >
          <MenuOutlinedIcon fontSize={"large"} />
        </button>

        {!isCollapsed && (
          <img
            src="https://placehold.co/150x50"
            alt="logo"
            className={styles.logo}
          />
        )}
      </div>

      <nav className={styles.navigation}>
        {SIDEBAR_ITEMS.map((item) => (
          <SidebarItem
            key={item.path}
            path={item.path}
            label={item.label}
            Icon={item.icon}
            collapsed={isCollapsed}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;