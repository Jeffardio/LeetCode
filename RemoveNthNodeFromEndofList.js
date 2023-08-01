/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next == null) return null
    let nLast = Array(n+1).fill(null)
    let curr = head
    let size = 0
    while(curr != null){
        if(nLast.length == n+1){
            nLast.push(curr)
            nLast = nLast.slice(1,n+2)
        } else nLast.push(curr)
        curr = curr.next
        size++
    }
    if(size == n) return head.next
    nLast[0].next = nLast[1].next
    return head

};