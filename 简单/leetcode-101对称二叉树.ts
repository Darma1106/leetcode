/**
 * Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 */
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function func(left: TreeNode | null, right: TreeNode | null): boolean {
    if (left) {
        if (right && left.val == right.val) {
            return func(left.left, right.right) && func(left.right, right.left);
        }

        return false;
    }

    return !right;
}


function isSymmetric(root: TreeNode | null): boolean {
    return root ? func(root.left, root.right) : true;
};
