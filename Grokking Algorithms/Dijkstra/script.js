function dijkstra(graph, startNode){
    let unvisitedNodes = nodesData.concat([]);
    const shortesPath = {}

    for (let node of unvisitedNodes){
        shortesPath[node] = Infinity
    }
    shortesPath[startNode] = 0


    while(unvisitedNodes.length > 0){
        let currentMinNode = null;
        for(const node of unvisitedNodes){
            if(currentMinNode === null || (shortesPath[node] < shortesPath[currentMinNode])){
                currentMinNode = node;
            }
        }

        let neighbors = Object.keys(graph[currentMinNode]);
        for(const neighbor of neighbors){
            const nextLength = shortesPath[currentMinNode] + graph[currentMinNode][neighbor];
            if(nextLength < shortesPath[neighbor]){
                
                shortesPath[neighbor] = nextLength
            }
        }

        unvisitedNodes = unvisitedNodes.filter(node => node !== currentMinNode);
    }

    console.log(shortesPath)
}

dijkstra(graphData, "Reykjavik");