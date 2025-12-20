(() => {
    const { createElement: h } = React;

    function StatsList({ items = [] }) {
        return h(
            "div",
            { className: "flex flex-col gap-2" },
            ...items.map((item, index) =>
                h(window.StatsCard, {
                    key: index,
                    rank: String(index + 1),
                    name: item.name,
                    distance: item.distance,
                    time: item.time,
                })
            )
        );
    }

    window.StatsList = StatsList;
})();