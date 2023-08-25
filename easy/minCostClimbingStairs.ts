function minCostClimbingStairs(cost: number[]): number {
    let dp = new Map<number, number>();

    dp.set(cost.length - 1, cost[cost.length - 1]) // set second to last step to its cost

    for (let i = cost.length - 2; i >= 0; i--) {
        let one_step: number = cost[i] + dp.get(i + 1);
        let two_step: number = cost[i] + (dp.get(i + 2) ?? 0);

        dp.set(i, Math.min(one_step, two_step));
    }

    return Math.min(dp.get(0), dp.get(1))
};
