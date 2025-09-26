class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  static insertAtHead(head, val) {
    const newNode = new ListNode(val, head);
    return newNode;
  }

  static printList(head) {
    let curr = head;
    let result = [];
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result.join(" -> "));
  }

  static insertAtTail(head, val) {
    let curr = head;
    while (curr && curr.next) {
      curr = curr.next;
    }
    const newNode = new ListNode(val);
    curr.next = newNode;
    return head;
  }

  static deleteNode(head, val) {
    if (!head) return null;
    if (head.val === val) return head.next;

    let prev = head;

    while (prev) {
      if (prev?.next && prev.next?.val === val) {
        prev.next = prev.next.next;
        return head;
      } else if (prev?.next && prev.next?.val !== val) {
        prev = prev.next;
      }
      if (!prev?.next) break;
    }
    return head;
  }

  static reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

let head = null;
head = ListNode.insertAtHead(head, 1);
head = ListNode.insertAtHead(head, 2);
head = ListNode.insertAtHead(head, 3);

ListNode.insertAtTail(head, 0);

head = ListNode.reverseList(head);

ListNode.printList(head);
// Output: 3 -> 2 -> 1
