(() => {
  const { createElement: h } = React;

  function DateSidebarMenu({
    title = "Select a date",
    dates = [],
    selectedDate = null,
    onSelect = () => { },
  }) {
    return h(
      "aside",
      {
        className:
          "h-screen w-full shrink-0 border-r border-white/10 bg-white/5 p-3 flex flex-col gap-3",
        role: "navigation",
        "aria-label": title,
      },
      h(
        "div",
        { className: "px-2 pt-1 text-xs uppercase tracking-widest text-white/70" },
        title
      ),
      h(
        "div",
        { className: "flex-1 overflow-auto pr-1 flex flex-col gap-1" },
        ...dates.map((dateStr) => {
          const isSelected = dateStr === selectedDate;

          return h(
            "button",
            {
              key: dateStr,
              type: "button",
              onClick: () => onSelect(dateStr),
              className:
                "w-full text-left rounded-xl px-3 py-2 text-sm transition " +
                (isSelected
                  ? "bg-white/15 border border-white/15 text-white"
                  : "bg-transparent border border-transparent text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"),
              "aria-current": isSelected ? "page" : undefined,
            },
            dateStr
          );
        })
      )
    );
  }

  window.DateSidebarMenu = DateSidebarMenu;
})();