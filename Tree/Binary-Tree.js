class TreeNode {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}
function insertNode(node, data) {
    if (node === null)
        return new TreeNode(data);
    if (data < node.data) {
        node.left = insertNode(node.left, data);
    }
    else {
        node.right = insertNode(node.right, data);
    }
    return node;
}
function inorder(node, ans) {
    if (node !== null) {
        inorder(node.left, ans);
        ans.push(node.data);
        inorder(node.right, ans);
    }
}
function preorder(node, ans) {
    if (node !== null) {
        ans.push(node.data);
        preorder(node.left, ans);
        preorder(node.right, ans);
    }
}
function postorder(node, ans) {
    if (node !== null) {
        postorder(node.left, ans);
        postorder(node.right, ans);
        ans.push(node.data);
    }
}
var root = null;
root = insertNode(root, 3);
root = insertNode(root, 1);
root = insertNode(root, 2);
root = insertNode(root, 4);
root = insertNode(root, 7);
root = insertNode(root, 5);
root = insertNode(root, 6);
var ans = [];
preorder(root, ans);
console.log(ans);
