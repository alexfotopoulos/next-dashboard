//red rgb(229, 57, 53)
//green rgb(67, 160, 71)
//blue rgb(26, 115, 232)

const RED = "rgb(229, 57, 53)";
const GREEN = "rgb(67, 160, 71)";
const BLUE = "rgb(26, 115, 232)";

export const projectTable = [
    {
        project: {
            icon: "/icons/tables/projectTable/centos-line.svg",
            name: "Centos",
        },
        budget: "$2,500",
        status: "working",
        completion: { percentage: "60%", color: BLUE },
    },
    {
        project: {
            icon: "/icons/tables/projectTable/github-fill.svg",
            name: "Github",
        },
        budget: "$5,000",
        status: "done",
        completion: { percentage: "100%", color: GREEN },
    },
    {
        project: {
            icon: "/icons/tables/projectTable/opera-line.svg",
            name: "Opera",
        },
        budget: "$3,400",
        status: "canceled",
        completion: { percentage: "30%", color: RED },
    },
    {
        project: {
            icon: "/icons/tables/projectTable/spotify-line.svg",
            name: "Spotify",
        },
        budget: "$14,000",
        status: "working",
        completion: { percentage: "80%", color: BLUE },
    },
    {
        project: {
            icon: "/icons/tables/projectTable/slack-fill.svg",
            name: "Slack",
        },
        budget: "$1,000",
        status: "canceled",
        completion: { percentage: "0%", color: RED },
    },
    {
        project: {
            icon: "/icons/tables/projectTable/invision-fill.svg",
            name: "Invision",
        },
        budget: "$2,300",
        status: "done",
        completion: { percentage: "100%", color: GREEN },
    },
];
