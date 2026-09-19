class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        let isDuplicate = false;
        nums.forEach((item) => {
            if (!map[item]) {
                map[item] = 1;
            } else {
                map[item] += 1;
            }
            if (map[item] > 1) {
                isDuplicate = true;
            }
        });

        return isDuplicate;
    }
}
