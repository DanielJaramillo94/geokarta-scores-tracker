(() => {
    const { createElement: h } = React;

    function StatsCard({
        rank = "1",
        name = "Dani",
        distance = "42,62 km",
        time = "01:28:82",
    }) {
        let medalSrc

        if (rank === "1") {
            medalSrc = "./assets/medal-gold.png"
        } else if (rank === "2") {
            medalSrc = "./assets/medal-plat.png"
        } else if (rank === "3") {
            medalSrc = "./assets/medal-bronze.png"
        }

        return h(
            "div",
            {
                className: "flex items-start gap-3 px-1 py-1",
            },

            // Medal
            h(
                "img",
                {
                    src: medalSrc,
                    alt: `Medal ${rank}`,
                    className: "h-16 w-16 object-contain",
                    loading: "lazy",
                }
            ),

            // Text content
            h(
                "div",
                { className: "flex flex-col gap-0" },

                // Name
                h(
                    "div",
                    { className: "text-2xl font-semibold tracking-wide opacity-90" },
                    name
                ),

                // Stats col
                h(
                    "div",
                    { className: "flex flex-col items-left gap-0 text-white/80 text-sm" },

                    h(
                        "div",
                        { className: "flex items-center gap-2" },
                        h("img", {
                            src: "./assets/icon-distance.png",
                            alt: "Distance",
                            className: "h-4 w-4 object-contain",
                            loading: "lazy",
                        }),
                        distance
                    ),

                    h(
                        "div",
                        { className: "flex items-center gap-2" },
                        h("img", {
                            src: "./assets/icon-time.png",
                            alt: "Time",
                            className: "h-4 w-4 object-contain",
                            loading: "lazy",
                        }),
                        time
                    ),
                )
            )
        );
    }

    window.StatsCard = StatsCard;
})();