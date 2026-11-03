import fs from 'node:fs/promises';
import sharp from 'sharp';
const sources={
  'lacquer-workshop.webp':'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=395%2Cheight=400%2Cdpr=2/tour_img/f7ddce5c4c2f43a203faac3f57f25e428c4eecc053b35dc0c91c217b7300dffb.png',
  'painting-workshop.webp':'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=395%2Cheight=400%2Cdpr=2/tour_img/305774139d5d9286fc5aa63cc87bac29066cf8558ed2ac390846de8dced4cda3.jpg',
  'painting-detail.webp':'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=195%2Cheight=195%2Cdpr=2/tour_img/4586db9b47024fbc9762af3d5cced7c7a9edf5932c887162acbc1da2b5c93a9d.jpg'
};
for(const [name,url] of Object.entries(sources)){const response=await fetch(url);if(!response.ok)throw Error(name+': '+response.status);const data=await sharp(Buffer.from(await response.arrayBuffer())).webp({quality:88}).toBuffer();await fs.writeFile(new URL('./dist/assets/'+name,import.meta.url),data);console.log(name,data.length);}
