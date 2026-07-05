import React from "react";
import Icon from "./Icon";

const Bottom = () => {
  return (
    <footer className="w-full bg-transparent text-zinc-500 dark:text-zinc-500 text-center py-12 border-t border-gray-100 dark:border-zinc-900 transition-colors duration-1000 motion-preset-fade motion-duration-2000">
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 dark:text-white">
          Fernandhito Pratama
        </div>
        <p className="text-xs font-medium">
          &copy; {new Date().getFullYear()} All rights reserved. Designed &
          Built with{" "}
          <Icon icon="fa-solid fa-heart text-red-500 animate-pulse" />
        </p>
      </div>
    </footer>
  );
};

export default Bottom;
