function productExceptSelf(nums: number[]): number[] {
    // prefix
    let res: number[] = new Array(nums.length);
    
    let pre: number = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = pre;
        pre *= nums[i];
    }

    let post: number = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= post;
        post *= nums[i];
    }

    return res;
};
