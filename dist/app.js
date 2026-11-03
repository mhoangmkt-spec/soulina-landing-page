const dialog=document.querySelector('#visit');
document.addEventListener('click',event=>{if(event.target.closest('.visit-open'))dialog.showModal();});
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
const styleTabs=['gallery','poster','journey'];
if(document.querySelector('#style-gallery')){
  const nav=document.querySelector('.preview nav');
  const tabLinks=Array.from(nav.querySelectorAll('a'));
  tabLinks.forEach((tab,index)=>{tab.id='tab-'+styleTabs[index];tab.setAttribute('role','tab');tab.setAttribute('aria-controls','style-panel');});
  const selectStyle=()=>{
    const name=location.hash.slice(1);
    const index=styleTabs.indexOf(name);
    if(index<0&&name)return;
    const active=index<0?0:index;
    const template=document.querySelector('#style-'+styleTabs[active]);
    document.querySelector('.brand-header').remove();
    document.querySelector('main').replaceWith(template.content.cloneNode(true));
    document.body.className='style-'+(active+1);
    document.title='SOULINA · '+template.dataset.title+' · Design preview';
    tabLinks.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===active));tab.tabIndex=i===active?0:-1;if(i===active)tab.setAttribute('aria-current','page');else tab.removeAttribute('aria-current');});
    window.scrollTo({top:0,behavior:'instant'});
  };
  nav.addEventListener('keydown',event=>{const current=tabLinks.indexOf(document.activeElement);if(current<0)return;let next;if(event.key==='ArrowRight')next=(current+1)%3;else if(event.key==='ArrowLeft')next=(current+2)%3;else if(event.key==='Home')next=0;else if(event.key==='End')next=2;else return;event.preventDefault();tabLinks[next].focus();location.hash=styleTabs[next];});
  window.addEventListener('hashchange',selectStyle);
  selectStyle();
}
