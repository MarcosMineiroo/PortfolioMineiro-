/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })

}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass=== 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
} )

/*==================== QUALIFICACAO TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach( tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')

        })

        target.classList.add('qualification__active')

        tabs.forEach(t =>{
            t.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')


    })
})

/*==================== SERVICOS MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

// Os modais vão para o <body>: assim ocupam a tela toda, e não ficam presos dentro do card
modalViews.forEach(m => document.body.appendChild(m))

const closeServiceModals = () =>{
    modalViews.forEach(m => m.classList.remove('active-modal'))
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        closeServiceModals()                       // fecha qualquer outro aberto
        modalViews[i].classList.add('active-modal')
    })
})

modalCloses.forEach(btn => btn.addEventListener('click', closeServiceModals))

// Fecha ao clicar fora da caixa
modalViews.forEach(m => m.addEventListener('click', (e) =>{ if(e.target === m) closeServiceModals() }))

// Fecha com Esc e ao rolar a página para cima ou para baixo
document.addEventListener('keydown', (e) =>{ if(e.key === 'Escape') closeServiceModals() })
window.addEventListener('scroll', () =>{
    if(document.querySelector('.services__modal.active-modal')) closeServiceModals()
}, { passive: true })

/*==================== PROJETOS: FILTRO POR ÁREA ====================*/
const workFilters = document.querySelectorAll('.work__filter'),
      workCards = document.querySelectorAll('.work__card')

workFilters.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const filter = btn.dataset.filter

        workFilters.forEach(b => b.classList.remove('work__filter--active'))
        btn.classList.add('work__filter--active')

        workCards.forEach(card =>{
            const categories = card.dataset.category.split(' ')
            const show = filter === 'all' || categories.includes(filter)
            card.classList.toggle('is-hidden', !show)
        })
    })
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtem o tema atual da interface validando a classe do body
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Valida se o tema selecionado anteriormente existe
if (selectedTheme) {
  // Se sim, ele adiciona o tema selecionado ao body
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  // Se sim, ele adiciona o icone selecionado ao botão
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Altera o tema da interface ao clicar no botão
themeButton.addEventListener('click', () => {
    // Adiciona ou remove o tema
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Salva o tema selecionado e o icone selecionado
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




/*==================== MODAL CONTATE-ME ====================*/
const contactModal = document.getElementById('contact-modal')

if(contactModal){
    const openContact = (e) =>{
        if(e) e.preventDefault()
        contactModal.classList.add('is-open')
        contactModal.setAttribute('aria-hidden', 'false')
        document.body.classList.add('cmodal-lock')
    }
    const closeContact = () =>{
        contactModal.classList.remove('is-open')
        contactModal.setAttribute('aria-hidden', 'true')
        document.body.classList.remove('cmodal-lock')
    }

    document.querySelectorAll('.js-contact-open').forEach(btn => btn.addEventListener('click', openContact))
    contactModal.querySelector('.cmodal__close').addEventListener('click', closeContact)
    // Fecha ao clicar fora da caixa
    contactModal.addEventListener('click', (e) =>{ if(e.target === contactModal) closeContact() })
    // Fecha com a tecla Esc
    document.addEventListener('keydown', (e) =>{ if(e.key === 'Escape') closeContact() })
}

/*==================== AMPLIAR IMAGEM DO PROJETO ====================*/
const lightbox = document.getElementById('lightbox')

if(lightbox){
    const lbImg = lightbox.querySelector('.lightbox__img')
    const closeLb = () =>{
        lightbox.classList.remove('is-open')
        lightbox.setAttribute('aria-hidden', 'true')
        document.body.classList.remove('cmodal-lock')
    }
    document.querySelectorAll('.work__banner--img img').forEach(img =>{
        img.addEventListener('click', () =>{
            lbImg.src = img.dataset.full || img.src
            lbImg.alt = img.alt
            lightbox.classList.add('is-open')
            lightbox.setAttribute('aria-hidden', 'false')
            document.body.classList.add('cmodal-lock')
        })
    })
    lightbox.addEventListener('click', closeLb)
    document.addEventListener('keydown', (e) =>{ if(e.key === 'Escape') closeLb() })
}

/*=============================================================
  ANIMAÇÕES
=============================================================*/
{
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.classList.add('js-anim')

    /*===== Elementos surgindo ao rolar =====*/
    const revealGroups = [
        ['.section__title, .section__subtitle', ''],
        ['.about__img', 'reveal--left'],
        ['.about__data', 'reveal--right'],
        ['.skills__content', ''],
        ['.qualification__tabs, .qualification__data', ''],
        ['.services__content', ''],
        ['.work__filters', ''],
        ['.work__card', ''],
        ['.project__container, .project__data', ''],
        ['.footer__container > *', '']
    ]
    revealGroups.forEach(([sel, extra]) =>{
        document.querySelectorAll(sel).forEach((el, i) =>{
            el.classList.add('reveal')
            if(extra) el.classList.add(extra)
            el.style.setProperty('--d', `${(i % 3) * 0.1}s`)
        })
    })

    const revealObserver = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible')
                revealObserver.unobserve(entry.target)
            }
        })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

    /*===== Barra de progresso de leitura =====*/
    const progress = document.getElementById('scroll-progress')
    const updateProgress = () =>{
        const max = document.documentElement.scrollHeight - window.innerHeight
        if(progress) progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    /*===== Texto digitando no topo =====*/
    const typed = document.querySelector('.typed')
    if(typed && !reduceMotion){
        const words = typed.dataset.words.split('|')
        let w = 0, c = words[0].length, deleting = true
        const tick = () =>{
            const word = words[w]
            c += deleting ? -1 : 1
            typed.textContent = word.slice(0, c)
            let delay = deleting ? 45 : 85
            if(!deleting && c === word.length){ deleting = true; delay = 1600 }
            else if(deleting && c === 0){ deleting = false; w = (w + 1) % words.length; delay = 300 }
            setTimeout(tick, delay)
        }
        setTimeout(tick, 2000)
    }

    /*===== Números do "Sobre" contando =====*/
    const counters = document.querySelectorAll('.about__info-title')
    const counterObserver = new IntersectionObserver((entries) =>{
        entries.forEach(entry =>{
            if(!entry.isIntersecting) return
            const el = entry.target
            const original = el.textContent.trim()
            const target = parseInt(original, 10)
            const pad = original.match(/^\d+/)[0].length
            const suffix = original.replace(/^\d+/, '')
            const start = performance.now(), duration = 1400
            const step = (now) =>{
                const t = Math.min((now - start) / duration, 1)
                const eased = 1 - Math.pow(1 - t, 3)
                el.textContent = String(Math.round(target * eased)).padStart(pad, '0') + suffix
                if(t < 1) requestAnimationFrame(step)
            }
            if(!reduceMotion) requestAnimationFrame(step)
            counterObserver.unobserve(el)
        })
    }, { threshold: 0.6 })
    counters.forEach(el => counterObserver.observe(el))

    /*===== Cards com efeito 3D ao passar o mouse =====*/
    if(!reduceMotion && window.matchMedia('(hover: hover)').matches){
        document.querySelectorAll('.work__card').forEach(card =>{
            card.addEventListener('mousemove', (e) =>{
                const r = card.getBoundingClientRect()
                const x = (e.clientX - r.left) / r.width - 0.5
                const y = (e.clientY - r.top) / r.height - 0.5
                card.style.transform = `rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`
            })
            card.addEventListener('mouseleave', () =>{ card.style.transform = '' })
        })
    }

    /*===== Cards aparecendo ao trocar o filtro =====*/
    document.querySelectorAll('.work__filter').forEach(btn =>{
        btn.addEventListener('click', () =>{
            let i = 0
            document.querySelectorAll('.work__card').forEach(card =>{
                card.classList.remove('pop')
                if(card.classList.contains('is-hidden')) return
                card.classList.add('is-visible')
                void card.offsetWidth
                card.style.setProperty('--pd', `${(i++) * 0.06}s`)
                card.classList.add('pop')
            })
        })
    })
}

/*==================== FUNDO: MALHA DE DADOS ====================*/
/* Uma malha de pontos ligados (plexus). Onde o mouse passa, a malha
   "levanta" como um relevo. Se o mouse para, ondas saem do cursor. */
{
    const canvas = document.createElement('canvas')
    canvas.id = 'data-bg'
    canvas.setAttribute('aria-hidden', 'true')
    document.body.prepend(canvas)
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const DENSITY = 3600    // px² por ponto (menor = mais pontos)
    const LINK = 125        // distância máxima de ligação
    const RADIUS = 210      // alcance do mouse
    const LIFT = 26         // quanto a malha "levanta" (px)
    const IDLE = 450        // ms parado para começar as ondas
    const WAVE_EVERY = 1400 // ms entre ondas
    const WAVE_SPEED = 0.32 // px por ms
    const WAVE_MAX = 380    // raio máximo da onda

    let W = 0, H = 0, dpr = 1, pts = [], links = [], waves = []
    const mouse = { x: -9999, y: -9999, active: false, last: 0, lastWave: 0 }
    let running = false

    const isLight = () => document.body.classList.contains('dark-theme') // no template, essa classe é o tema claro

    function build(){
        dpr = Math.min(window.devicePixelRatio || 1, 2)
        W = window.innerWidth; H = window.innerHeight
        canvas.width = W * dpr; canvas.height = H * dpr
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        const n = Math.round((W * H) / DENSITY)
        pts = Array.from({ length: n }, () =>({
            bx: Math.random() * (W + 80) - 40,
            by: Math.random() * (H + 80) - 40,
            ox: 0, oy: 0, z: 0,               // deslocamento e "altura" atuais
            r: .8 + Math.random() * 1.2
        }))
        // liga cada ponto aos vizinhos mais próximos
        links = []
        const seen = new Set()
        pts.forEach((p, i) =>{
            const near = []
            pts.forEach((q, j) =>{
                if(i === j) return
                const d = Math.hypot(p.bx - q.bx, p.by - q.by)
                if(d < LINK) near.push([d, j])
            })
            near.sort((a, b) => a[0] - b[0]).slice(0, 5).forEach(([, j]) =>{
                const key = i < j ? i + '-' + j : j + '-' + i
                if(!seen.has(key)){ seen.add(key); links.push([i, j]) }
            })
        })
        draw(performance.now())
    }

    function draw(now){
        const light = isLight()
        const hue = light ? 222 : 205
        const lum = light ? 48 : 62
        let moving = false

        // ondas quando o mouse fica parado
        if(mouse.active && now - mouse.last > IDLE && now - mouse.lastWave > WAVE_EVERY){
            waves.push({ x: mouse.x, y: mouse.y, start: now })
            mouse.lastWave = now
        }
        waves = waves.filter(w => (now - w.start) * WAVE_SPEED < WAVE_MAX)

        for(const p of pts){
            let tx = 0, ty = 0, tz = 0
            if(mouse.active){
                const dx = p.bx - mouse.x, dy = p.by - mouse.y
                const d = Math.hypot(dx, dy) || 1
                if(d < RADIUS){
                    const k = 1 - d / RADIUS
                    const e = k * k * (3 - 2 * k)          // suavização
                    tx = dx / d * e * LIFT
                    ty = dy / d * e * LIFT - e * LIFT * .35 // empurra e "sobe"
                    tz = e
                }
            }
            for(const w of waves){
                const r = (now - w.start) * WAVE_SPEED
                const d = Math.hypot(p.bx - w.x, p.by - w.y)
                const band = 1 - Math.abs(d - r) / 34
                if(band > 0){
                    const fade = 1 - r / WAVE_MAX
                    tz = Math.max(tz, band * fade * .9)
                    ty -= band * fade * 8
                }
            }
            p.ox += (tx - p.ox) * .12
            p.oy += (ty - p.oy) * .12
            p.z  += (tz - p.z) * .14
            if(Math.abs(tx - p.ox) > .05 || Math.abs(ty - p.oy) > .05 || Math.abs(tz - p.z) > .005) moving = true
        }

        ctx.clearRect(0, 0, W, H)

        // ligações
        for(const [i, j] of links){
            const a = pts[i], b = pts[j]
            const ax = a.bx + a.ox, ay = a.by + a.oy, bx = b.bx + b.ox, by = b.by + b.oy
            const z = (a.z + b.z) / 2
            const d = Math.hypot(ax - bx, ay - by)
            const alpha = (light ? .17 : .16) * (1 - d / (LINK * 1.4)) + z * .6
            if(alpha <= .01) continue
            ctx.strokeStyle = `hsla(${hue}, 85%, ${lum + z * 12}%, ${Math.min(alpha, .9)})`
            ctx.lineWidth = .7 + z * .9
            ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke()
        }

        // pontos
        for(const p of pts){
            const x = p.bx + p.ox, y = p.by + p.oy
            const alpha = (light ? .42 : .45) + p.z * .55
            const size = p.r + p.z * 2.2
            if(p.z > .25){
                ctx.fillStyle = `hsla(${hue}, 90%, ${lum + 10}%, ${p.z * .18})`
                ctx.beginPath(); ctx.arc(x, y, size * 3.2, 0, Math.PI * 2); ctx.fill()
            }
            ctx.fillStyle = `hsla(${hue}, 90%, ${lum + p.z * 15}%, ${Math.min(alpha, 1)})`
            ctx.beginPath(); ctx.arc(x, y, size, 0, Math.PI * 2); ctx.fill()
        }

        // continua animando só enquanto há algo acontecendo
        if(!reduceMotion && !document.hidden && (moving || waves.length || mouse.active)){
            requestAnimationFrame(draw)
        }else{
            running = false
        }
    }

    function wake(){
        if(!running && !reduceMotion){ running = true; requestAnimationFrame(draw) }
    }

    build()
    window.addEventListener('resize', () =>{ clearTimeout(build._t); build._t = setTimeout(build, 200) })
    window.addEventListener('pointermove', (e) =>{
        mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true
        mouse.last = performance.now(); mouse.lastWave = mouse.last - WAVE_EVERY + IDLE
        wake()
    }, { passive: true })
    const leave = () =>{ mouse.active = false; wake() }
    document.documentElement.addEventListener('pointerleave', leave)
    window.addEventListener('blur', leave)
    window.addEventListener('pointerup', (e) =>{ if(e.pointerType === 'touch') leave() })
    // redesenha quando o tema muda
    new MutationObserver(() =>{ if(!running) draw(performance.now()) }).observe(document.body, { attributes: true, attributeFilter: ['class'] })
    document.addEventListener('visibilitychange', () =>{ if(!document.hidden) wake() })
}
