import React from "react";
import SidebarRow from "./SidebarRow";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__fixed}>
        <ul>
          <SidebarRow key={1} selected icon="home" title="Ana sayfa" />
          <SidebarRow key={2} icon="explore" title="Keşfet" />
          <SidebarRow key={3}icon="subscriptions" title="Abonelikler" />
          <hr />
          <SidebarRow key={4}icon="video_library" title="Kitaplık" />
          <SidebarRow key={5}icon="restore" title="Geçmiş" />
          <SidebarRow key={6} icon="smart_display" title="Videolarınız" />
          <SidebarRow key={7} icon="watch_later" title="Daha Sonra İzle" />
          <SidebarRow key={8} icon="thumb_up_alt" title="Beğendiğim Videolar" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
