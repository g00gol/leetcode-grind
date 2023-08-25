function climbStairs(n: number): number {
    let dp = new Map<number, number>();

    dp.set(n, 1);
    dp.set(n - 1, 1);

    for (let i = n - 2; i >= 0; i--) {
        let one_step = dp.get(i + 1);
        let two_steps = dp.get(i + 2);

        dp.set(i, one_step + two_steps);
    }
    
    return dp.get(0);
};
