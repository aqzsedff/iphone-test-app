// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('heroVideo');
    const videoScreen = document.getElementById('videoScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Проверяем, есть ли видео
    if (video) {
        // Когда видео закончится
        video.addEventListener('ended', function() {
            // Плавно скрываем видео экран
            videoScreen.style.transition = 'opacity 1s ease';
            videoScreen.style.opacity = '0';
            
            // Показываем основной контент
            setTimeout(function() {
                videoScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                // Добавляем класс для анимации появления
                mainContent.style.animation = 'fadeIn 1.5s ease';
            }, 1000);
        });
        
        // На случай, если видео не загружается или короткое
        setTimeout(function() {
            if (videoScreen.style.display !== 'none') {
                videoScreen.style.transition = 'opacity 1s ease';
                videoScreen.style.opacity = '0';
                setTimeout(function() {
                    videoScreen.style.display = 'none';
                    mainContent.classList.remove('hidden');
                    mainContent.style.animation = 'fadeIn 1.5s ease';
                }, 1000);
            }
        }, 16000); // 16 секунд (видео 15 сек + запас)
    }
});

// Добавляем анимацию появления
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);