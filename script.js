// =============================================
// DATA — Default items pre-populated for Cultus Lake BC
// =============================================
const CATEGORIES = [
  { id: 'gear',          label: '⛺ Gear & Estrutura' },
  { id: 'food',          label: '🍳 Comida & Bebida' },
  { id: 'personal',      label: '🧴 Itens Pessoais' },
  { id: 'kids',          label: '🧸 Kids' },
  { id: 'entertainment', label: '🎮 Entretenimento' },
  { id: 'safety',        label: '🩹 Segurança & Saúde' },
  { id: 'cultus',        label: '💧 Cultus Lake Específico' },
];

const DEFAULT_ITEMS = [
  // --- GEAR ---
  { name: 'Barraca',               cat: 'gear',          note: 'Verificar hastes e piquetes' },
  { name: 'Sleeping bags',          cat: 'gear',          note: 'Um por pessoa' },
  { name: 'Isolante / sleeping pad', cat: 'gear',         note: '' },
  { name: 'Travesseiros de camping', cat: 'gear',         note: '' },
  { name: 'Lanterna de cabeça',     cat: 'gear',          note: 'Com pilhas reserva' },
  { name: 'Lanterna grande',        cat: 'gear',          note: '' },
  { name: 'Cadeiras de camping',    cat: 'gear',          note: '' },
  { name: 'Mesa dobrável',          cat: 'gear',          note: '' },
  { name: 'Fogareiro / camp stove', cat: 'gear',          note: '' },
  { name: 'Gás / cartucho de gás',  cat: 'gear',          note: '1 extra reserva' },
  { name: 'Cooler com gelo',        cat: 'gear',          note: 'O parque vende gelo' },
  { name: 'Panela + frigideira',    cat: 'gear',          note: '' },
  { name: 'Talheres e pratos',      cat: 'gear',          note: '' },
  { name: 'Abridor de latas / faca', cat: 'gear',         note: '' },
  { name: 'Detergente + esponja',   cat: 'gear',          note: '' },
  { name: 'Balde para lavar',       cat: 'gear',          note: '' },
  { name: 'Tarp / lona extra',      cat: 'gear',          note: 'Cultura de chuva no BC' },
  { name: 'Corda',                  cat: 'gear',          note: '10–15m para varal ou tarp' },
  { name: 'Piquetes extras',        cat: 'gear',          note: '' },
  { name: 'Saco de lixo grande',    cat: 'gear',          note: 'Mínimo 4' },

  // --- FOOD & DRINK ---
  { name: 'Ovos (pre-cozinhar em casa)', cat: 'food',      note: 'Omelete na frigideira = fácil' },
  { name: 'Bacon ou salsinha',      cat: 'food',          note: 'Café da manhã clássico de camping' },
  { name: 'Pão fatiado',            cat: 'food',          note: 'Toast na frigideira' },
  { name: 'Manteiga',               cat: 'food',          note: '' },
  { name: 'Granola + iogurte',      cat: 'food',          note: 'Café rápido sem fogo' },
  { name: 'Frutas resistentes',     cat: 'food',          note: 'Maçã, banana, uva' },
  { name: 'Pasta (macarrão)',        cat: 'food',          note: 'One-pot dinner rápido' },
  { name: 'Molho de tomate enlatado', cat: 'food',        note: '' },
  { name: 'Kielbasa / salsicha',    cat: 'food',          note: 'Foil packet + batata' },
  { name: 'Batatas pequenas',       cat: 'food',          note: 'Assadas no foil = zero louça' },
  { name: 'Hambúrgueres',           cat: 'food',          note: 'Clássico de campfire' },
  { name: 'Pão de hambúrguer',      cat: 'food',          note: '' },
  { name: 'Hot dogs',               cat: 'food',          note: '' },
  { name: 'Feijoada / chili enlatado', cat: 'food',       note: 'Backup fácil' },
  { name: 'Trail mix',              cat: 'food',          note: 'Snack no trilho Teapot Hill' },
  { name: 'Barras de cereal / proteína', cat: 'food',     note: '' },
  { name: 'Marshmallows',           cat: 'food',          note: 'S\'mores! Obrigatório' },
  { name: 'Chocolate + Graham crackers', cat: 'food',     note: 'S\'mores kit completo' },
  { name: 'Café / filtro ou moka',  cat: 'food',          note: '' },
  { name: 'Leite / creamer',        cat: 'food',          note: '' },
  { name: 'Água potável (galões)',  cat: 'food',          note: 'Westside: bomba só pra higiene!' },
  { name: 'Drinks / cerveja / vinho', cat: 'food',        note: 'Cooler bem gelado' },
  { name: 'Suco de caixa',          cat: 'food',          note: '' },
  { name: 'Azeite + sal + pimenta + temperos', cat: 'food', note: '' },
  { name: 'Papel alumínio',         cat: 'food',          note: 'Foil packets e BBQ' },

  // --- PERSONAL ---
  { name: 'Roupas p/ 3 dias + extra', cat: 'personal',   note: 'Sempre molha uma peça a mais' },
  { name: 'Capa de chuva / poncho',  cat: 'personal',    note: 'BC — chuva sem aviso' },
  { name: 'Jaqueta quente',         cat: 'personal',      note: 'Noites frescas em junho/julho' },
  { name: 'Roupa de banho',         cat: 'personal',      note: '+ troca rápida' },
  { name: 'Toalhas',                cat: 'personal',      note: 'De banho + de praia' },
  { name: 'Sandália / crocs',       cat: 'personal',      note: 'Para banho e caminhada leve' },
  { name: 'Tênis / bota de trilha', cat: 'personal',      note: 'Teapot Hill trail' },
  { name: 'Shampoo + condicionador', cat: 'personal',     note: '' },
  { name: 'Sabonete',               cat: 'personal',      note: '' },
  { name: 'Desodorante',            cat: 'personal',      note: '' },
  { name: 'Escova + pasta de dente', cat: 'personal',     note: '' },
  { name: 'Papel higiênico extra',  cat: 'personal',      note: 'Nunca é demais' },
  { name: 'Toalha de mão / lenço úmido', cat: 'personal', note: '' },
  { name: 'Óculos de sol',          cat: 'personal',      note: '' },
  { name: 'Carregador de celular',  cat: 'personal',      note: 'Energia disponível em alguns sites' },
  { name: 'Powerbank',              cat: 'personal',      note: '' },
  { name: 'Documentos (ID + booking confirmação)', cat: 'personal', note: '' },

  // --- KIDS ---
  { name: 'Roupas extras (kids)',   cat: 'kids',           note: 'Dobrar a quantidade' },
  { name: 'Pijamas quentes',        cat: 'kids',           note: 'Noites mais frias' },
  { name: 'Fraldas / pull-ups',     cat: 'kids',           note: 'Se aplicável' },
  { name: 'Kit banho kids',         cat: 'kids',           note: 'Shampoo suave, escovinha' },
  { name: 'Botas de chuva (kids)',  cat: 'kids',           note: 'Para brincadeiras na lama' },
  { name: 'Colete salva-vidas kids', cat: 'kids',          note: 'Obrigatório na água' },
  { name: 'Brinquedos de areia',    cat: 'kids',           note: 'Baldinho, pazinha, forma' },
  { name: 'Livros / atividades calmas', cat: 'kids',       note: 'Para noites ou dias chuvosos' },

  // --- ENTERTAINMENT ---
  { name: 'Baralho de cartas',      cat: 'entertainment',  note: 'Clássico de camping' },
  { name: 'Jogo de tabuleiro pequeno', cat: 'entertainment', note: '' },
  { name: 'Livro',                  cat: 'entertainment',  note: '' },
  { name: 'Bola de futebol / frisbee', cat: 'entertainment', note: '' },
  { name: 'Raquetes de badminton', cat: 'entertainment',   note: 'Perto do lago fica ótimo' },
  { name: 'Vareta de marshmallow', cat: 'entertainment',   note: '' },
  { name: 'Binóculos',              cat: 'entertainment',  note: 'Muitas aves no Cultus Lake' },
  { name: 'Câmera fotográfica',     cat: 'entertainment',  note: '' },
  { name: 'Fone de ouvido Bluetooth', cat: 'entertainment', note: '' },

  // --- SAFETY & HEALTH ---
  { name: 'Repelente de insetos (DEET)', cat: 'safety',   note: 'Mosquitos perto do lago!' },
  { name: 'Protetor solar FPS 50+', cat: 'safety',        note: '' },
  { name: 'Kit primeiros socorros', cat: 'safety',        note: 'Band-aid, antisséptico, gaze' },
  { name: 'Remédio para febre/dor', cat: 'safety',        note: 'Advil, Tylenol' },
  { name: 'Anti-histamínico',       cat: 'safety',        note: 'Reação a inseto' },
  { name: 'Receitas e medicamentos regulares', cat: 'safety', note: '' },
  { name: 'Protetor labial',        cat: 'safety',        note: '' },
  { name: 'Creme hidratante',       cat: 'safety',        note: '' },
  { name: 'Apito de emergência',    cat: 'safety',        note: 'Para trilhas' },
  { name: 'Mapa do parque impresso', cat: 'safety',       note: 'Sem sinal no Westside' },

  // --- CULTUS LAKE SPECIFIC ---
  { name: 'Boia / inflável de lago', cat: 'cultus',       note: 'Entrance Bay e Maple Bay' },
  { name: 'Remo / caiaque',         cat: 'cultus',        note: 'Ou alugar no parque' },
  { name: 'Creme pós-mergulho',     cat: 'cultus',        note: 'Swimmer\'s itch — common no lago' },
  { name: 'Chinelo aquático',       cat: 'cultus',        note: 'Pedras no fundo' },
  { name: 'Câmera à prova d\'água', cat: 'cultus',        note: '' },
  { name: 'Fishing license BC',     cat: 'cultus',        note: 'Truta arco-íris, salmão' },
  { name: 'Vara de pescar',         cat: 'cultus',        note: 'Pesca ótima em Cultus' },
  { name: 'Protetor de ouvido (para dormir)', cat: 'cultus', note: 'Estrada movimentada perto do Entrance Bay' },
];

// =============================================
// STATE
// =============================================
const STORAGE_KEY = 'camping_cultus_v1';
let items = [];
let currentFilter = 'all';
let editingId = null;

function load() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    items = JSON.parse(stored);
  } else {
    items = DEFAULT_ITEMS.map((d, i) => ({
      id: i + 1,
      name: d.name,
      cat: d.cat,
      note: d.note,
      checked: false,
    }));
    save();
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

// =============================================
// RENDER
// =============================================
function getFilteredItems() {
  if (currentFilter === 'packed')  return items.filter(i => i.checked);
  if (currentFilter === 'missing') return items.filter(i => !i.checked);
  return items;
}

function renderStats() {
  const total  = items.length;
  const packed = items.filter(i => i.checked).length;
  document.getElementById('headerStats').innerHTML = `
    <span class="stat-pill total">${total} itens</span>
    <span class="stat-pill done">${packed} ✓</span>
  `;
}

function renderMain() {
  const main    = document.getElementById('main');
  const visible = getFilteredItems();

  if (visible.length === 0) {
    main.innerHTML = `<div class="empty-state">
      <div style="font-size:36px">🏕️</div>
      <p>Nenhum item aqui ainda.</p>
    </div>`;
    return;
  }

  // Group by category in order
  const groups = {};
  CATEGORIES.forEach(c => { groups[c.id] = []; });
  visible.forEach(item => {
    if (groups[item.cat] !== undefined) groups[item.cat].push(item);
  });

  let html = '';
  CATEGORIES.forEach(cat => {
    const catItems = groups[cat.id];
    if (catItems.length === 0) return;

    const checkedCount = catItems.filter(i => i.checked).length;
    const allDone      = checkedCount === catItems.length;
    const badgeClass   = allDone ? 'category-badge complete' : 'category-badge';
    const badgeText    = `${checkedCount}/${catItems.length}`;

    html += `
    <div class="category-section" id="cat-${cat.id}">
      <div class="category-header" onclick="toggleCategory('${cat.id}')">
        <div class="category-title">
          <span>${cat.label}</span>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="${badgeClass}">${badgeText}</span>
          <span class="category-chevron">▾</span>
        </div>
      </div>
      <div class="category-items" id="items-${cat.id}">
        ${catItems.map(item => renderItem(item)).join('')}
      </div>
    </div>`;
  });

  main.innerHTML = html;

  // Set max-heights for animation
  CATEGORIES.forEach(cat => {
    const el = document.getElementById(`items-${cat.id}`);
    if (el) el.style.maxHeight = el.scrollHeight + 'px';
  });
}

function renderItem(item) {
  const checkClass = item.checked ? 'item-check checked' : 'item-check';
  const rowClass   = item.checked ? 'item-row checked' : 'item-row';
  const noteHtml   = item.note
    ? `<div class="item-note">${escHtml(item.note)}</div>`
    : '';

  return `
  <div class="${rowClass}" id="item-${item.id}">
    <div class="${checkClass}" onclick="toggleCheck(${item.id})">
      <span class="check-icon">✓</span>
    </div>
    <div class="item-text">
      <div class="item-name">${escHtml(item.name)}</div>
      ${noteHtml}
    </div>
    <button class="item-delete" onclick="deleteItem(${item.id})" title="Remover">✕</button>
  </div>`;
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function render() {
  renderStats();
  renderMain();
}

// =============================================
// INTERACTIONS
// =============================================
function toggleCategory(catId) {
  const section = document.getElementById(`cat-${catId}`);
  const itemsEl = document.getElementById(`items-${catId}`);
  if (!section || !itemsEl) return;

  if (section.classList.contains('collapsed')) {
    section.classList.remove('collapsed');
    itemsEl.style.maxHeight = itemsEl.scrollHeight + 'px';
  } else {
    itemsEl.style.maxHeight = itemsEl.scrollHeight + 'px';
    requestAnimationFrame(() => {
      section.classList.add('collapsed');
      itemsEl.style.maxHeight = '0';
    });
  }
}

function toggleCheck(id) {
  items = items.map(i => i.id === id ? { ...i, checked: !i.checked } : i);
  save();

  const item = items.find(i => i.id === id);

  // If a filter is active that would hide this item, do a full re-render
  if (currentFilter !== 'all') {
    render();
    return;
  }

  // Surgical DOM update — no layout jump
  const row       = document.getElementById(`item-${id}`);
  const checkEl   = row?.querySelector('.item-check');
  const nameEl    = row?.querySelector('.item-name');
  const checkIcon = row?.querySelector('.check-icon');
  if (!row || !checkEl || !nameEl) { render(); return; }

  if (item.checked) {
    row.classList.add('checked');
    checkEl.classList.add('checked');
    if (checkIcon) checkIcon.style.display = 'block';
  } else {
    row.classList.remove('checked');
    checkEl.classList.remove('checked');
    if (checkIcon) checkIcon.style.display = 'none';
  }

  // Update category badge
  const catItems     = items.filter(i => i.cat === item.cat);
  const checkedCount = catItems.filter(i => i.checked).length;
  const allDone      = checkedCount === catItems.length;
  const badge        = document.querySelector(`#cat-${item.cat} .category-badge`);
  if (badge) {
    badge.textContent = `${checkedCount}/${catItems.length}`;
    badge.className   = allDone ? 'category-badge complete' : 'category-badge';
  }

  // Update header stats
  renderStats();
}

function deleteItem(id) {
  items = items.filter(i => i.id !== id);
  save();
  render();
}

// =============================================
// MODAL
// =============================================
function openModal() {
  editingId = null;
  document.getElementById('modalTitle').textContent = 'Novo item';
  document.getElementById('fName').value     = '';
  document.getElementById('fCategory').value = 'gear';
  document.getElementById('fNote').value     = '';
  document.getElementById('modalOverlay').classList.add('open');
  setTimeout(() => document.getElementById('fName').focus(), 100);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function saveItem() {
  const name = document.getElementById('fName').value.trim();
  if (!name) {
    document.getElementById('fName').focus();
    return;
  }
  const cat  = document.getElementById('fCategory').value;
  const note = document.getElementById('fNote').value.trim();

  const newItem = {
    id:      Date.now(),
    name,
    cat,
    note,
    checked: false,
  };

  items.push(newItem);
  save();
  render();
  closeModal();
}

// =============================================
// FILTER
// =============================================
document.getElementById('filterBar').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  render();
});

// =============================================
// BIND EVENTS
// =============================================
document.getElementById('fabBtn').addEventListener('click', openModal);
document.getElementById('cancelBtn').addEventListener('click', closeModal);
document.getElementById('saveBtn').addEventListener('click', saveItem);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

document.getElementById('fName').addEventListener('keydown', e => {
  if (e.key === 'Enter') saveItem();
});

// Expose globals for inline onclick
window.toggleCategory = toggleCategory;
window.toggleCheck    = toggleCheck;
window.deleteItem     = deleteItem;

// =============================================
// INIT
// =============================================
load();
render();
