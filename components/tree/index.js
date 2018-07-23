import React from 'react';
// import { Tree, Spin } from 'antd';
import Tree from 'antd/lib/tree';
import 'antd/lib/tree/style/css';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/css';

const { TreeNode } = Tree;
const DDTree = ({
  selectTree,
  dataSource,
  title,
  onSelect,
  loading,
  ...treeProps
}) => {
  selectTree = selectTree || {};
  dataSource = dataSource || [];
  // // 产生keys
  // const genKeys = (prefix, nodes) => {
  //   for (let i = 0; i < nodes.length; i++) {
  //     nodes[i].key = `${prefix}-${i}`
  //     genKeys(nodes[i].key, nodes[i].children)
  //   }
  // }
  // genKeys(dataSource)
  const getTitle = (item) => {
    if (typeof title === 'function') {
      return title(item);
    }
    return item[title || 'title'];
  };
  const genTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={getTitle(item)} disabled={item.disabled} key={`${item.key}`}>
          {genTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return (<TreeNode title={getTitle(item)} disabled={item.disabled} key={`${item.key}`} />);
  });
  const getTreeKeys = (nodes) => {
    if (!nodes || nodes.length === 0) {
      return [];
    }
    const keys = [];
    nodes.forEach((node) => {
      keys.push(node.key);
      const childKeys = getTreeKeys(node.children);
      if (childKeys && childKeys.length > 0) {
        childKeys.forEach(child => keys.push(child));
      }
    });
    return keys;
  };

  const getTreeData = (key, nodes, equalObj) => {
    if (!nodes || nodes.length === 0) {
      return null;
    }
    let obj = null;
    nodes.every((node) => {
      if ((equalObj && node.data === key) || (!equalObj && node.key === key)) {
        obj = node;
        return false;
      }
      obj = getTreeData(key, node.children, equalObj);
      if (obj) {
        return false;
      }
      return true;
    });
    return obj;
  };

  treeProps = {
    showLine: true,
    defaultExpandAll: true,
    expandedKeys: getTreeKeys(dataSource),
    selectedKeys: [(getTreeData(selectTree, dataSource, true) || {}).key],
    onSelect(keys) {
      if (!keys || keys.length === 0) {
        const obj = getTreeData(selectTree, dataSource, true);
        onSelect(obj.data, obj);
      } else {
        const obj = getTreeData(keys[0], dataSource);
        onSelect(obj.data, obj);
      }
    },
    ...treeProps,
  };

  if (treeProps.defaultExpandAll) {
    delete treeProps.expandedKeys;
  }

  const treeStyle = {
    height: '100%',
    overflowY: 'auto',
  };

  if (loading) {
    return <Spin spinning />;
  }

  return (
    dataSource.length === 0 ?
      <span>暂无数据</span> :
      <Tree
        {...treeProps}
        style={treeStyle}
      >
        {genTreeNodes(dataSource)}
      </Tree>
  );
};

export default DDTree;
