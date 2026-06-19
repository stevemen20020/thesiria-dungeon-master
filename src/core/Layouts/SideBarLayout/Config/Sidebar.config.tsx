import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export interface SidebarItemConfig {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export const SIDEBAR_ITEMS: SidebarItemConfig[] = [
  {
    label: "Map",
    path: "/",
    icon: <MapOutlinedIcon />,
  },
];