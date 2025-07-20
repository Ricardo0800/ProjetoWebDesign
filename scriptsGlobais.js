const menuBtn = document.querySelector(".fa-bars");
const aside = document.querySelector("aside");

menuBtn.addEventListener("click", () => {
  aside.classList.toggle("mostrar");
});

function navegar(pagina, event) {
  event.preventDefault();
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.getElementById("conteudo-principal").innerHTML = html;
      
      // Executa scripts específicos da página após carregar o conteúdo
      if (pagina.includes('calendario.html')) {
        initializeCalendar();
      }
    })
    .catch(error => {
      console.error('Erro ao carregar a página:', error);
      document.getElementById("conteudo-principal").innerHTML = '<p>Erro ao carregar a página.</p>';
    });
}

// Função para inicializar o calendário
function initializeCalendar() {
  const btn = document.getElementById('ver-calendario');
  const calendario = document.getElementById('calendario-interativo');
  
  if (btn && calendario) {
    btn.addEventListener('click', function() {
      if (calendario.style.display === 'none' || calendario.style.display === '') {
        calendario.style.display = 'block';
        btn.textContent = '❌ Fechar Calendário Interativo';
        
        // Inicializa o FullCalendar se ainda não foi inicializado
        if (!calendario.hasAttribute('data-calendar-initialized')) {
          const calendarEl = document.getElementById('calendar');
          if (calendarEl) {
            const calendar = new FullCalendar.Calendar(calendarEl, {
              initialView: 'dayGridMonth',
              locale: 'pt-br',
              headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              },
              events: [
                {
                  title: 'Início das Aulas',
                  date: '2025-02-03'
                },
                {
                  title: 'Carnaval',
                  start: '2025-03-03',
                  end: '2025-03-05'
                },
                {
                  title: 'Páscoa',
                  date: '2025-04-20'
                },
                {
                  title: 'Tiradentes',
                  date: '2025-04-21'
                },
                {
                  title: 'Dia do Trabalhador',
                  date: '2025-05-01'
                },
                {
                  title: 'Corpus Christi',
                  date: '2025-06-19'
                },
                {
                  title: 'Férias de Julho',
                  start: '2025-07-01',
                  end: '2025-07-31'
                },
                {
                  title: 'Independência do Brasil',
                  date: '2025-09-07'
                },
                {
                  title: 'Nossa Senhora Aparecida',
                  date: '2025-10-12'
                },
                {
                  title: 'Finados',
                  date: '2025-11-02'
                },
                {
                  title: 'Proclamação da República',
                  date: '2025-11-15'
                },
                {
                  title: 'Natal',
                  date: '2025-12-25'
                }
              ]
            });
            calendar.render();
            calendario.setAttribute('data-calendar-initialized', 'true');
          }
        }
      } else {
        calendario.style.display = 'none';
        btn.textContent = '📅 Ver Calendário Interativo';
      }
    });
  }
}

const menuLinks = document.querySelectorAll("nav a");
const sidebarLinks = document.querySelectorAll("aside a");

// Junta todos os links em um só array
const allLinks = [...menuLinks, ...sidebarLinks];

allLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    // Remove a classe 'is-clicked' de todos os links
    allLinks.forEach(l => l.classList.remove("is-clicked"));

    // Adiciona a classe ao item clicado
    this.classList.add("is-clicked");

    // Chama a função SPA com a página correta
    const href = this.getAttribute("href");
    navegar(href, event);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  navegar("pages/inicio.html", { preventDefault: () => {} });
});
