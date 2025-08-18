// 1472. Design Browser History
// Medium
// Topics
// premium lock iconCompanies
// Hint

// You have a browser of one tab where you start on the homepage and you can visit another url, get back in the history number of steps or move forward in the history number of steps.

// Implement the BrowserHistory class:

//     BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
//     void visit(string url) Visits url from the current page. It clears up all the forward history.
//     string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
//     string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.curr = new ListNode(homepage);
  }

  visit(url) {
    this.curr.next = new ListNode(url, this.curr, null);
    this.curr = this.curr.next;
  }
  back(steps) {
    while (steps > 0 && this.curr.prev !== null) {
      this.curr = this.curr.prev;
      steps--;
    }
    return this.curr.val;
  }
  forward(steps) {
    while (steps > 0 && this.curr.next !== null) {
      this.curr = this.curr.next;
      steps--;
    }
    return this.curr.val;
  }
}

const browserHistory = new BrowserHistory("leetcode.com");
browserHistory.visit("google.com");
browserHistory.visit("facebook.com");
browserHistory.visit("youtube.com");
console.log(browserHistory.back(1)); // Output: "facebook.com"
console.log(browserHistory.back(1)); // Output: "google.com"
console.log(browserHistory.forward(1)); // Output: "facebook.com"
browserHistory.visit("linkedin.com");
console.log(browserHistory.forward(2)); // Output: "linkedin.com"
console.log(browserHistory.back(2)); // Output: "google.com"
console.log(browserHistory.back(7)); // Output: "leetcode.com"
console.log(browserHistory);
