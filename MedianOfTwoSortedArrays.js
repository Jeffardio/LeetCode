/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let m_1;
    let m_2;
    if(l1 % 2 == 0 && l1 != 0){
        m_1 = (nums1[l1/2] + nums1[l1/2 -1 ]) / 2  
    }
    else {
        m_1 = nums1[l1/2];
    }

    if(l2 % 2 == 0 && l2 != 0){
        m_2 = (nums2[l2/2] + nums2[l2/2 -1 ]) / 2  
    }
    else {
        m_2 = nums1[l2/2];
    }

    if(m1 == m2){
        return m1;
    }
    const avg = (l1 + l2) /2;
    if(m1 > m2) {
        let right_counter = 1;
        let left_counter = -1;
        
        while(1){
            let right = nums2[l1/2 + right_counter]
            let left = nums1[l1/2 + left_counter]
            
            right_counter++
            left_counter--
        }
    }
};


nums1 = [1,2], nums2 = [3,4]

console.log(findMedianSortedArrays(nums1,nums2))



1,3,4,100
50,60,70