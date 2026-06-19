import { NavLink } from "react-router-dom";
import styles from "./SideBarItem.module.css"

interface Props {
  path: string;
  label: string;
  Icon: React.ReactNode;
  collapsed: boolean;
}

const SidebarItem = ({
  path,
  label,
  Icon,
  collapsed,
}: Props) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${styles.item} ${
          isActive ? styles.active : ""
        }`
      }
    >
      {Icon}

      {!collapsed && (
        <span className={styles.label}>
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;