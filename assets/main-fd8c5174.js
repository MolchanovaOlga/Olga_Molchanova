(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))r(A);new MutationObserver(A=>{for(const e of A)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(A){const e={};return A.integrity&&(e.integrity=A.integrity),A.referrerPolicy&&(e.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?e.credentials="include":A.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(A){if(A.ep)return;A.ep=!0;const e=a(A);fetch(A.href,e)}})();document.addEventListener("DOMContentLoaded",h);function h(){document.body.classList.add("ready")}(()=>{const o=document.querySelector("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),a=document.querySelector("[data-modal]");o.addEventListener("click",r),t.addEventListener("click",r);function r(){a.classList.toggle("is-hidden")}})();const y="/OMolchanova_Front_end_Developer/assets/gallery-mob-1x-ce6aebb1.jpg",v="/OMolchanova_Front_end_Developer/assets/gallery-mob-2x-e4fd32aa.jpg",B="/OMolchanova_Front_end_Developer/assets/gallery-tabl-desk-1x-dc815428.jpg",S="/OMolchanova_Front_end_Developer/assets/gallery-tabl-desk-2x-d0525264.jpg",M="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCACpAScDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAMEBQIGAQf/xAA7EAACAgIBAgMEBgkDBQEAAAAAAQIDBBEFEiETFDFBUVNhBlJxgZPRFSIzNHORobGyIzKSB0JicnWC/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABURAQEAAAAAAAAAAAAAAAAAAABB/9oADAMBAAIRAxEAPwD9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQvLojJxdsdp6a36DzeP8AFiBMCHzeP8WI83j/ABYgTAh83j/FiPN4/wAWIEwIfN4/xYjzeP8AFiBMCHzeP8WI83j/ABYgTAh83j/FiPN4/wAWIEwIfN4/xYjzeP8AFiBMCHzeP8WJ9hk0zmoRti5P0W/UCUEdt9VEeq2ain7yH9I4nx4/1AtAq/pHE+PH+o/SOJ8eP9QLQIqcmm/fhWRlr10SgAAAAAAAAAAAAAAAAAAAAAFPE/ZT/i2f5yI7eRx6bnVY5Rltdul9977/AGdmSYn7Kf8AFs/zkRT42iyyU5ucnKfX3l7da19mvYB3HOolZGvqkrJTdai4tPaj1f2Pn6Qx+qUdz/VmoPUH2bet/ZtNHMeMx063JSm4Sck5P12mnv3+r9QuMx1Ypx6o6l1aT7e3tr3d3/MDqzkKKp2wk5OVS3NKLelpN/0a/mdW5lVM+iSm24uS1FvaWt/3RFPi8aU5SScOrXaPZdtez09i/kd34FeROcpzsXXFRaT7a3vX5r2gdPNoXRuTUZx6lLT16N+v2JktNsL6K7q3uFkVKL+TW0Qzwq7LVZOU5NR6NN9tb393s9PciWimGPRXTXvoriox299kBIAAAAAAAAQXfvOJ/Ff+Eichu/ecT+K/8JAZ/Oftql7OlmNO6MLY16blLv7DZ5xPxanrt0tGNZVG1rqb0u+t9mB8jkVyjGW2lJ6W4s+xvrnNRi22967PXY5li1Scd7/Ve139O+zqNMYuGtrp2l394Gnw/wC/r/1Z6E89w6fn18os9CAAAAAAAAAAAAAAAAAAAAAAV5YVMpyl/qRcntqFsorf2JnzyNP1r/x5/mWQBW8jT9a/8ef5jyNP1r/x5/mWQBW8jT9a/wDHn+Y8jT9a/wDHn+ZZAFbyNP1r/wAef5jyNP1r/wAef5lkAVvI0/Wv/Hn+Y8jT9a/8ef5lkAVvI0/Wv/Hn+Y8jT9a/8ef5lkAVvI0/Wv8Ax5/mPI0/Wv8Ax5/mWQBW8jT9a/8AHn+Z1DDprsjNdblH067JS1/Nk4A4sqrtj02QUl7mtkXkcX4Ff/EsACv5HF+BX/xHkcX4Ff8AxLAAjroqp34dcY79dLRIAAAAAAAAAAAAAAAAAAAAAAAZnJc5icZfVjTjfflWpyhj49Tsm4r1lpei+b0jnG5/EzMC/KxoZFkseXRbjqmSuhLt+q4PT332UeN0vpzzvi/tXRjeHv18PU/T5dXUMbT/AOoXIeD/ALFx1Cv16dfXPp38+n+mgNPieXo5jHtuohdX4VsqZwuh0SjJa2mvvNA899FvXm//AKt39onoQMXK+k2Jj5F1NeNn5PgPV08fFnOMH7VvXd/JbJbOexv0fj52LTk52PkLcHiUub172vZ95zzHLvCdeHh1eZ5PIT8Gjekl7Zzf/bBe1/cu53w/FviOEpwIXKdsIycrXHtKcm5N6922+wEXGfSPG5TkrsCvFzab6a1ZYsihwUU3pd/e+/b5GyeT4BZnB8yuGz5UZVubCzLWbXFxnZKLipKcW37JRSaetLWlo9YBU5PkKOK4+7OyerwaVuXRHbffWkva+5UwedWdlRoXG8lRtN9eRjOEF953z/Fz5jiLcGGQseU5QkrHDrScZKXptb9PeZ3nuZ4rlePxeRuw8zGzbHTGymmVNkJqLktxcpKS1F+mtAW7/pLiV5N9FGPm5csd9N0sbHlONcvXW/a/kts0MDPxuTwq8zDtVtFi3GSTXy00+6a9z9DyXEV83kPlMnhcnBx8G7LudUMuqVs1YpOM5bjKOouSbSe3/Y1PoY4x4B0OLV9GRdXkty6lK7rbnJPS7NttdlrehB6IA+P0AwI/SzHtlZ4HG8rkVwsnX4lWK5QbjJxen7e6Zb5LnqOMy6MWWPl5F90JWRrxqXY1GLSbfu7yRieS576McJfbi8hgZmNjKy90XYsq5SjtzklNTaT7vu4l27j8zk8/C53jeQqxZPD8Pw78V27jNxn7Jx0+yA1+Oz1yFErVi5WP0y6ejJq8OT7J7S93cuGLwfJZmVlZ+ByMaPN4U4KVmOmoWRlHqi0m24v12tv7e5tAAAAAAAAAAAAAAAAAAAAAAAAAAABm8lweJyd1V9ruqyak1Xfj2yrsSfrHafdPXo+xJxnE4nE0zrxYS3ZPrtssm5zsl9aUn3b7FfkMq6rKtrruthJUxlTCFfUpz3Lafb5R9q9SGfM31XW9WNOVVb030NPbfSku73t9Pu7PYGjhcfRgeY8BNeYulfZt73N63/Ytv0KGBmX33303wUZVNbcYvp9X6Sb7+nuWt+0v+wDAu+ieFbyeTyEcvkacjJ14kqcucE0lpLSfZL3E1n0bw7sWqm2/NnOmTlVkPKn40G/XU096+XoLsvk657hjxnWrppak+qUVCTS109u6S3sT5e6qucnV4i6Z+HOFckpySjpa7tesl/8AkCXjuBw+Oy7MuMr78uceh35N0rZqO99KbfZb76RqGTXyGV5qqFtKjGy2cUowbaSk4pvbXsW99/X73qgVeR43F5TGVGVCTipKcZQnKEoSXo4yi00/sKWH9HMPEzYZkrcvKyK4uNU8rInb4afr0pvSb9r9TjLyeThZnworcor9hPo30agm9+/bfb5kkMzN8acfB/04TSblFtyUrZR7P2aik/b6/eBxb9GcKWRddRfm4jvk5WwxcmdcZyfrLpT0m/etM0OP4/F4vDhiYdSqphvUU29tvbbb7tt922Zq5bKtlT0UuMUoeNuuT/WcZ7gn21pxit/MUcvl2So8THcY2TUXqtuSfbtrfZLb2/6AbhzOEbIShJJxktNP2o6MnPy8nGzl4anbBw/VprX6zl39dx9PT2rXzAqv6HcZKvwJWZ0sPf7pLMsdLXu6W/8Ab/4+nyLWb9HsPMyllKzKxcjpUHZi3yqcor0TSenr5o4o5PJsdSlWoRk2lJ1t9T7dtJvT7vu37P5KuRzr1BQqgm11SlKEtQfS2469rT0t/P7gLfF8TicRROvFjPdk/Etsssc52S1rqlJ7bfZF48/byua7anCrw0nJzrdcm4x6ezb9O/u7fb662sS534tdsoyi5R21KPS/5bf9wJgAAAAAAAAAAAAAAAAAAAAAAAAAAOJ1V2ShKcIycHuLa30v3o7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z",x="/OMolchanova_Front_end_Developer/assets/timer-mob-2x-3ece2ce9.jpg",P="data:image/jpeg;base64,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",F="/OMolchanova_Front_end_Developer/assets/timer-tabl-desk-2x-e67f03dd.jpg",k="/OMolchanova_Front_end_Developer/assets/web-studio-mob-1x-9d8366a2.jpg",T="/OMolchanova_Front_end_Developer/assets/web-studio-mob-2x-752ff49a.jpg",w="/OMolchanova_Front_end_Developer/assets/web-studio-tabl-desk-1x-5c1a151b.jpg",U="/OMolchanova_Front_end_Developer/assets/web-studio-tabl-desk-2x-03c54984.jpg",p=[{name:"Gallery",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.",descriptionEN:"The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-12/",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-12",imageMobBig:`${v}`,imageMobSmall:`${y}`,imageTablDeskBig:`${S}`,imageTablDeskSmall:`${B}`},{name:"Timer",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок розроблений для зворотного відліку часу до певної дати в майбутньому з використанням бібліотек Flatpickr та iziToast.",descriptionEN:"The application is created to count down the time to a certain date in the future using the Flatpickr and iziToast libraries.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-10/1-timer.html",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-10/blob/main/src/js/1-timer.js",imageMobBig:`${x}`,imageMobSmall:`${M}`,imageTablDeskBig:`${F}`,imageTablDeskSmall:`${P}`},{name:"WebStudio",technologies:"HTML, JS, SCSS, SASS",descriptionUA:"Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.",descriptionEN:"The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/",urlOfGithub:"https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk",imageMobBig:`${T}`,imageMobSmall:`${k}`,imageTablDeskBig:`${U}`,imageTablDeskSmall:`${w}`}],O="/OMolchanova_Front_end_Developer/assets/focus-frame-mob-1x-cf4c5925.jpg",V="/OMolchanova_Front_end_Developer/assets/focus-frame-mob-2x-ef49ac85.jpg",D="/OMolchanova_Front_end_Developer/assets/focus-frame-tabl-desk-1x-3ce77bfc.jpg",H="/OMolchanova_Front_end_Developer/assets/focus-frame-tabl-desk-2x-0857f174.jpg",L="/OMolchanova_Front_end_Developer/assets/energy-flow-mob-1x-54b92ec9.jpg",q="/OMolchanova_Front_end_Developer/assets/energy-flow-mob-2x-15d621cf.jpg",N="/OMolchanova_Front_end_Developer/assets/energy-flow-tabl-desk-1x-d6567727.jpg",W="/OMolchanova_Front_end_Developer/assets/energy-flow-tabl-desk-2x-5a896607.jpg",b=[{name:"Energy Flow",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для бажаючих мати гарну фізичну форму з адаптивним дизайном, мотивуючою цитатою дня, пошуком за ключовим словом, можливістю додати вправу до улюблених, модальними вікнами, формами та пагінацією.<br>Роль: розробник модального вікна вправи та частково модального вікна рейтингу.",descriptionEN:"The website is created for fitness enthusiasts with responsive design, motivational quote of the day, keyword search, option to add exercise to favorites, modal windows, forms and pagination.<br>Role: developer of exercise modal and partly of rating modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://karolinataran.github.io/project-dev-hunters/",urlOfGithub:"https://github.com/MolchanovaOlga/dev-hunters-team-project-js",imageMobBig:`${q}`,imageMobSmall:`${L}`,imageTablDeskBig:`${W}`,imageTablDeskSmall:`${N}`},{name:"Focuse Frame",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для школи фотографії з адаптивним дизайном, бургер-меню, модальним вікном, формами та анімаціями.<br>Роль: розробник мобільного модального вікна.",descriptionEN:"The website is created for photography school with responsive design, burger menu, modal window, forms and animations.<br>Role: developer of  mobile modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://maxdemo1.github.io/project_First_Flight/",urlOfGithub:"https://github.com/MolchanovaOlga/First_Flight-team-project",imageMobBig:`${V}`,imageMobSmall:`${O}`,imageTablDeskBig:`${D}`,imageTablDeskSmall:`${H}`}],l=document.querySelector('input[value="team-projects"]'),s=document.querySelector('input[value="individual-projects"]'),c=document.querySelector(".portfolio-projects-list");try{l.parentNode.classList.contains("selected-radio-label")&&(i(b),s.disabled=!1,l.disabled=!0),s.classList.contains("selected-radio-label")&&(i(p),l.disabled=!1,s.disabled=!0),l.addEventListener("click",E),s.addEventListener("click",X)}catch(o){console.log(o)}async function E(){j(),c.innerHTML="",i(b),s.disabled=!1,l.disabled=!0}async function X(){j(),c.innerHTML="",i(p),l.disabled=!1,s.disabled=!0}function i(o){const t=o.map(({name:a,technologies:r,descriptionUA:A,projectUA:e,urlOfSite:n,urlOfGithub:u,imageMobBig:f,imageMobSmall:g,imageTablDeskBig:m,imageTablDeskSmall:d})=>`
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${n}" target="_blank">
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          ${g} 1x,
          ${f} 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            ${d} 1x,
            ${m} 2x
            "
          />
          <img class="portfolio-projects-image" src="${d}" alt="${a} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${u}" target="_blank">
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="/OMolchanova_Front_end_Developer/assets/sprite-0f33a940.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${e}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3 class="portfolio-project-title">${a}</h3>
    <p class="portfolio-project-technologies">${r}</p>
    <div class="portfolio-project-description-container" id="scrollTry">
      <p class="portfolio-project-description">${A}</p>
    </div>
    </div>
  </li>
    `).join("");c.insertAdjacentHTML("beforeend",t),z()}function z(){document.querySelectorAll(".portfolio-project-description-container").forEach(t=>{t.querySelector(".portfolio-project-description").clientHeight>t.clientHeight&&t.classList.add("scroll-on")})}function j(){l.parentNode.classList.toggle("selected-radio-label"),s.parentNode.classList.toggle("selected-radio-label")}const G="/OMolchanova_Front_end_Developer/assets/Olga_Molchanova_Front_end_Developer-9179e2c7.pdf";document.getElementById("link-pdf").href=G;
//# sourceMappingURL=main-fd8c5174.js.map
