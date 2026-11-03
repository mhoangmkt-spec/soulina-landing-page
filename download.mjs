import fs from 'node:fs/promises';
const base='https://bizweb.dktcdn.net/100/693/535/themes/1163287/assets/';
await fs.mkdir(new URL('./dist/assets/',import.meta.url),{recursive:true});
const names=['logo.png','slider_1.jpg','slider_2.jpg','slider_3.jpg','section_about_product_1.jpg','section_about_product_2.jpg','section_about_product_3.jpg','section_about_product_4.jpg','feedback_1_banner.jpg','feedback_2_banner.jpg','feedback_3_banner.jpg'];
for(const name of names){const r=await fetch(base+name);if(!r.ok)throw Error(name+': '+r.status);await fs.writeFile(new URL('./dist/assets/'+name,import.meta.url),Buffer.from(await r.arrayBuffer())); console.log(name);}
