function superbowlWin(arr) {
    const winner = arr.find(arr => arr.result ==='W')
    return (winner === undefined ? undefined : winner.year)
}