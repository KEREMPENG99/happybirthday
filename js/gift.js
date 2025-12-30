// Array of messages with images
        const messages = [
            {
                image: "images/kado.png",
                text: "I Love You Sayang! 💖",
                color: "#ff6b6b"
            }
        ];
        
        let clickCount = "";
        
        // Get random message
        function getRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }
        
        // Show message popup
        function showRandomMessage() {
            // Update click count
            document.getElementById('clickCount').textContent = clickCount;
            
            // Get random message
            const message = getRandomMessage();
            
            // Create popup content
            const content = `
                <h2>Surprise sayangku! 🎁</h2>
                <img class="message-image" src="${message.image}" alt="Surprise Image">
                <div class="message-text" style="color: ${message.color}">
                    ${message.text}
                </div>
                <p>Semoga bermanfaat ya sayangku</p><br><p>7 lagi Bulan kita bertemu sayangku 🤗</p>
            `;
            
            // Insert content
            document.getElementById('messageContent').innerHTML = content;
            
            // Show popup and overlay
            document.getElementById('messagePopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            
            // Add celebration effect
            celebrate();
        }
        
        // Close popup
        function closePopup() {
            document.getElementById('messagePopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
        
        // Celebration effect (confetti)
        function celebrate() {
            // Simple celebration effect
            const giftIcon = document.querySelector('.gift-icon');
            giftIcon.style.transform = 'scale(1.3)';
            giftIcon.style.color = getRandomColor();
            
            setTimeout(() => {
                giftIcon.style.transform = 'scale(1)';
                giftIcon.style.color = '#e91e63';
            }, 300);
        }
        
        // Generate random color
        function getRandomColor() {
            const colors = ['#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#00bcd4', '#4caf50'];
            return colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Close popup when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePopup();
            }
        });
