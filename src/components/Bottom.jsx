import React from "react";
import Icon from "./Icon";
import { useLanguage } from "../context/LanguageContext";

const Bottom = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-transparent text-zinc-500 dark:text-zinc-500 text-center py-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="flex flex-col items-center gap-4">
        <div className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-900 dark:text-white">
          Fernandhito Pratama
        </div>
        <p className="text-xs font-medium">
          &copy; {new Date().getFullYear()} · {t("footer.builtWith")}{" "}
          <Icon icon="fa-solid fa-heart text-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Bottom;
