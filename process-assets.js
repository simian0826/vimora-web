import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 需要处理的目录
const DIRS_TO_PROCESS = ['src/data', 'src/pages'];
// 匹配以 /assets/images 开头但不以 @/assets/images 开头的路径
const ASSETS_REGEX = /(?<!@)\/assets(\/images\S*)/g;
// 要添加的域名前缀
const DOMAIN_PREFIX = 'https://fileprod.obs.cn-east-3.myhuaweicloud.com/mail';

async function processFile(filePath) {
    try {
        // 读取文件内容
        const content = await fs.readFile(filePath, 'utf-8');
        
        // 替换匹配的内容，使用捕获组来保留 /images 部分
        const newContent = content.replace(ASSETS_REGEX, (match, imagesPath) => {
            return DOMAIN_PREFIX + imagesPath;
        });

        // 如果内容有变化，写入文件
        if (content !== newContent) {
            await fs.writeFile(filePath, newContent, 'utf-8');
            console.log(`已处理文件: ${filePath}`);
        }
    } catch (error) {
        console.error(`处理文件 ${filePath} 时出错:`, error);
    }
}

async function processDirectory(dirPath) {
    try {
        const entries = await fs.readdir(dirPath, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);
            
            if (entry.isDirectory()) {
                // 递归处理子目录
                await processDirectory(fullPath);
            } else {
                // 处理文件
                await processFile(fullPath);
            }
        }
    } catch (error) {
        console.error(`处理目录 ${dirPath} 时出错:`, error);
    }
}

async function main() {
    try {
        // 获取项目根目录的绝对路径
        const rootDir = process.cwd();
        
        // 处理指定的目录
        for (const dir of DIRS_TO_PROCESS) {
            const absolutePath = path.join(rootDir, dir);
            // 检查目录是否存在
            try {
                await fs.access(absolutePath);
                await processDirectory(absolutePath);
            } catch (error) {
                if (error.code === 'ENOENT') {
                    console.warn(`警告: 目录 ${dir} 不存在，已跳过`);
                } else {
                    throw error;
                }
            }
        }
        console.log('所有文件处理完成！');
    } catch (error) {
        console.error('处理过程中出错:', error);
    }
}

main(); 