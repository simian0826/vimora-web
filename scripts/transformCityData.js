import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取源文件
const sourcePath = path.resolve(__dirname, '../src/data/全球各国省市数据.json');
const targetPath = path.resolve(__dirname, '../src/data/cityData.json');

// 递归处理数据
function transformData(data) {
  return data.map(item => {
    const newItem = {
      ...item,
      label: item.value.replace(/\d+/g, '') // 只在 label 中清理数字
    };

    // 处理 children
    if (Array.isArray(item.children)) {
      newItem.children = transformData(item.children);
    } else if (typeof item.children === 'object' && item.children !== null) {
      // 处理单个子对象
      newItem.children = [
        {
          ...item.children,
          label: item.children.value.replace(/\d+/g, '') // 只在 label 中清理数字
        }
      ];
    } else {
      // 如果没有 children，补全一个 children
      newItem.children = [{
        label: newItem.label,
        value: item.value // 保持原有 value
      }];
    }

    // 处理二级 children
    if (Array.isArray(newItem.children)) {
      newItem.children.forEach(child => {
        child.children = [{ // 只生成一个 children
          label: child.label,
          value: child.value // 保持原有 value
        }];
      });
    }

    return newItem;
  });
}

try {
  // 读取文件
  const jsonData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
  
  // 转换数据
  const transformedData = transformData(jsonData);
  
  // 写入新文件
  fs.writeFileSync(
    targetPath,
    JSON.stringify(transformedData, null, 2),
    'utf8'
  );
  
  console.log('数据转换完成！新文件已保存为: cityData.json');
} catch (error) {
  console.error('处理文件时出错:', error);
} 