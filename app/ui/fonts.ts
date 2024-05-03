// 创建一个名为`fonts.ts`的文件，并将其放置在`app/ui`目录下。
// 导入`next/font`模块中的`Inter`字体。
import {Inter,Lusitana} from 'next/font/google';
// 导出一个名为`inter`的变量，该变量是从`next/font/google`中导入的`Inter`字体。
export const inter = Inter({subsets:['latin']});
export const lusitana = Lusitana({weight:['400','700'],subsets:['latin']});