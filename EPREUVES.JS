/* exams.js */

// Exemple de données pour le tableau (à remplacer par des données dynamiques si nécessaire)
const exams = [
    { name: 'Algorithmes_2023.pdf', year: 2023, views: 1200, rating: 4.5 },
    { name: 'Reseaux_2022.pdf', year: 2022, views: 950, rating: 4.2 },
    { name: 'Cybersécurité_2021.pdf', year: 2021, views: 1100, rating: 4.7 },
    { name: 'IA_2020.pdf', year: 2020, views: 1300, rating: 4.8 }
];

// Fonction pour afficher les données dans le tableau
function populateTable() {
    const tableBody = document.getElementById('examTable');
    exams.forEach(exam => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><a href="#" onclick="confirmDownload('${exam.name}')">${exam.name}</a></td>
            <td>${exam.year}</td>
            <td>${exam.views}</td>
            <td>${renderRating(exam.rating)}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Fonction pour afficher les étoiles de notation
function renderRating(rating) {
    const maxRating = 5;
    let stars = '';
    for (let i = 1; i <= maxRating; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// Fonction pour confirmer le téléchargement
function confirmDownload(filename) {
    if (confirm(`Voulez-vous vraiment télécharger ${filename} ?`)) {
        // Simule le téléchargement (à remplacer par un lien réel)
        alert(`${filename} est en cours de téléchargement...`);
        // window.location.href = `path/to/${filename}`;
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const filiere = urlParams.get('filiere');
    const niveau = urlParams.get('niveau');

    document.getElementById('filiere').textContent = filiere;
    document.getElementById('niveau').textContent = niveau;

    populateTable();
});
