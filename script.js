// Fetch and display app updates
async function loadAppUpdates() {
    try {
        const response = await fetch('appupdate.json');
        if (!response.ok) {
            throw new Error('Failed to load app updates');
        }
        const data = await response.json();
        
        displayGames(data.games);
        displayApps(data.apps);
        updateLastUpdated();
    } catch (error) {
        console.error('Error loading app updates:', error);
        showError('games-list');
        showError('apps-list');
    }
}

function displayGames(games) {
    const gamesContainer = document.getElementById('games-list');
    
    if (!games || games.length === 0) {
        gamesContainer.innerHTML = '<div class="loading">No games available</div>';
        return;
    }
    
    gamesContainer.innerHTML = games.map(game => createItemCard(game)).join('');
}

function displayApps(apps) {
    const appsContainer = document.getElementById('apps-list');
    
    if (!apps || apps.length === 0) {
        appsContainer.innerHTML = '<div class="loading">No apps available</div>';
        return;
    }
    
    appsContainer.innerHTML = apps.map(app => createItemCard(app)).join('');
}

function createItemCard(item) {
    const statusClass = `status-${item.status || 'stable'}`;
    const formattedDate = formatDate(item.releaseDate);
    
    return `
        <div class="item-card">
            <div class="item-header">
                <h3 class="item-name">${escapeHtml(item.name)}</h3>
                <div class="item-version">v${escapeHtml(item.version)}</div>
                <span class="status-badge ${statusClass}">${escapeHtml(item.status || 'stable')}</span>
            </div>
            <p class="item-description">${escapeHtml(item.description || 'No description available')}</p>
            <p class="item-date">Released: ${formattedDate}</p>
        </div>
    `;
}

function formatDate(dateString) {
    if (!dateString) return 'Unknown';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function showError(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '<div class="error">Failed to load data. Please try again later.</div>';
}

function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    const now = new Date();
    lastUpdatedElement.textContent = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Load data when page loads
document.addEventListener('DOMContentLoaded', loadAppUpdates);
