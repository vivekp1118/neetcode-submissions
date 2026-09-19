class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const map = {};
        let isDuplicate = false;
        // nums.forEach((item) => {
        //     if (!map[item]) map[item] = 1;
        //     else map[item] += 1;
        //     if (map[item] > 1) isDuplicate = true;
        // });

        // return isDuplicate;

        const len = nums.length;
        for (let i = 0; i < len; i++) {
            if (isDuplicate) break;
            for (let j = 0; j < len; j++) {
                if (j != i && nums[j] == nums[i]) isDuplicate = true;
            }
        }
        return isDuplicate
    }
}
