(() => {
    const { createElement: h } = React;

    function StatsList({ items = [] }) {
        return h(
            "div",
            { className: "flex flex-col gap-2" },
            ...items.map((item) =>
                h(window.StatsCard, {
                    key: item.rank,
                    rank: item.rank,
                    name: item.name,
                    date: item.date,
                    distance: item.distance,
                    time: item.time,
                })
            )
        );
    }

    window.StatsList = StatsList;
})();