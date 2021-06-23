function levelOrder(root) {
  const res = [];
  const queue = [root];

  if (root === null) return res;

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }

    res.push(currentLevel);
  }

  return res;
}

module.exports = levelOrder;
