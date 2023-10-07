const graphData = {
    Reykjavik: {
        Oslo: 5,
        London: 4,
    },
    Oslo: {
        Reykjavik: 5,
        Berlin: 1,
        Moscow: 3,
    },
    Moscow: {
        Belgrade: 5,
        Athens: 4,
        Oslo: 3,
    },
    Belgrade: {
        Moscow: 5,
        Athens: 1,
    },
    Athens: {
        Belgrade: 1,
        Rome: 2,
        Moscow: 4,
    },
    Rome: {
        Athens: 2,
        Berlin: 2,
    },
    Berlin: {
        Rome: 2,
        Oslo: 1,
    },
    London: {
        Reykjavik: 4,
    }
}

const nodesData = ['Reykjavik', 'Oslo', 'Moscow', 'Belgrade', 'Athens', 'Rome', 'Berlin', 'London'];