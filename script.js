let library = [
  {
    id: "b1",
    type: "book",
    title: "Example Novel",
    author: "Author Name",
    cover: "https://via.placeholder.com/300x400?text=Book+Cover",
    tags: ["Fantasy", "Novel"],
    content: "This is an example book. Replace this string with the full text of the book or fetch it from a file."
  },
  {
    id: "m1",
    type: "manga",
    title: "Example Manga",
    author: "Manga Artist",
    cover: "https://via.placeholder.com/300x400?text=Manga+Cover",
    tags: ["Action", "Manga"],
    pages: [
      "https://via.placeholder.com/800x1200?text=Page+1",
      "https://via.placeholder.com/800x1200?text=Page+2",
      "https://via.placeholder.com/800x1200?text=Page+3"
    ]
  }
];

const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter');

// Render card
function renderCard(item) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <img class="cover" src="${item.cover}" alt="${escapeHtml(item.title)} cover" />
    <div class="card-body">
      <div class="title">${escapeHtml(item.title)}</div>
      <div class="meta">${escapeHtml(item.author)} • ${item.type}</div>
      <div class="tags">${(item.tags||[]).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      <div style="margin-top:8px;">
        <button class="open" data-id="${item.id}">Read</button>
      </div>
    </div>
  `;
  return div;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>\"]/g, c => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  }[c]));
}

function renderGrid(items) {
  grid.innerHTML = '';
  if (items.length === 0) {
    grid.innerHTML = '<p style="color:#aaa">No results.</p>';
    return;
  }
  items.forEach(i => grid.appendChild(renderCard(i)));
  grid.querySelectorAll('.open').forEach(btn => btn.addEventListener('click', e => {
    const id = e.currentTarget.dataset.id;
    openReader(id);
  }));
}

// filtering and searching
function getActiveFilter() {
  const btn = document.querySelector('.filter.active');
  return btn ? btn.dataset.type : 'all';
}

function applyFilters() {
  const q = searchInput.value.trim().toLowerCase();
  const type = getActiveFilter();
  const items = library.filter(item => {
    if (type !== 'all' && item.type !== type) return false;
    if (!q) return true;
    const hay = (item.title + ' ' + (item.author || '') + ' ' + (item.tags || []).join(' ')).toLowerCase();
    return hay.includes(q);
  });
  renderGrid(items);
}
