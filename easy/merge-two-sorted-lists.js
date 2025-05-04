/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2); // recursion goes deeper
    return list1; // smaller node stays here
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
  // for every recursive call, the smaller node stays, then recursion goes deeper;
  // once the recursion reaches the null, base case activates;
  // then returns nodes by attaching them in recursive return, starting from the highest value.
};
